import React from 'react';
import ReactLoading from 'react-loading';
import { Navigate } from 'react-router-dom';
import { Title } from '../../atoms/Title/Title';
import { DivButtons } from '../../molecules/DivButtons/DivButtons';
import { NavBar } from '../../molecules/NavBar/NavBar';
import { Footer } from '../../organisms/Footer/Footer';
import { useAllTransactions } from './useAllTransactions';
import './AllTransactions.css';
import { TransactionHistory } from '../../molecules/TransactionHistory/TransactionHistory';

function AllTransactions() {
  const { userLogged, isLoading, transactionList, setIsLoading } =
    useAllTransactions();

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
      <NavBar />
      <section className="container">
        <Title text="Transactions" />
        <DivButtons type="transaction" />
        <article className="transactionsBox">
          <TransactionHistory transactionList={transactionList} />
        </article>
      </section>
      <Footer />
    </div>
  );
}

export { AllTransactions };
