import React from "react";
import ReactLoading from "react-loading";
import { Navigate } from "react-router-dom";
import { Title } from "../../atoms/Title/Title";
import { NavBar } from "../../molecules/NavBar/NavBar";
import { DivButtons } from "../../molecules/DivButtons/DivButtons";
import { Form } from "../../organisms/Form/Form";
import { Footer } from "../../organisms/Footer/Footer";
import { useTransaction } from "./useTransaction";
import { useLoginStates } from "../../../utils/states/useLoginStates";

function Transaction() {
  const {
    userLogged,
    categoryList,
    isOpenForm,
    isLoading,
    variant,
    handleExpenseButton,
    handleIncomeButton,
  } = useTransaction();

  const { handleLogOut } = useLoginStates();

  if (!userLogged) return <Navigate to="/" replace />;

  if (isLoading) {
    return (
      <div className="body">
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
    <div className="body">
      <NavBar />
      <section className="container">
        <Title text="Add transaction" />
        <DivButtons
          type="transaction"
          onClickLeft={handleIncomeButton}
          onClickRight={handleExpenseButton}
        />
        <Form
          isOpenForm={isOpenForm}
          categoryList={categoryList}
          variant={variant}
        />
      </section>
      <Footer handleLogOut={handleLogOut} />
    </div>
  );
}

export { Transaction };
