import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button
      className={props.variant}
      disabled={props.disabled}
      onClick={props.onClickButton}
      type={props.type}
    >
      {props.icon && <span>{props.icon}</span>} {props.text}
    </button>
  );
}

export { Button };
