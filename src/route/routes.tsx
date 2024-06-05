import { Route, Routes } from "react-router-dom";
import { Home } from "../components/home";
import { Footer } from "../components/layout/footer";
import { Header } from "../components/layout/header";
import { Main } from "../components/layout/main";
import { ProtectedLayout } from "../components/protected-layout";
import LocalStorageAuthentication from "../utils/local-storage/authentication";

export const routeList = [{ path: "/", element: <Home />, protected: true }];

export function AppRoutes() {
  const accessToken = LocalStorageAuthentication.getUserInfo();

  return (
    <Routes>
      {routeList.map((route, idx) =>
        accessToken?.username && route.protected ? (
          <Route
            key={idx}
            path={`${route.path}`}
            element={
              <ProtectedLayout
                children={
                  <>
                    <Header />
                    <Main children={route.element} />
                    <Footer />
                  </>
                }
              />
            }
          />
        ) : (
          <Route key={idx} path={`${route.path}`} element={route.element} />
        )
      )}
    </Routes>
  );
}
