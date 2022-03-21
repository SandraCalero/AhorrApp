import React from "react";
import { Form } from "../Form/Form";
import { useFormModal } from "./useFormModal";
import "./FormModal.css";
import { Title } from "../../atoms/Title/Title";

function FormModal({
  isFormModalOpen,
  transactionInfo,
  closeFormModal,
  variant,
  updateTransactionList,
  categoryList,
}) {
  const { wrapperClass, editIcon, url } = useFormModal({
    isFormModalOpen,
    transactionInfo,
  });

  return (
    <div className={wrapperClass}>
      <div className="formContainer">
        <Title text=" Edit Transaction" icon={editIcon} />
        <Form
          isOpenForm
          categoryList={categoryList}
          variant={variant}
          transactionInfo={transactionInfo}
          closeFormModal={closeFormModal}
          typeDivButtons="edit"
          updateTransactionList={updateTransactionList}
          url={url}
          method="PUT"
        />
      </div>
    </div>
  );
}

export { FormModal };
