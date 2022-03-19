import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faHome, faUsd } from "@fortawesome/free-solid-svg-icons";
import { LinkButton } from "../../molecules/LinkButton/LinkButton";
import { useGoogleLogout } from "react-google-login";
import { Button } from "../../atoms/Button/Button";
import "./Footer.css";
import { useLoginStates } from "../../../utils/states/useLoginStates";

function Footer() {
  const { handleLogOut } = useLoginStates();
  const { signOut } = useGoogleLogout({
    clientId:
      "861046265404-52vbar87q58gi3raeo23vms8k0c92tci.apps.googleusercontent.com",
    onLogoutSuccess: handleLogOut,
  });
  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  const transIcon = <FontAwesomeIcon icon={faUsd} />;
  const logoutIcon = <FontAwesomeIcon icon={faSignOut} />;
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
      <Button
        text="Logout"
        variant="linkFooter Settings"
        icon={logoutIcon}
        onClickButton={signOut}
      />
    </footer>
  );
}

export { Footer };
