import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHome, faUsd } from "@fortawesome/free-solid-svg-icons";
import { LinkButton } from "../../molecules/LinkButton/LinkButton";
import { GoogleLogout } from "react-google-login";
// import { Button } from "../../atoms/Button/Button";
import "./Footer.css";

function Footer({ handleLogOut }) {
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  const transIcon = <FontAwesomeIcon icon={faUsd} />;
  // const settingIcon = <FontAwesomeIcon icon={faGear} />;
  return (
    <footer className="FooterMol">
      <LinkButton
        route="/Dashboard"
        text="Dashboard"
        variant="linkFooter"
        icon={homeIcon}
      />
      <LinkButton
        route="/AllTransactions"
        text="Transactions"
        variant="linkFooter"
        icon={transIcon}
      />
      {/* <Button
        disabled
        text="Settings"
        variant="linkFooter Settings"
        icon={settingIcon}
      /> */}
      <GoogleLogout
        clientId="861046265404-52vbar87q58gi3raeo23vms8k0c92tci.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={handleLogOut}
      ></GoogleLogout>
    </footer>
  );
}

export { Footer };
