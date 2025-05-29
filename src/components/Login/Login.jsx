import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Lottie from "lottie-react";
import loginAnimation from "../../animations/login.json";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import axios from "axios";
import baseUrl from "../basUrl/baseUrl";
import Swal from "sweetalert2";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      empid: "",
      password: "",
    },
    validationSchema: Yup.object({
      empid: Yup.string().required("Employee ID is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setErrorMessage("");

      // Prevent scrollbar shift before showing SweetAlert
      document.body.style.paddingRight = "0";
      document.body.style.overflow = "auto";

      axios.post(`${baseUrl}/login`, values)
        .then((response) => {
          const userData = response.data;
          console.log("Login response: ", userData);

          if (userData && userData.role) {
            const employeeName = userData.empname || "User";

            // Store user data first to prevent layout shifts
            localStorage.setItem("user", JSON.stringify(userData));

            // Configure SweetAlert to prevent layout shifts
            Swal.fire({
              title: "Login Success",
              text: `Welcome ${employeeName} to corpkites`,
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
              heightAuto: false,
              customClass: {
                container: 'swal-no-padding'
              }
            }).then(() => {
              // Navigate after SweetAlert is closed
              if (userData.role === "admin") {
                navigate("/admin/dashboard");
              } else if (userData.role === "hr") {
                navigate("/hr/dashboard");
              } else {
                navigate("/"); 
              }
            });
          } else {
            setErrorMessage("Invalid login response: role missing");
          }
          setSubmitting(false);
        })
        .catch((error) => {
          setSubmitting(false);
          if (error.response && error.response.data) {
            setErrorMessage(error.response.data);
          } else {
            setErrorMessage("An unexpected error occurred. Please try again.");
          }
        });
    },
  });

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginWrapper}>
        <div className={styles.leftSide}>
          <Lottie
            animationData={loginAnimation}
            loop
            autoplay
            className={styles.lottieAnimation}
          />
        </div>

        <div className={styles.rightSide}>
          <h2 className={styles.appTitle}>corpkites</h2>

          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <input
              type="text"
              name="empid"
              placeholder="Employee ID"
              value={formik.values.empid}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={styles.input}
              required
            />
            {formik.touched.empid && formik.errors.empid && (
              <div className={styles.error}>{formik.errors.empid}</div>
            )}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={styles.input}
              required
            />
            {formik.touched.password && formik.errors.password && (
              <div className={styles.error}>{formik.errors.password}</div>
            )}

            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
              className={styles.loginBtn}
            >
              Log In
            </button>

            {errorMessage && (
              <div className={styles.error} style={{ marginTop: "10px", textAlign: "center" }}>
                {errorMessage}
              </div>
            )}

            <div className={styles.extraLinks}>
              <a href="#loginPage">Forgot Password?</a>
            </div>

            <div className={styles.signupLink}>
              <Link to="/register">Create New Account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


// 9067230495
