import React from 'react';
import './Login.css';
import { GoogleLogin } from 'react-google-login';
import { Navigate } from 'react-router-dom';
import { useLoginStates } from '../../../utils/states/useLoginStates';

export function Login () {
  const { userLogged, responseGoogleFailure, handleSuccess } = useLoginStates();
  return (
    <div className='login'>
      {userLogged && <Navigate to='/Dashboard' replace />}

      <div className='divLogo'>
        <img className='imgLogo' src='logoAhorrApp.png' alt='Logo AhorrApp' />
      </div>
      <GoogleLogin
        clientId='861046265404-52vbar87q58gi3raeo23vms8k0c92tci.apps.googleusercontent.com'
        buttonText='Sing in with Google'
        onSuccess={handleSuccess}
        onFailure={responseGoogleFailure}
        cookiePolicy='single_host_origin'
        redirectUri='/Dashboard'
      />
    </div>
  );
}
