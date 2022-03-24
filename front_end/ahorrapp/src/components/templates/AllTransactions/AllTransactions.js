import React from "react";
import ReactLoading from "react-loading";
import { Navigate } from "react-router-dom";
import { Title } from "../../atoms/Title/Title";
import { DivButtons } from "../../molecules/DivButtons/DivButtons";
import { NavBar } from "../../organisms/NavBar/NavBar";
import { Footer } from "../../organisms/Footer/Footer";
import { useAllTransactions } from "./useAllTransactions";
import "./AllTransactions.css";
import { TransactionHistory } from "../../organisms/TransactionHistory/TransactionHistory";
import { Button } from "../../atoms/Button/Button";

function AllTransactions() {
  const {
    userLogged,
    isLoading,
    transactionList,
    categoriesList,
    variantFilter,
    cleanFilterIcon,
    onClearFilter,
    updateTransactionList,
    handleIncomeButton,
    handleExpenseButton,
  } = useAllTransactions();

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
        <Title text="Transactions" />
        <DivButtons
          type="transaction"
          onClickLeft={handleIncomeButton}
          onClickRight={handleExpenseButton}
        />
        <Button
          icon={cleanFilterIcon}
          text="Remove filter"
          variant="cleanFilter"
          onClickButton={onClearFilter}
        />
        <article className="transactionsBox">
          <TransactionHistory
            transactionList={transactionList}
            variantFilter={variantFilter}
            updateTransactionList={updateTransactionList}
            categoriesList={categoriesList}
          />
        </article>
      </section>
      <Footer />
    </div>
  );
}

export { AllTransactions };
