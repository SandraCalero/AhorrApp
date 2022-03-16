import React from 'react';
import ReactLoading from 'react-loading';
import { Title } from '../../atoms/Title/Title';
import { NavBar } from '../../molecules/NavBar/NavBar';
import { DivButtons } from '../../molecules/DivButtons/DivButtons';
import { Form } from '../../organisms/Form/Form';
import { Footer } from '../../organisms/Footer/Footer';
import { useTransaction } from './useTransaction';

function Transaction() {
  const {
    categoryList,
    isOpenForm,
    isLoading,
    variant,
    handleExpenseButton,
    handleIncomeButton,
  } = useTransaction();
  return isLoading ? (
    <div className="body">
      <ReactLoading
        type="bubbles"
        color="#357EDD"
        width={'100%'}
        height={'100%'}
      />
    </div>
  ) : (
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
      <Footer />
    </div>
  );
}

export { Transaction };
