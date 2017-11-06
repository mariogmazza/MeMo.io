import React  from 'react'
import './Buttons.css'

const ButtonItem=(props)=> {

  let classNames = "board-item"
  classNames += props.isActive ? " active" : "";
  classNames += !props.isEnabled ? " disabled" : "";
  return (
    <div
      className={classNames}
      id={props.itemId}
      onMouseDown={props.onMouseDown}/>
  )
}

const Buttons=(props)=> {
  let items = [0,1,2,3].map(function(item) {
    let itemId = "board-item-" + item;
    return (
      <ButtonItem
        key={item}
        itemId={itemId}
        isActive={props.activeItems[item]}
        isEnabled={props.isEnabled}
        onMouseDown={props.onMouseDown.bind(null, item)} />
    )
  });
  
  let classNames = "flex-item board text-center";
  classNames += props.isBlinking ? " blink" : "";
  return (
    <div className="flex-container">
      <div className={classNames}>
        {items}
      </div>
    </div>
  )
}


export default Buttons
