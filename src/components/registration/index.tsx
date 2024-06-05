import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { Register } from "../../service/registration";
import "./style.css";

export const Registration = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    if (!fullName || !username || !password || !role) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    const register = await Register({ fullName, username, password, role });
    if (register.error) return setError(register.error);

    alert("Usuário registrado com sucesso!");

    navigate(`/login`);
  }

  function goBackLogin() {
    navigate(`/`);
  }

  return (
    <div className="container">
      <h2>Register</h2>

      {error && <div className="error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
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
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="" disabled>
            Select position
          </option>
          <option value="ADMIN">Manager</option>
          <option value="USER">User</option>
        </select>
        <button type="submit">register</button>
        <button type="button" onClick={goBackLogin}>
          return to login
        </button>
      </form>
    </div>
  );
};
