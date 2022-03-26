import React from 'react';
import './Title.css';

function Title (props) {
  return (
    <article className='titleContainer'>
      <h1 className='Title'>
        {props.icon && <span className='iconTitle'>{props.icon}</span>}
        {props.text}
        {props.userName && props.userName}
      </h1>
    </article>
  );
}

export { Title };
