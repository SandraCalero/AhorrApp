import React from "react";
import ReactLoading from "react-loading";
import { Title } from "../../atoms/Title/Title";
import { DivButtons } from "../../molecules/DivButtons/DivButtons";
import { Input } from "../../molecules/Input/Input";
import "./BudgetModal.css";
import { useBudgetModal } from "./useBudgetModal";

function BudgetModal({
  isFormModalOpen,
  closeFormModal,
  isLoading,
  budgetUser,
}) {
  const {
    isSubmitting,
    wrapperClass,
    budgetIcon,
    objPost,
    onValueChange,
    handleSubmitBudget,
  } = useBudgetModal({
    isFormModalOpen,
    budgetUser,
    closeFormModal,
  });
  if (isLoading || isSubmitting) {
    return (
      <div className="budgetForm">
        <ReactLoading
          type="bubbles"
          color="#357EDD"
          width={"100%"}
          height={"100%"}
        />
      </div>
    );
  }
  return (
    <div className={wrapperClass}>
      <div className="budgetModal">
        <Title text=" Mar/22 Budget" icon={budgetIcon} />
        <form
          className="budgetForm"
          method="post"
          onSubmitCapture={(value) => {
            console.log(value);
          }}
        >
          {budgetUser && (
            <ul className="budgetInputs">
              {budgetUser.map((budgerItem) => (
                <li key={budgerItem.id}>
                  <Input
                    variant="input"
                    text={budgerItem.category_name}
                    name="amount"
                    value={objPost && objPost[budgerItem.category_name].value}
                    onBlur={(values) => {
                      onValueChange(
                        budgerItem.category_name,
                        budgerItem.id,
                        values.value
                      );
                    }}
                  />
                </li>
              ))}
            </ul>
          )}

          <DivButtons
            type="edit"
            // disabledSubmit={disabled}
            handleSubmitForm={handleSubmitBudget}
            onCancelClick={closeFormModal}
          />
        </form>
      </div>
    </div>
  );
}

export { BudgetModal };
