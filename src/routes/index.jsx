import { memo } from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "../views/screens/login";
import Login from "../views/screens/signup";
import Home from "../views/screens/home";

const ROUTES = {
  home: {
    title: "Home",
    path: "/",
    type: "public",
    component: Home,
  },
  signup: {
    title: "Create Account",
    type: "public",
    path: "/create-account",
    component: Signup,
  },
  login: {
    title: "Login",
    path: "/login",
    type: "public",
    component: Login,
  },
};

function AppRoutes() {
  return (
    <Routes>
      {Object.values(ROUTES).map((route, index) =>
        route.type === "private" ? (
          <Route
            key={index}
            path={route.path}
            element={
              // <PrivateRoute title={route.title}>
              <route.component />
              // </PrivateRoute>
            }
          />
        ) : (
          <Route key={index} path={route.path} element={<route.component />} />
        )
      )}
    </Routes>
  );
}

export default memo(AppRoutes);
