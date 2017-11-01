import React from "react"
import "./StartStrictBtn.css"

const StartStrictBtn =(props)=>(
    <div>
    <span>start</span> <span onClick={props.startClk} className={`btn bFOR ${props.gameRunning ? "startON":"start"}`} id="start"></span>
    <span onClick={props.strictClk} className={`btn  bFOR ${props.strictMode ? "strictON":"strict"}`} id="strict"></span><span>strict</span>
        {props.children}
    </div>
)

export default StartStrictBtn