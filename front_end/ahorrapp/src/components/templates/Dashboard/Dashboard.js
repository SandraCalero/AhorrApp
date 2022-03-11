import React from "react";
import { Title } from "../../atoms/Title/Title";
import { BarChart } from "../../atoms/BarChart/BarChart";
import { Box } from "../../atoms/Box/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faArrowCircleUp,
  faArrowCircleDown,
  faBalanceScale,
} from "@fortawesome/free-solid-svg-icons";
import { LinkButton } from "../../molecules/LinkButton/LinkButton";
import { NavBar } from "../../molecules/NavBar/NavBar";
import { Footer } from "../../organisms/Footer/Footer";

function Dashboard() {
  const incomeIcon = <FontAwesomeIcon icon={faArrowCircleUp} />;
  const expenseIcon = <FontAwesomeIcon icon={faArrowCircleDown} />;
  const balanceIcon = <FontAwesomeIcon icon={faBalanceScale} />;
  const plusIcon = <FontAwesomeIcon icon={faPlusCircle} />;
  return (
    <div className="body">
      <NavBar />
      <section className="container">
        <Title text="Hi" userName=" userName!" />
        <article className="carousel">
          <BarChart />
        </article>
        <article className="boxes">
          <Box
            variant="iconIncome"
            transactionType="Incomes"
            amount="$1.800.000"
            icon={incomeIcon}
          />
          <Box
            variant="iconExpense"
            transactionType="Expenses"
            amount="$800.000"
            icon={expenseIcon}
          />
          <Box
            variant="iconBalance"
            transactionType="Balance"
            amount="$1.000.000"
            icon={balanceIcon}
          />
        </article>
        <article className="addTranBtn">
          <LinkButton
            route="/Transaction"
            variant="addTrans"
            text="Add Transaction"
            icon={plusIcon}
          />
        </article>
      </section>
      <Footer />
    </div>
  );
}

export { Dashboard };
