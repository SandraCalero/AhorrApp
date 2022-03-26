import React from 'react';
import './Input.css';
import { InputText } from '../../atoms/InputText/InputText';
import { Label } from '../../atoms/Label/Label';

function Input ({ icon, text, variant, value, placeholder, onClick, onBlur }) {
  return (
    <div className='input'>
      <div className='iconText'>
        {icon && <span className='iconInput'>{icon}</span>}
        <span className='textInput'>{text}</span>
      </div>
      {variant === 'input' && <InputText value={value} onBlur={onBlur} />}
      {variant === 'button' && (
        <Label
          variant='label'
          text={value}
          placeholder={placeholder}
          onClick={onClick}
        />
      )}
      {variant === 'date' && (
        <Label variant='label date' text={value} onClick={onClick} />
      )}
    </div>
  );
}

export { Input };
