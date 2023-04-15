import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Slice/AuthSlice";

const Dashboard = () => {
  const logoutMessage = () =>
    toast("Logout Successfully.", {
      duration: 3000,
      position: "top-center",
      icon: "🚪",
      style: {
        borderRadius: 0,
        background: "#000000",
        color: "#ffffff",
      },
    });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    logoutMessage();
    navigate("/login");
  };

  console.log("inside dashboard");

  return (
    <div>
      <h2>Dashboard</h2>
      <p onClick={logoutHandler}>Logout</p>
    </div>
  );
};

export default Dashboard;
