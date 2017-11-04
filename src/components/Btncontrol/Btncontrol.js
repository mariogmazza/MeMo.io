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
    disableButtons:false,
    switchText:"ON",
    switchClass:"toggleSW-left"
  }

  
}//end of constructor

  componentDidMount(){
    
  }

  componentWillMount(){
  
  }

  getRandom=()=> {
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

    this.gameOn=true
    this.bCheck=1

    this.setState({
      switchText:"OFF",
      switchClass:"toggleSW-right",
      boxOut:"READY!!!"
    })
  }else if(this.bCheck===1){
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
      disableButtons:true
    })
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
    disableButtons:true
    })
    this.getRandom()
    clearInterval(this.gameCall)

    setTimeout(()=> { 
      this.gameCall=setInterval(this.playGame(),this.speed)
    },1000)
  }
}

buttonClick= (number) =>{
  if (this.gameOn === true && this.state.gameRunning === true) {  
   this.buttonFx("button"+number);
    this.userArr.push("button"+number)
    this.userArrCounter=this.userArrCounter+1

     for (let i = 0; i < this.userArr.length; i++) {
   // checks if game Array and user Array are the same
      if (this.gameArr[i] !== this.userArr[i]) {
        console.log(this.gameArr[i]);
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
    disableButtons: true
    })
  
   if (this.state.strictMode === true) {
       this.gameArr=[]
       this.levelCount=1
       this.getRandom()
       setTimeout(()=> { //maybe remove windows. if err
        this.gameCall=setInterval(this.playGame(),this.speed)
      },1000)

   }
   
   else{
    setTimeout(()=> { //maybe remove windows. if err
      this.gameCall=setInterval(this.playGame(),this.speed)
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
        },1000)
        this.setState({disableButtons:true})
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
this.buttonFx(this.tempColor)
this.gameArrCounter=this.gameArrCounter+1
if(this.gameArrCounter===this.gameArr.length){
  clearInterval(this.gameCall)
  this.setState({disableButtons:false})
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
   
    <Button disable={this.state.disableButtons} onClick={this.buttonClick} number={1} ifclicked={this.state.button1}/>
    <Button disable={this.state.disableButtons} onClick={this.buttonClick} number={2} ifclicked={this.state.button2}/>
    <Button disable={this.state.disableButtons} onClick={this.buttonClick} number={3} ifclicked={this.state.button3}/>
    <Button disable={this.state.disableButtons} onClick={this.buttonClick} number={4} ifclicked={this.state.button4}/>

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
