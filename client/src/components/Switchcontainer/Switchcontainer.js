import React from "react"
import  "./Switchcontainer.css"


const Switchcontainer =(props)=>(
<div className="Switchcontainer text-center">
    <h3>
        <b>SIMON</b><sup>&reg;</sup>
    </h3>
    {props.children}

  </div>
)

export default  Switchcontainer
