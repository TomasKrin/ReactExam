import { Navigate, Route, Routes as RoutesWrapper } from "react-router-dom";
import { Suspense, useContext } from "react";
import { authLayoutRoutes, mainLayoutRoutes } from "./consts";

import { CirclesWithBar } from "react-loader-spinner";
import { UserContext } from "../contexts/UserContext";

const Routes = () => {
  const { isLoggedIn } = useContext(UserContext);
  const { Layout, routes } = isLoggedIn ? mainLayoutRoutes : authLayoutRoutes;

  return (
    <RoutesWrapper>
      {routes.map(({ path, Component }) => {
        return (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                <Suspense
                  fallback={
                    <div
                      style={{
                        width: "100vw",
                        height: "90vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CirclesWithBar
                        height="100"
                        width="100"
                        color="#3f51b5"
                        visible={true}
                        ariaLabel="circles-with-bar-loading"
                      />
                    </div>
                  }
                >
                  <Component />
                </Suspense>
              </Layout>
            }
          />
        );
      })}

      <Route
        path="*"
        element={
          <Layout>
            <Navigate to={{ pathname: "/" }} />
          </Layout>
        }
      />
    </RoutesWrapper>
  );
};

export default Routes;
