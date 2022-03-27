import React from 'react';
import { Button } from '../../atoms/Button/Button';
import './ButtonList.css';

function ButtonList ({ categoryList, onClickCategory }) {
  // console.log(categoryList);
  return (
    <ul className='ButtonList'>
      {categoryList.map((categoryItem) => (
        <li key={categoryItem.id}>
          <Button
            text={categoryItem.name}
            variant='btn btnCategory'
            type='button'
            onClickButton={() => {
              onClickCategory && onClickCategory(categoryItem);
            }}
          />
        </li>
      ))}
    </ul>
  );
}

export { ButtonList };
