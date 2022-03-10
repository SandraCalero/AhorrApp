import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMoneyBill,
  faCalendar,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { Title } from "./components/atoms/Title/Title";
import { Footer } from "./components/molecules/Footer/Footer";
import { DivButtons } from "./components/molecules/DivButtons/DivButtons";
import TextArea from "./components/atoms/TextArea/TextArea";
import Box from "./components/atoms/Box/Box";

function App() {
  const amountIcon = <FontAwesomeIcon icon={faMoneyBill} />;
  const categoryIcon = <FontAwesomeIcon icon={faList} />;
  const dateIcon = <FontAwesomeIcon icon={faCalendar} />;
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  return (
    <React.Fragment>
      <Title text="Hi" userName=" Sebastián!" />
      <Title text="Add transaction" />
      <Title text="Update transaction" />
      <Title text="Categories" />
      <Title text="Transaction" />
      <DivButtons transactionType="true" />

      <Box
        variant="box iconIncome"
        transactionType="Income"
        amount="$1.800.000"
        icon={homeIcon}
      />
      <TextArea />
      <DivButtons action="true" />
      <Footer />
    </React.Fragment>
  );
}

export default App;
