import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Signup = () => {
  const navigate = useNavigate();

  const successSignup = () =>
    toast("Signup Successfully.", {
      duration: 3000,
      position: "top-center",
      icon: "✅",
      style: {
        borderRadius: 0,
        background: "#000000",
        color: "#ffffff",
      },
    });

  const errorSignup = () => {
    toast("Please try again.", {
      duration: 3000,
      position: "top-center",
      icon: "✅",
      style: {
        borderRadius: 0,
        background: "#000000",
        color: "#ffffff",
      },
    });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Email valid email")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      axios
        .post(`${process.env.REACT_APP_BACK_URL}/create`, values)
        .then((res) => {
          console.log(res);
          successSignup();
          navigate("/login");
        })
        .catch((err) => {
          errorSignup();
          console.log(err, "error");
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Signup</h1>
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
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="email"
        />
        {formik.touched.email && formik.errors.email && (
          <h3 className="text-red-400">{formik.errors.email}</h3>
        )}
      </div>
      <div className="formfield">
        <input
          type="password"
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
      <div className="formfield">
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          placeholder="confirmPassword"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <h3 className="text-red-400">{formik.errors.confirmPassword}</h3>
        )}
      </div>
      <button className="button" type="submit">
        Signup
      </button>
      <h6>
        Already have an account! <Link to="/login">Login</Link>
      </h6>
    </form>
  );
};

export default Signup;
