import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserAuth } from "../../context/provider/useAuth";
import LocalStorageAuthentication from "../../utils/local-storage/authentication";

import "./style.css";

export const Login = () => {
  const { authenticate } = UserAuth();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (!username || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    await authenticate(username, password);
  }

  function goRegistration() {
    navigate(`/registration`);
  }

  useEffect(() => {
    const accessToken = LocalStorageAuthentication.getUserInfo();
    if (accessToken?.username) navigate(`/`);
  }, []);

  return (
    <div className="login-layout">
      <div className="login-container">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">login</button>
          <button type="button" onClick={goRegistration}>
            registration
          </button>
        </form>
      </div>
    </div>
  );
};
