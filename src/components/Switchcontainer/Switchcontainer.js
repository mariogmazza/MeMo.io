import React from "react"
import  "./Switchcontainer.css"
// import BoxOut from "../BoxOut/BoxOut"
// import StartStrictBtn from "../StartStrictBtn/StartStrictBtn"
// import SwitchOnOff from "../SwitchOnOff/SwitchOnOff"



const Switchcontainer =(props)=>(
<div className="container text-center">
    <h3>
        <b>SIMON</b><sup>&reg;</sup>
    </h3>
    {props.children}

  </div>
)

export default  Switchcontainer