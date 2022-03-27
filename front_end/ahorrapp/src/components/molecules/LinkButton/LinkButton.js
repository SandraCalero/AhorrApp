import React from 'react';
import { Link } from 'react-router-dom';
import './LinkButton.css';

function LinkButton (props) {
  return (
    <Link to={props.route} className={props.variant}>
      {props.icon && <span>{props.icon}</span>} {props.text}
    </Link>
  );
}

export { LinkButton };
