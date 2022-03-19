import React from 'react';
import { Form } from '../Form/Form';
import { useFormModal } from './useFormModal';
import './FormModal.css';

function FormModal({ isFormModalOpen }) {
  const { wrapperClass, categoryList, variant } = useFormModal({
    isFormModalOpen,
  });

  return (
    <div className={wrapperClass}>
      <Form isOpenForm={true} categoryList={[]} variant="form show expense" />
    </div>
  );
}

export { FormModal };
