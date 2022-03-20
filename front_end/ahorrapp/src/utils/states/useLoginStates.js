import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useStorage } from "../storage/useStorage";
import { useNavigate } from "react-router-dom";

function useLoginStates() {
  const { userInfo, onSaveUserInfo, onCleanStorage } = useStorage();
  const userLogged = !!userInfo;

  //states
  const [isLoading, setIsLoading] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const [googleResponse, setGoogleResponse] = useState(null);
  const navigate = useNavigate();

  // If user doesn't have a valid google account
  const responseGoogleFailure = (responseGoogle) => {
    console.log(responseGoogle);
  };

  // If user has a valid google account
  const handleSuccess = (responseGoogle) => {
    setGoogleResponse(responseGoogle.profileObj);
    const url = `http://localhost:5000/user-email/${responseGoogle.profileObj.email}`;
    setIsLoading(true);
    axios
      .get("https://swapi-api.hbtn.io/api/films")
      .then((response) => {
        console.log(response);
        const userResponse = {
          first_name: "Mateo",
          last_name: "Garcia",
          email: "mateog91@gmail.com",
          id: 2,
        };
        onSaveUserInfo(userResponse);
        // console.log(response)
        setIsLoading(false);
      })
      .catch((error) => {
        if (error === 404) {
          setIsNewUser(true);
        } else {
          console.log(error);
          setIsLoading(false);
        }
      });
  };

  const handleCreateUser = useCallback(() => {
    setIsLoading(true);
    axios({
      method: "POST",
      url: "http://localhost:5000/user",
      data: {
        first_name: googleResponse.givenName,
        last_name: googleResponse.familyName,
        email: googleResponse.email,
        h_password: "string",
      },
    })
      .then((response) => {
        const userResponse = response;
        setIsLoading(false);
        setIsNewUser(false);
        onSaveUserInfo(userResponse);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsNewUser(false);
        console.log(error);
      });

    setIsLoading(false);
  }, [googleResponse, onSaveUserInfo]);

  // logout
  const handleLogOut = () => {
    onCleanStorage();
    navigate("/", { replace: true });
    console.log("logout");
  };

  useEffect(() => {
    googleResponse && isNewUser && handleCreateUser();
  }, [isNewUser, googleResponse, handleCreateUser]);

  return {
    userLogged,
    isLoading,
    responseGoogleFailure,
    handleSuccess,
    handleLogOut,
  };
}

export { useLoginStates };
