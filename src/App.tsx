import { Route, Routes } from "react-router-dom";
import { NotFound } from "./components/error/404-not-found";
import { ErrorLogin } from "./components/error/error-login";
import { Login } from "./components/login";
import { ProtectedLayout } from "./components/protected-layout";
import { Registration } from "./components/registration";
import { AuthProvider } from "./context/provider";
import { AppRoutes } from "./route/routes";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedLayout>
                <AppRoutes />
              </ProtectedLayout>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/error-login" element={<ErrorLogin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
