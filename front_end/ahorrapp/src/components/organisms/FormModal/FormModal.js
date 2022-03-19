import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormModal } from './useFormModal';
import './FormModal.css';

function FormModal({ isFormModalOpen }) {
  const { wrapperClass } = useFormModal({ isFormModalOpen });
  return (
    <div className={wrapperClass}>
      <Form isOpenForm={1} />
    </div>
  );
}

export { FormModal };
