import React from "react"
import "./Button.css";

const Button =(props)=>(
    
    <button 
    style={props.style} className={`b${props.number} colorButton ${props.ifclicked ? `button${props.number}` : "" }`}
    id={`button${props.number}`}
    onClick={()=>props.onClick(props.number)}>
    
    </button>
   
    
)

export default Button;