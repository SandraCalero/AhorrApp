import React from "react";
import { Title } from "../../atoms/Title/Title";
import "./Login.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Navigate } from "react-router-dom";
import { useLoginStates } from "../../../utils/states/useLoginStates";

export function Login() {
  const { userLogged, responseGoogleFailure, handleSuccess, handleLogOut } =
    useLoginStates();
  return (
    <div className="login">
      {userLogged && <Navigate to="/Dashboard" replace />}
      <Title text="AhorrApp" />
      <GoogleLogin
        clientId="861046265404-52vbar87q58gi3raeo23vms8k0c92tci.apps.googleusercontent.com"
        buttonText="Sing in with Google"
        onSuccess={handleSuccess}
        onFailure={responseGoogleFailure}
        cookiePolicy={"single_host_origin"}
        redirectUri="/Dashboard"
      />
      <GoogleLogout
        clientId="861046265404-52vbar87q58gi3raeo23vms8k0c92tci.apps.googleusercontent.com"
        buttonText="Logout of Google"
        onLogoutSuccess={handleLogOut}
      ></GoogleLogout>
    </div>
  );
}
