import React from "react"
import "./Button.css";

const Button =(props)=>(
    
    <button 
     className={`b${props.number} colorButton ${props.ifclicked ? `button${props.number}` : "" } ${props.disable ? "disableButtons":""}`}

    id={`button${props.number}`}
    onClick={()=>props.onClick(props.number)}>
    
    </button>
   
    
)

export default Button;