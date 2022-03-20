import React from "react";
import { Form } from "../Form/Form";
import { useFormModal } from "./useFormModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./FormModal.css";
import { Title } from "../../atoms/Title/Title";

function FormModal({
  isFormModalOpen,
  transactionInfo,
  closeFormModal,
  variant,
  categoryList,
}) {
  const { wrapperClass } = useFormModal({
    isFormModalOpen,
  });
  const editIcon = <FontAwesomeIcon icon={faEdit} />;
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
          url=""
          method="put"
        />
      </div>
    </div>
  );
}

export { FormModal };
