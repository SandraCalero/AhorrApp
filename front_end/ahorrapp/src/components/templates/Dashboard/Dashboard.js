import React from "react";
import ReactLoading from "react-loading";
import { Title } from "../../atoms/Title/Title";
import { BarChart } from "../../atoms/BarChart/BarChart";
import { Box } from "../../atoms/Box/Box";
import { LinkButton } from "../../molecules/LinkButton/LinkButton";
import { NavBar } from "../../organisms/NavBar/NavBar";
import { Footer } from "../../organisms/Footer/Footer";
import { Navigate } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";
import { DateModal } from "../../molecules/DateModal/DateModal";
import { useDashboard } from "./useDashboard";

function Dashboard() {
  const {
    userName,
    userLogged,
    isLoading,
    incomeIcon,
    expenseIcon,
    labels,
    dataExpenses,
    dataBudget,
    totalIncomes,
    totalExpenses,
    totalBalance,
    balanceIcon,
    plusIcon,
    calendarIcon,
    isOpenCalendar,
    dateRange,
    closeCalendar,
    onClickDate,
    openCalendar,
    onReloadData,
  } = useDashboard();

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
      <NavBar onReloadData={onReloadData} />
      <section className="container">
        <Title text="Hi" userName={` ${userName}!`} />
        <Button
          icon={calendarIcon}
          text={`${dateRange[0]}-${dateRange[1]}`}
          variant="btn calendar"
          onClickButton={openCalendar}
          type="button"
        />
        <article className="boxes">
          <Box
            variant="iconIncome"
            transactionType="Incomes"
            amount={totalIncomes}
            icon={incomeIcon}
          />
          <Box
            variant="iconExpense"
            transactionType="Expenses"
            amount={totalExpenses}
            icon={expenseIcon}
          />
          <Box
            variant="iconBalance"
            transactionType="Savings"
            amount={totalBalance}
            icon={balanceIcon}
          />
        </article>
        <article className="barChart">
          <BarChart
            labelsList={labels}
            dataExpenses={dataExpenses}
            dataBudget={dataBudget}
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
      <Footer />
    </div>
  );
}

export { Dashboard };
