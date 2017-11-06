import React from 'react'
import "./StartStrictBtn.css"


const StartStrictBtn=(props)=> {

  return (
    <div>

       <span>{props.gameOn ? 'STOP' : 'START'}</span>
        <button
         className={`btn bFOR ${props.gameOn ? "startON" : "start"}`}
          onClick={props.onStart}>
        </button>

    
          <button
            className={`btn bFOR ${props.strictMode ? "strictON" : "strict"}`}
            onClick={props.onStrictMode}>
            
          </button>
           <span>STRICT</span>
          
    </div>
  )
}



export default StartStrictBtn
