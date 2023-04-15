import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, setAccesstoken } from "../Slice/AuthSlice";
import toast from "react-hot-toast";
import * as Yup from "yup";

const Login = () => {
  const successLogin = () =>
    toast("Login Successfully.", {
      duration: 3000,
      position: "top-center",
      icon: "✅",
      style: {
        borderRadius: 0,
        background: "#000000",
        color: "#ffffff",
      },
    });
  const failedLogin = () =>
    toast("Invalid Credentials.", {
      duration: 3000,
      position: "top-center",
      icon: "❗️",
      style: {
        borderRadius: 0,
        background: "#000000",
        color: "#ffffff",
        marginBottom: 0,
      },
    });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      axios
        .post(`${process.env.REACT_APP_BACK_URL}/login`, values)
        .then((res) => {
          if (res.status === 200) {
            // console.log(res.data, "login successfull");
            successLogin();
            dispatch(setAccesstoken(res.data));
            dispatch(login());
            navigate("/dashboard");
          }
        })
        .catch((err) => {
          failedLogin();
          console.log(err, "error");
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Login</h1>
      <div className="formfield">
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Name"
        />
        {formik.touched.name && formik.errors.name && (
          <h3 className="text-red-400">{formik.errors.name}</h3>
        )}
      </div>
      <div className="formfield">
        <input
          type="text"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="password"
        />
        {formik.touched.password && formik.errors.password && (
          <h3 className="text-red-400">{formik.errors.password}</h3>
        )}
      </div>
      <button className="button" type="submit">
        Login
      </button>
      <h6>
        Not have an account? <Link to="/signup"> Sign up</Link>
      </h6>
    </form>
  );
};

export default Login;
