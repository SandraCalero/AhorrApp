import React, { useState } from "react";
import { Title } from "../../atoms/Title/Title";
import "./Login.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Navigate } from "react-router-dom";

export function Login() {
  const responseGoogle = (responseGoogle) => {
    console.log(responseGoogle);
  };
  const [userLogged, setUserLogged] = useState(false);
  const handleSuccess = (responseGoogle) => {
    console.log(responseGoogle);
    console.log(
      "aquií llamar el endpoint de la rest para crear o traer el dashboard del usuario"
    );
    console.log("apenas el servicio de back responda, redirigir al dashboard");
    setUserLogged(true);
  };
  return (
    <div className="login">
      <Title text="AhorrApp" />
      <GoogleLogin
        clientId="861046265404-52vbar87q58gi3raeo23vms8k0c92tci.apps.googleusercontent.com"
        buttonText="Sing in with Google"
        onSuccess={handleSuccess}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        redirectUri="/Dashboard"
      />
      {userLogged && <Navigate to="/Dashboard" replace={true} />}
      <GoogleLogout
        clientId="861046265404-52vbar87q58gi3raeo23vms8k0c92tci.apps.googleusercontent.com"
        buttonText="Logout of Google"
        onLogoutSuccess={responseGoogle}
      ></GoogleLogout>
    </div>
  );
}
