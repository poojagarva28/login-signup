import React from "react";
import { createBrowserRouter } from "react-router-dom";
import CheckLogin from "../CheckLogin";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    component: <CheckLogin /> ? <Dashboard /> : <Login />,
  },
]);

export default Routes;
