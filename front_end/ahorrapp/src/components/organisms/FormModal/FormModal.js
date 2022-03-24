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
  categoryList,
  onReloadData,
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
          url={url}
          method="PUT"
          onReloadData={onReloadData}
        />
      </div>
    </div>
  );
}

export { FormModal };
