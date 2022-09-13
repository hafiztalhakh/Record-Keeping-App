import { memo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocationTitle } from "../hooks";
import Login from "../views/screens/Login";
import Signup from "../views/screens/Signup";
import Home from "../views/screens/Home";

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
    <Router basename="/">
      <Routes>
        {Object.values(ROUTES).map((route, index) =>
          route.type === "private" ? (
            <Route
              key={index}
              path={route.path}
              element={
                <PrivateRoute title={route.title}>
                  <route.component />
                </PrivateRoute>
              }
            />
          ) : (
            <Route
              key={index}
              path={route.path}
              element={
                <PublicRoute title={route.title}>
                  <route.component />
                </PublicRoute>
              }
            />
          )
        )}
      </Routes>
    </Router>
  );
}

function PublicRoute({ title, children }) {
  useLocationTitle(title);

  return children;
}

function PrivateRoute({ title, children }) {
  useLocationTitle(title);

  // check auth token here
  return children;
}

export default memo(AppRoutes);
