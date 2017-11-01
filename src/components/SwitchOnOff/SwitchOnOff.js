import React from "react"
import "./SwitchOnOff.css"

const SwitchOnOff =(props)=>(
    <div>

<a className="btn sw" ><span onClick={props.toggleSwitch} className={props.className} id="switch">{props.text}</span></a>

   </div>


)

export default SwitchOnOff