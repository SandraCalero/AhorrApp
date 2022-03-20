import { useState } from "react";
import axios from "axios";
import { useStorage } from "../storage/useStorage";
import { useNavigate } from "react-router-dom";

function useLoginStates() {
  const { userInfo, onSaveUserInfo, onCleanStorage } = useStorage();
  const userLogged = !!userInfo;

  //states
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // If user doesn't have a valid google account
  const responseGoogleFailure = (responseGoogle) => {
    console.log(responseGoogle);
  };

  // If user has a valid google account
  const handleSuccess = (responseGoogle) => {
    setIsLoading(true);
    axios({
      method: "POST",
      url: "http://localhost:5000/user",
      data: {
        first_name: responseGoogle.profileObj.givenName,
        last_name: responseGoogle.profileObj.familyName,
        email: responseGoogle.profileObj.email,
        h_password: "string",
      },
    })
      .then((response) => {
        const userResponse = response;
        setIsLoading(false);
        onSaveUserInfo(userResponse.data);
        navigate("/Dashboard", { replace: true });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });

    setIsLoading(false);
  };

  // logout
  const handleLogOut = () => {
    onCleanStorage();
    navigate("/", { replace: true });
    console.log("logout");
  };

  return {
    userLogged,
    isLoading,
    responseGoogleFailure,
    handleSuccess,
    handleLogOut,
  };
}

export { useLoginStates };
