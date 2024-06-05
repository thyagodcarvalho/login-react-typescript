import { UserAuth } from "../../context/provider/useAuth";
import { Login } from "../login";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = UserAuth();

  if (!auth.username) {
    return <Login />;
  }

  return children;
};
