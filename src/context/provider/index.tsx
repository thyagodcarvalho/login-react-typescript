import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { loginRequest, tokenValidation } from "../../service/auth";
import LocalStorageAuthentication from "../../utils/local-storage/authentication";
import { IAuthProvider, IContext, IUser } from "./types";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, serUser] = useState<IUser | null>();

  async function authenticate(username: string, password: string) {
    const allowAccess = await loginRequest(username, password);

    if (!allowAccess.data) {
      LocalStorageAuthentication.logout();
      navigate(`/error-login`);
      return;
    }

    const payload = { token: allowAccess?.data?.token, username };
    serUser(payload);

    LocalStorageAuthentication.setUserInfo(payload);
    navigate(`/`);
    return;
  }

  function logout() {
    serUser(null);
    LocalStorageAuthentication.logout();
    navigate("/login");
  }

  async function validateToken() {
    const userCurrent = LocalStorageAuthentication.getUserInfo();

    if (userCurrent?.username && userCurrent?.token) {
      const allowAccess = await tokenValidation(userCurrent.token);

      if (!allowAccess.data) {
        LocalStorageAuthentication.logout();
        navigate(`/error-login`);
        return;
      }

      const payload = {
        token: allowAccess?.data?.token,
        username: userCurrent.username,
      };
      serUser(payload);

      LocalStorageAuthentication.setUserInfo(payload);
      navigate(`${location.pathname}${location.search}`);

      return;
    }

    return logout;
  }

  useEffect(() => {
    validateToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...user,
        authenticate,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
