import React from "react";
import Button from "../Buttons/Button";
import Switchcontainer from "../Switchcontainer/Switchcontainer";
import BoxOut from "../BoxOut/BoxOut"
import StartStrictBtn from "../StartStrictBtn/StartStrictBtn"
import SwitchOnOff from "../SwitchOnOff/SwitchOnOff"


class BtnControl extends React.Component {
  constructor(props){
  super(props)

  this.state = {
    userArr:[],
    gameArr:[],

    button1:false,
    button2:false,
    button3:false,
    button4:false,

    gameOn:false,
    equalArr:true,

    gameArrCounter:0,
    userArrCounter:0,

    speed:1000,
    tempColor:"",
    levelCount:1,
    gameRunning:false,
    bCheck:0,
    bStrict:0,
    strictMode:false,
    boxOut:"",

    buttonStyle:{},
    startStyle:{},
    strictStyle:{},

    switchText:"ON",
    switchClass:"toggleSW-left"
  }
}//end of constructor

  componentDidMount(){
 
  }

  componentWillMount(){
  
  }

  getRandom=()=> {
    console.log("getRandom() was called");
    this.state.gameArr.push("button" + this.getRandomIntInclusive(1, 4))
  }

  getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 

//################################################
toggleSwitch=()=>{

  console.log("toggleSwitch() was call => sets the game");

  if (this.state.bCheck === 0) {

    console.log("bCheck is = 0");

    this.setState({
      gameOn:true,
      bCheck:1,
      switchText:"OFF",
      switchClass:"toggleSW-right",
      boxOut:"READY!!!"
    })
  }else if(this.state.bCheck===1){

    console.log("bCheck is = 1");

    this.setState({
      gameOn:false,
      gameRunning:false,
      switchText:"ON",
      switchClass:"toggleSW-left",
      bCheck : 0,
      gameArr : [],
      userArr :[],
      levelCount:1,
      boxOut:"-----",
      // strictStyle:{backgroundColor: "yellow"},
      // startStyle:{backgroundColor:"green"},
      gameArrCounter:0,
      userArrCounter:0,
      strictMode:false,
      bStrict: 0,
      equalArr:true,
      buttonStyle:{pointerEvents:"none"}
    })
    this.clearInterval();
  }
  
}

startClk=()=>{
  if(this.state.gameOn===true){
    console.log("startClk was called starts the game");
    
    this.setState({
    gameRunning:true,
    userArr: [],
    gameArr: [],
    gameArrCounter :0,
    userArrCounter :0,
    levelCount : 1,
    equalArr :true,
    buttonStyle:{pointerEvents:"none"},
    })
    this.getRandom()
    this.clearInterval()
    this.startGame()
  }
}

clearInterval=()=>{
    this.clear=window.clearInterval(this.gameCall);
}

startGame=()=>{
  setTimeout(()=> {
    this.gameCall=window.setInterval(this.playGame(),this.state.speed)
  },1000)
}

userChoice(number){
  let Arr = this.state.userArr
    Arr.push("button" + number)
 this.setState({ userArr: Arr })
}


buttonClick= (number) =>{
  if (this.state.gameOn === true && this.state.gameRunning === true) {  
    // if (event.which == 1) {
      
//buttons visual effects
   this.buttonFx("button"+number);

//**********************************************
  // $("#sound" + tempID).get(0).cloneNode().play(); // sound to the button
    this.userChoice(number)// pushes current button when clicked
    this.setState({userArrCounter:this.state.userArrCounter+1})

    console.log("userArrCounter "+this.state.userArrCounter)

     for (let i = 0; i < this.state.userArr.length; i++) {
   // checks if game Array and user Array are the same
   console.log("gameArr "+this.state.gameArr[i]+" userArr "+this.state.userArr[i]);
   
      if (this.state.gameArr[i] !== this.state.userArr[i]) {
       this.setState({equalArr :false})
     }
   }
   if(this.state.equalArr===false){
    // $("#Wrong").get(0).cloneNode().play();
    this.setState({
    boxOut:"NOPE!",
    userArr :[],
    gameArrCounter : 0,
    userArrCounter : 0,
    equalArr :true,
    // buttonStyle: {pointerEvents: "none"}
    })
  //  }
   if (this.state.strictMode === true) {
     this.setState({
       gameArr:[],
       levelCount:1,
    })
    this.getRandom()
    this.startGame()
   }else{
     this.startGame()
   }
 }else{

  if (this.state.userArrCounter === this.state.gameArrCounter) {
      if(this.state.levelCount===20){
        this.clearInterval()
        this.setState({boxOut:"YOU WON!!"})
        this.winMode()
      }
      if(this.state.equalArr===true){
        this.setState({
          levelCount:this.state.levelCount+1,
          userArr:[],
          gameArrCounter:0,
          userArrCounter:0,
          // buttonStyle: {pointerEvents: "none"}          
        })
        this.getRandom()

        if (this.state.levelCount < 4) {
          this.setState({speed :1000})
        } else if (this.state.levelCount === 5) {
          this.setState({speed :800})
        } else if (this.state.levelCount === 10) {
          this.setState({speed :600})
        } else if (this.state.levelCount === 15) {
          this.setState({speed :400})
        }
        this.startGame()
      } //end of equalArr
    }
  }
//  }
}
}


strictClk=()=>{
  if (this.state.gameOn === true && this.state.gameRunning === false) {
    this.setState({strictMode:true})
    if(this.state.bStrict===0){
      this.setState({
        strictStyle:{backgroundColor: "red"},
        bStrict:1
    })
      // this.setState({strictMode:true})

    }else if(this.state.bStrict===1){
      this.setState({
        strictStyle:{backgroundColor: "yellow"},
        bStrict:0
      })
    }
  }
}

playGame=()=>{
this.setState({boxOut:this.state.levelCount})
console.log(this.state.gameArr);
this.tempB=this.state.gameArr[this.state.gameArrCounter]

// console.log("this is playgame=gameArr "+ this.state.gameArr)

this.buttonFx(this.tempB)

this.setState({gameArrCounter:this.state.gameArrCounter+1})

console.log("this is gameArrCounter "+this.state.gameArrCounter);

if(this.state.gameArrCounter===this.state.gameArr.length){
  this.clearInterval()
  this.setState({buttonStyle:{pointerEvents: "auto"}})
 }
}

 buttonFx=(buttonN)=>{
  const currB=buttonN;  
  console.log(currB+" this is currB");

  this.effect=setTimeout(()=> {
    this.setState({[currB]:true})
  },200)

 this.effect= setTimeout(()=> {
    this.setState({[currB]:false})
  },350)
}


/*
function playGame() {
  $("#boxOut").html(levelCount);
  tempColor = gameArr[gameArrCounter]; // grabs one of the IDs pushed by getRandom()
  // console.log(tempColor);
  $("#sound" + tempColor).get(0).cloneNode().play(); // plays buttons sound
  buttonClick(tempColor);
  gameArrCounter++;
  if (gameArrCounter == gameArr.length) {
    clearInterval(gameCall);
    $(".colorButton").css("pointer-events", "auto");
  }
}
*/
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
