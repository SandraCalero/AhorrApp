import React from "react";
import ReactLoading from "react-loading";
import { Title } from "../../atoms/Title/Title";
import { BarChart } from "../../atoms/BarChart/BarChart";
import { Box } from "../../atoms/Box/Box";
import { LinkButton } from "../../molecules/LinkButton/LinkButton";
import { NavBar } from "../../molecules/NavBar/NavBar";
import { Footer } from "../../organisms/Footer/Footer";
import { Navigate } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";
import { DateModal } from "../../molecules/DateModal/DateModal";
import { useDashboard } from "./useDashboard";
import { useLoginStates } from "../../../utils/states/useLoginStates";

function Dashboard() {
  const {
    userName,
    userLogged,
    isLoading,
    incomeIcon,
    expenseIcon,
    balanceIcon,
    plusIcon,
    calendarIcon,
    isOpenCalendar,
    dateRange,
    closeCalendar,
    onClickDate,
    openCalendar,
  } = useDashboard();

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
        <Title text="Hi" userName={` ${userName}!`} />
        <Button
          icon={calendarIcon}
          text={`${dateRange[0]}-${dateRange[1]}`}
          variant="btn calendar"
          onClickButton={openCalendar}
          type="button"
        />
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
        <DateModal
          isOpenCalendar={isOpenCalendar}
          onClickDate={onClickDate}
          selectRange={true}
          maxDate={new Date()}
          closeModal={closeCalendar}
        />
      </section>
      <Footer handleLogOut={handleLogOut} />
    </div>
  );
}

export { Dashboard };
