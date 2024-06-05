import { UserAuth } from "../../../context/provider/useAuth";
import "./style.css";

export const Header = () => {
  const { logout } = UserAuth();

  function handleLogout() {
    logout();
  }

  return (
    <div className="header">
      <div className="header-content">
        <div className="header-left">{""}</div>
        <div className="dropdown">
          <button className="dropbtn"> Menu</button>
          <div className="dropdown-content">
            <a className="logout" onClick={handleLogout}>
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
