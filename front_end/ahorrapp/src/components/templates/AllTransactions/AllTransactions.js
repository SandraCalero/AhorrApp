import React from 'react';
import { Title } from '../../atoms/Title/Title';
import { DivButtons } from '../../molecules/DivButtons/DivButtons';
import { NavBar } from '../../molecules/NavBar/NavBar';
import { TransactionCard } from '../../molecules/TransactionCard/TransactionCard';
import { Footer } from '../../organisms/Footer/Footer';
import './AllTransactions.css';
import { ConfirmationModal } from '../../molecules/ConfirmationModal/ConfirmationModal';
import { useAllTransactions } from './useAllTransactions';

function AllTransactions() {
  const { incomeIcon, expenseIcon, isConfirmationOpen, openConfiramtionModal } =
    useAllTransactions();
  return (
    <div className="body">
      <ConfirmationModal isConfirmationOpen={isConfirmationOpen} />
      <NavBar />
      <section className="container">
        <Title text="Transactions" />
        <DivButtons type="transaction" />
        <article className="transactionsBox">
          <div className="history">
            <TransactionCard
              variant="IncomeCard"
              icon={incomeIcon}
              openConfiramtionModal={openConfiramtionModal}
            />
            <TransactionCard variant="ExpenseCard" icon={expenseIcon} />
            <TransactionCard variant="IncomeCard" icon={incomeIcon} />
            <TransactionCard variant="ExpenseCard" icon={expenseIcon} />
            <TransactionCard variant="IncomeCard" icon={incomeIcon} />
            <TransactionCard variant="ExpenseCard" icon={expenseIcon} />
            <TransactionCard variant="IncomeCard" icon={incomeIcon} />
            <TransactionCard variant="ExpenseCard" icon={expenseIcon} />
            <TransactionCard variant="IncomeCard" icon={incomeIcon} />
            <TransactionCard variant="ExpenseCard" icon={expenseIcon} />
            <TransactionCard variant="IncomeCard" icon={incomeIcon} />
            <TransactionCard variant="ExpenseCard" icon={expenseIcon} />
            <TransactionCard variant="IncomeCard" icon={incomeIcon} />
            <TransactionCard variant="ExpenseCard" icon={expenseIcon} />
            <TransactionCard variant="IncomeCard" icon={incomeIcon} />
            <TransactionCard variant="ExpenseCard" icon={expenseIcon} />
            <TransactionCard variant="IncomeCard" icon={incomeIcon} />
            <TransactionCard variant="ExpenseCard" icon={expenseIcon} />
            <TransactionCard variant="IncomeCard" icon={incomeIcon} />
            <TransactionCard variant="ExpenseCard" icon={expenseIcon} />
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
}

export { AllTransactions };
