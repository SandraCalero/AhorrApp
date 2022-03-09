import React from 'react';
import "./Input.css";

function Input(props) {
  var today = new Date();
  var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  return (
    <div className={props.variant}>
      {props.icon} {props.text}
      { props.isinput && <input name='amount' type="text" placeholder='$ Enter amount'/> }
      { props.isbutton && <button>Category</button>}
      { props.isdate && <button>{date}</button>}
    </div>
  )
}

export {Input};