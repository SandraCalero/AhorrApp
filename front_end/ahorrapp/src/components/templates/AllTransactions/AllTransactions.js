import React from 'react';
import ReactLoading from 'react-loading';
import { Navigate } from 'react-router-dom';
import { Title } from '../../atoms/Title/Title';
import { DivButtons } from '../../molecules/DivButtons/DivButtons';
import { NavBar } from '../../molecules/NavBar/NavBar';
import { TransactionCard } from '../../molecules/TransactionCard/TransactionCard';
import { Footer } from '../../organisms/Footer/Footer';
import { ConfirmationModal } from '../../molecules/ConfirmationModal/ConfirmationModal';
import { useAllTransactions } from './useAllTransactions';
import './AllTransactions.css';

function AllTransactions() {
  const {
    userLogged,
    isLoading,
    incomeIcon,
    expenseIcon,
    isConfirmationOpen,
    openConfirmationModal,
    closeConfirmationModal,
  } = useAllTransactions();

  if (!userLogged) return <Navigate to="/" replace />;

  if (isLoading) {
    return (
      <div className="body">
        <ReactLoading
          type="bubbles"
          color="#357EDD"
          width={'100%'}
          height={'100%'}
        />
      </div>
    );
  }

  return (
    <div className="body">
      <ConfirmationModal
        isConfirmationOpen={isConfirmationOpen}
        closeConfirmationModal={closeConfirmationModal}
      />
      <NavBar />
      <section className="container">
        <Title text="Transactions" />
        <DivButtons type="transaction" />
        <article className="transactionsBox">
          <div className="history">
            <TransactionCard
              variant="IncomeCard"
              icon={incomeIcon}
              openConfirmationModal={openConfirmationModal}
            />
            <TransactionCard
              variant="ExpenseCard"
              icon={expenseIcon}
              openConfirmationModal={openConfirmationModal}
            />
            <TransactionCard
              variant="IncomeCard"
              icon={incomeIcon}
              openConfirmationModal={openConfirmationModal}
            />
            <TransactionCard
              variant="ExpenseCard"
              icon={expenseIcon}
              openConfirmationModal={openConfirmationModal}
            />
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
}

export { AllTransactions };
