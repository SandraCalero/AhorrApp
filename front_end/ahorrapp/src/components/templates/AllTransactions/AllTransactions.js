import React from 'react';
import { Title } from '../../atoms/Title/Title';
import { DivButtons } from '../../molecules/DivButtons/DivButtons';
import { NavBar } from '../../molecules/NavBar/NavBar';
import { TransactionCard } from '../../molecules/TransactionCard/TransactionCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleUp,
  faArrowCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import { Footer } from '../../organisms/Footer/Footer';
import './AllTransactions.css';

function AllTransactions() {
  const incomeIcon = <FontAwesomeIcon icon={faArrowCircleUp} />;
  const expenseIcon = <FontAwesomeIcon icon={faArrowCircleDown} />;
  return (
    <div className="body">
      <NavBar />
      <section className="container">
        <Title text="Transactions" />
        <DivButtons type="transaction" />
        <article className="transactionsBox">
          <div className="history">
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
