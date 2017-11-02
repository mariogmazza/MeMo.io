import React from "react";
import Button from "../Buttons/Button";
import Switchcontainer from "../Switchcontainer/Switchcontainer";
import BoxOut from "../BoxOut/BoxOut"
import StartStrictBtn from "../StartStrictBtn/StartStrictBtn"
import SwitchOnOff from "../SwitchOnOff/SwitchOnOff"

                      
class BtnControl extends React.Component {
  constructor(props){
  super(props)

    this.gameArr=[]
    this.userArr=[]
    this.gameOn=false
    this.equalArr=true
    this.gameArrCounter=0
    this.userArrCounter=0
    this.speed=1000
    this.tempColor=""
    this.levelCount=1
    this.bCheck=0
    this.bStrict=0
    this.gameCall=false

  this.state = {
    button1:false,
    button2:false,
    button3:false,
    button4:false,
    gameRunning:false,
    strictMode:false,
    boxOut:"",
    buttonStyle:{},
    switchText:"ON",
    switchClass:"toggleSW-left"
  }

  
}//end of constructor

  componentDidMount(){
 
  }

  componentWillMount(){
  
  }

  getRandom=()=> {
    console.log("getRandom() was called it pushes a new button to gameArr");
    this.gameArr.push(`button${this.getRandomIntInclusive(1, 4)}`)
  }

  getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 

toggleSwitch=()=>{

  console.log("toggleSwitch() was call => sets the game");

  if (this.bCheck === 0) {
    console.log("bCheck is = 0");

    this.gameOn=true
    this.bCheck=1

    this.setState({
      switchText:"OFF",
      switchClass:"toggleSW-right",
      boxOut:"READY!!!"
    })
  }else if(this.bCheck===1){

    console.log("bCheck is = 1");
    this.gameOn=false
    this.bCheck =0
    this.gameArr=[]
    this.userArr =[]
    this.levelCount=1
    this.gameArrCounter=0
    this.userArrCounter=0
    this.bStrict=0
    this.equalArr=true

    this.setState({
      gameRunning:false,
      switchText:"ON",
      switchClass:"toggleSW-left",
      boxOut:"-----",
      strictMode:false,
      buttonStyle:{pointerEvents:"none"}
    })
      console.log("clearInterval called in bCheck=1");
      clearInterval(this.gameCall);
  }
  
}

startClk=()=>{
  if(this.gameOn===true){
    console.log("startClk was called starts the game");
    
    this.userArr= []
    this.gameArr= []
    this.gameArrCounter=0
    this.userArrCounter=0
    this.levelCount=1
    this.equalArr=true

    this.setState({
    gameRunning:true,
    buttonStyle:{pointerEvents:"none"},
    })
      console.log("calling: getRandom(), clearInterval()");
    this.getRandom()
    clearInterval(this.gameCall)
    // this.startGame()
    setTimeout(()=> { //maybe remove windows. if err
      this.gameCall=setInterval(this.playGame(),this.speed)
      console.log("first settimeout calle, playGame");
    },1000)
  }
}

buttonClick= (number) =>{
  if (this.gameOn === true && this.state.gameRunning === true) {  
   this.buttonFx("button"+number);
  // $("#sound" + tempID).get(0).cloneNode().play(); // sound to the button
    this.userArr.push("button"+number)// pushes current button when clicked
    console.log("userArrCounter before increment "+this.userArrCounter);
    this.userArrCounter=this.userArrCounter+1

    console.log("userArrCounter after incremented "+this.userArrCounter)
    console.log("userArr length "+this.userArr.length);

     for (let i = 0; i < this.userArr.length; i++) {
   // checks if game Array and user Array are the same
      if (this.gameArr[i] !== this.userArr[i]) {
        console.log(this.gameArr[i]+);
        this.equalArr=false
     }
   }

   if(this.equalArr===false){
    // $("#Wrong").get(0).cloneNode().play();
    this.userArr = []
    this.gameArrCounter = 0
    this.userArrCounter = 0
    this.equalArr = true
    this.setState({
    boxOut:"NOPE!",
    buttonStyle: {pointerEvents: "none"}
    })
  
   if (this.state.strictMode === true) {
       this.gameArr=[]
       this.levelCount=1
       this.getRandom()
       setTimeout(()=> { //maybe remove windows. if err
        this.gameCall=setInterval(this.playGame(),this.speed)
        console.log("second settimeout called, playGame");
      },1000)

   }
   
   else{
    setTimeout(()=> { //maybe remove windows. if err
      this.gameCall=setInterval(this.playGame(),this.speed)
      console.log("third settimeout called, playGame");
    },1000)
   }

 }

 else{
  if (this.userArrCounter === this.gameArrCounter) {
      if(this.levelCount===20){
        clearInterval(this.gameCall)
        this.setState({boxOut:"YOU WON!!"})
        this.winMode()
      }
      if(this.equalArr===true){
          this.levelCount=this.levelCount+1
          this.userArr=[]
          this.gameArrCounter=0
          this.userArrCounter=0
          this.getRandom()

        if (this.levelCount < 4) {
          this.speed =1000
        } else if (this.levelCount === 5) {
          this.speed =800
        } else if (this.levelCount === 10) {
          this.speed =600
        } else if (this.levelCount === 15) {
          this.speed =400
        }
        setTimeout(()=> { //maybe remove windows. if err
          this.gameCall=setInterval(this.playGame(),this.speed)
          console.log("fourth settimeout called, playGame");
        },1000)
        // this.setState({buttonStyle:{pointerEvents:"none"}})
     } //end of equalArr
    }
   }
  }
 }


strictClk=()=>{
  if (this.gameOn === true && this.state.gameRunning === false) {
    this.setState({strictMode:true})
    if(this.bStrict===0){
        this.bStrict=1
    }else if(this.bStrict===1){
        this.bStrict=0
    }
  }
}

 playGame=()=>{
this.setState({boxOut:this.levelCount.toString()})
this.tempColor=this.gameArr[this.gameArrCounter]
console.log("this is tempColor "+this.tempColor);
this.buttonFx(this.tempColor)
this.gameArrCounter=this.gameArrCounter+1
console.log("this is gameArrCounter "+this.gameArrCounter);
if(this.gameArrCounter===this.gameArr.length){
  console.log("gameArrCounter and gameArr are the same");
  clearInterval(this.gameCall)
  this.setState({buttonStyle:{pointerEvents: "auto"}})
 }
}


 buttonFx=(buttonN)=>{
  const currB=buttonN;  

  this.effect=setTimeout(()=> {
    this.setState({[currB]:true})
  },200)

 this.effect= setTimeout(()=> {
    this.setState({[currB]:false})
  },350)
}
                     
  render(){
  return(
  <div>
   
    <Button style={this.state.buttonStyle} onClick={this.buttonClick} number={1} ifclicked={this.state.button1}/>
    <Button style={this.state.buttonStyle} onClick={this.buttonClick} number={2} ifclicked={this.state.button2}/>
    <Button style={this.state.buttonStyle} onClick={this.buttonClick} number={3} ifclicked={this.state.button3}/>
    <Button style={this.state.buttonStyle} onClick={this.buttonClick} number={4} ifclicked={this.state.button4}/>

    <Switchcontainer>

    <BoxOut screen={this.state.boxOut} />

    <StartStrictBtn strictClk={this.strictClk} startClk={this.startClk} gameRunning={this.state.gameRunning} strictMode={this.state.strictMode}>

    <SwitchOnOff  toggleSwitch={this.toggleSwitch} text={this.state.switchText} className={this.state.switchClass} />

    </StartStrictBtn>

    </Switchcontainer>

  </div>
  
  )}

}
export default BtnControl;
