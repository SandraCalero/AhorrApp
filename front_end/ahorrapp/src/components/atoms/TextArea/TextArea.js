import React from 'react';
import './TextArea.css';
import { useTextArea } from './useTextArea';

function TextArea ({ label, handleOnBlurTextArea, value }) {
  const { descriptionIcon } = useTextArea();

  return (
    <div className='descriptionTextArea'>
      <span>
        <span className='iconTextArea'>{descriptionIcon}</span>
        <label className='labelTextArea' htmlFor='description'>
          {label}
        </label>
      </span>
      <textarea
        className='textArea'
        name='description'
        placeholder='Add a description here'
        defaultValue={value}
        onBlur={handleOnBlurTextArea}
      />
    </div>
  );
}

export { TextArea };
