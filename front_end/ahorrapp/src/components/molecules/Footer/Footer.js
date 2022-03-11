import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHome, faUsd } from "@fortawesome/free-solid-svg-icons";
import { LinkButton } from "../LinkButton/LinkButton";

import "./Footer.css";

function Footer(props) {
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  const transIcon = <FontAwesomeIcon icon={faUsd} />;
  const settingIcon = <FontAwesomeIcon icon={faGear} />;
  return (
    <footer className="FooterMol">
      {" "}
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
  );
}

export { Footer };
