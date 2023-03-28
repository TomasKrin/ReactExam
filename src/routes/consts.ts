import { AuthLayoutRoutes, MainLayoutRoutes } from "./routeTypes";

import Layout from "../layouts/Layout";
import { lazy } from "react";

const LazyAdd = lazy(() => import("../pages/Add/Add"));
const LazyHome = lazy(() => import("../pages/Home/Home"));
const LazyLogin = lazy(() => import("../pages/Login/Login"));
const LazyRegister = lazy(() => import("../pages/Register/Register"));

export const LOGIN_PATH = "/";
export const HOME_PATH = "/";
export const ADD_PATH = "/add";
export const REGISTER_PATH = "/register";

export const mainLayoutRoutes: MainLayoutRoutes = {
  Layout: Layout,
  routes: [
    { path: HOME_PATH, Component: LazyHome },
    { path: ADD_PATH, Component: LazyAdd },
  ],
};

export const authLayoutRoutes: AuthLayoutRoutes = {
  Layout: Layout,
  routes: [
    { path: LOGIN_PATH, Component: LazyLogin },
    { path: REGISTER_PATH, Component: LazyRegister },
  ],
};
