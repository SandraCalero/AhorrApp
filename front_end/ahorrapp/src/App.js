import React from 'react';
import './App.css';
import AllTransactions from './components/templates/AllTransactions/AllTransactions';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
// faArrowCircleUp,
// faArrowCircleDown,
// faBalanceScale,
// } from "@fortawesome/free-solid-svg-icons";
// import { DivButtons } from "./components/molecules/DivButtons/DivButtons";
// import { Button } from './components/atoms/Button/Button';
// import {ButtonList} from './components/molecules/ButtonList/ButtonList'
// import { TransactionCard } from './components/molecules/TransactionCard/TransactionCard';
// import { ConfirmationModal } from "./components/molecules/ConfirmationModal/ConfirmationModal";
// import { CategoryModal } from "./components/organisms/CategoryModal/CategoryModal";
// import { Form } from "./components/organisms/Form/Form";
import { Dashboard } from './components/templates/Dashboard/Dashboard';
import Transaction from './components/templates/Transaction/Transaction';

function App() {
  // const categoryList = ["Rent", "Utilities", "Transport", "Restaurant"]
  return (
    <React.Fragment>
      {/* <Transaction /> */}
      <AllTransactions />
      {/* <Dashboard /> */}
      {/* <CategoryModal /> */}
      {/* <Form /> */}
      {/* <ConfirmationModal /> */}
      {/*<Title text="Add transaction" />
      <Title text="Update transaction" />
      <Title text="Transaction" /> */}
      {/* <DivButtons type="transaction" /> */}
      {/* <DivButtons type="confirmation" /> */}
      {/* <Button variant='inputbtn date'/>
      <Button variant='inputbtn' text='Select Category' />*/}
    </React.Fragment>
  );
}

export default App;
