import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHome, faUsd } from "@fortawesome/free-solid-svg-icons";
import { LinkButton } from "../../molecules/LinkButton/LinkButton";

import "./Footer.css";
import { Button } from "../../atoms/Button/Button";

function Footer(props) {
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  const transIcon = <FontAwesomeIcon icon={faUsd} />;
  const settingIcon = <FontAwesomeIcon icon={faGear} />;
  return (
    <footer className="FooterMol">
      <LinkButton
        route="/Dashboard"
        text="Dashboard"
        variant="linkFooter Dashboard"
        icon={homeIcon}
      />
      <LinkButton
        route="/Transactions"
        text="Transactions"
        variant="linkFooter Transactions"
        icon={transIcon}
      />
      <Button
        disabled
        text="Settings"
        variant="linkFooter Settings"
        icon={settingIcon}
      />
    </footer>
  );
}

export { Footer };
