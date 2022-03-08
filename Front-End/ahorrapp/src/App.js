import React from "react";
import "./App.css";
import { Button } from "./components/atoms/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHome, faUsd } from "@fortawesome/free-solid-svg-icons";
import { LinkButton } from "./components/molecules/LinkButton/LinkButton";

function App() {
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  const transIcon = <FontAwesomeIcon icon={faUsd} />;
  const settingIcon = <FontAwesomeIcon icon={faGear} />;
  return (
    <React.Fragment>
      <div>
        <Button text="Income" variant="btn shadow Income" />
        <Button text="Expense" variant="btn shadow Expense" />
      </div>
      <footer>
        <LinkButton
          text="Dashboard"
          variant="linkFooter Dashboard"
          icon={homeIcon}
        />
        <LinkButton
          text="Transactions"
          variant="linkFooter Transactions"
          icon={transIcon}
        />
        <LinkButton
          text="Settings"
          variant="linkFooter Settings"
          icon={settingIcon}
        />
      </footer>
    </React.Fragment>
  );
}

export default App;
