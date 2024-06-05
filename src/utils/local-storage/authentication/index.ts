import { IUser } from "../../../context/provider/types";

const USERINFO_STORE_KEY = "user-info";

export default class LocalStorageAuthentication {
  static isAuthenticated = () => {
    return window.localStorage.getItem(USERINFO_STORE_KEY) != null;
  };

  static setUserInfo = (userInfo: IUser) => {
    if (userInfo) {
      window.localStorage.setItem(USERINFO_STORE_KEY, JSON.stringify(userInfo));
    }
  };

  static getUserInfo = (): IUser | null => {
    if (!LocalStorageAuthentication.isAuthenticated()) {
      return null;
    }

    return JSON.parse(
      window.localStorage.getItem(USERINFO_STORE_KEY) as string
    );
  };

  static logout = () => {
    window.localStorage.removeItem(USERINFO_STORE_KEY);
  };
}
