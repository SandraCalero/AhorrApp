import React from "react";
import { Title } from "../../atoms/Title/Title";
import { NavBar } from "../../molecules/NavBar/NavBar";
import { DivButtons } from "../../molecules/DivButtons/DivButtons";
import { Form } from "../../organisms/Form/Form";
import { Footer } from "../../organisms/Footer/Footer";
import { useTransaction } from "./useTransaction";

function Transaction() {
  const { isOpenForm, openForm } = useTransaction();
  return (
    <div className="body">
      <NavBar />
      <section className="container">
        <Title text="Add transaction" />
        <DivButtons type="transaction" onClick={openForm} />
        <Form isOpenForm={isOpenForm} />
      </section>
      <Footer />
    </div>
  );
}

export { Transaction };
