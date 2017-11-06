import React,{Component} from 'react'
import StartStrictBtn from '../StartStrictBtn/StartStrictBtn'
import Buttons from '../Buttons/Buttons'
import BoxOut from '../BoxOut/BoxOut'
import Switchcontainer from "../Switchcontainer/Switchcontainer"

class Btncontrol extends Component {
  constructor(props){
    super(props)
  
  this.state= {
      gameOn: false,
      strictMode: false,
      counter: 0,
      activeItems: [false, false, false, false],
      isEnabled: false,
      isBlinking: false
  }
  
}

  handleStrictMode=(event)=> {
    this.setState({
      strictMode: !this.state.strictMode
    })
  }

  handleStart=()=>{
    if (this.state.gameOn) {
      this.stop();
    } else {
      this.setState({
        gameOn: true
      }, this.counterUp);
    }
  }

  counterUp=()=> {
    if (this.state.gameOn) {
      this.setState({
        counter: this.state.counter+1
      }, this.start)
    }
  }

  stop =()=> {
    this.currentIndex = 0;
    this.soundArray = [];
    this.setState({
      gameOn: false,
      strictMode: this.state.strictMode,
      counter: 0,
      activeItems: [false, false, false, false],
      isEnabled: false,
      isBlinking: false
    })
  }

  start=()=> {
    if (!this.state.gameOn) {
      return
    }

    if (this.soundArray.length < this.state.counter) {
      this.soundArray.push(Math.floor(Math.random() * 4));
    }

    this.playSounds();
  }

  playSounds =()=> {

    this.setState({
      isBlinking: false
    })

    if (!this.state.gameOn) {
      return;
    }

    this.currentIndex = 0;

    // removes active effect to board item
   this.setInactive = (i)=> {
      var activeItems = this.state.activeItems;
      activeItems[i] = false;
      this.setState({
        activeItems: activeItems
      });
    }

    // adds active effect to board item
  this.setActive = (i)=> {
      var activeItems = this.state.activeItems;
      activeItems[i] = true;
      this.setState({
        activeItems: activeItems
      }, ()=> {
        setTimeout(this.setInactive, 400, i)
      });
    }

   this.playSound =(i)=> {
      if (i < this.soundArray.length) {
        var index = this.soundArray[i];
        this.setActive(index);
        this.soundBoard[index].play();
        setTimeout(this.playSound, 700, i+1);
      } else {
        this.setState({
          isEnabled: true
        });
      }
    }
    this.playSound(0)
  } //end playsound
  
  handleMouseDown=(i, event)=> {
    this.soundBoard[i].play()

    if (i === this.soundArray[this.currentIndex]) {
      this.currentIndex++;
      if (this.currentIndex >= this.soundArray.length) {
        setTimeout(this.counterUp, 1000);
      }
    } else {
      this.setState({
        isBlinking: true
      }, () => setTimeout(this.handleError, 500));
    }
  }
  
  handleError=()=> {
    if (this.state.strictMode) {
      this.stop();
      setTimeout(this.handleStart, 1000);
    } else {
      setTimeout(this.playSounds, 1000);
    }
  }

  componentDidMount=()=> {
    this.soundBoard = {
      0: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
      1: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
      2: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
      3: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
    }
    this.soundArray = [];
    this.currentIndex = 0;
  }

  render= ()=> {
    return (
      <div>

     <Switchcontainer>
 
      <BoxOut counter={this.state.counter} />

        <StartStrictBtn
          gameOn={this.state.gameOn}
          strictMode={this.state.strictMode}
          onStrictMode={this.handleStrictMode}
          onStart={this.handleStart}
        />
     </Switchcontainer>


        <Buttons
          onMouseDown={this.handleMouseDown}
          activeItems={this.state.activeItems}
          isEnabled={this.state.isEnabled}
          isBlinking={this.state.isBlinking}
        />

      </div>
    )
  }

}

export default Btncontrol;
