import React from 'react';
import './Label.css';

function Label (props) {
  return (
    <label className={props.variant} onClick={props.onClick}>
      {props.icon && <span>{props.icon}</span>}{' '}
      {props.text || props.placeholder}
    </label>
  );
}

export { Label };
