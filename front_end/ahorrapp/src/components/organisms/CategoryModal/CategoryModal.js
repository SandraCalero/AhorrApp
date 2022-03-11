import React from 'react';
import './CategoryModal.css';
import { Title } from '../../atoms/Title/Title';
import { ButtonList } from '../../molecules/ButtonList/ButtonList';
import { Button } from '../../atoms/Button/Button';

function CategoryModal() {
  const categoryList = ['Rent', 'Utilities', 'Transport', 'Restaurant'];
  return (
    <div className="categoryModal">
      <Title text="Categories" />
      <ButtonList categoryList={categoryList} />
      <Button text="Cancel" variant="btn Cancel" />
    </div>
  );
}

export { CategoryModal };
