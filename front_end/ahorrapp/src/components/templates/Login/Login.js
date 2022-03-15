import React from "react";
import { Title } from "../../atoms/Title/Title";
import { GoogleLogin } from "react-google-login";
import "./Login.css";

export function Login() {
  const responseGoogle = (data) => {
    console.log(data);
  };
  return (
    <div className="login">
      <Title text="AhorrApp" />
      <article className="loginBtn">
        <GoogleLogin
          clientId="861046265404-52vbar87q58gi3raeo23vms8k0c92tci.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </article>
    </div>
  );
}
