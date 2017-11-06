import React from "react";
import "./Gamecontainer.css";

const Gamecontainer=props=>(
    <div className="gameContainer text-center">
    {props.children}
    </div>
)

export default Gamecontainer