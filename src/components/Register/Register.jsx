import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../animations/login.json";
import styles from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import baseUrl from "../basUrl/baseUrl";
import Swal from "sweetalert2";
import companyList from "../companies/companies"; // Correctly imported list

export default function Register() {
  const navigate = useNavigate();

  const [companies, setCompanies] = useState([]);
  const [form, setForm] = useState({
    companyName: "",
    empid: "",
    empname: "",
    email: "",
    phone: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setCompanies(companyList); // Load company list on mount
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    axios
      .post(`${baseUrl}/register`, form)
      .then((response) => {
        console.log("Registered:", response.data);
        Swal.fire({
          title: "Registered Successfully!",
          text: "Redirecting to login...",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });

        setTimeout(() => {
          setForm({
            companyName: "",
            empid: "",
            empname: "",
            email: "",
            phone: "",
            password: "",
          });
          setIsSubmitting(false);
          navigate("/login");
        }, 2000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        Swal.fire({
          title: "Registration Failed",
          text:
            error.response?.data?.message ||
            error.response?.data ||
            "Server is not reachable",
          icon: "error",
        });
        console.error("Registration Error:", error);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContent}>
        <div className={styles.leftSide}>
          <Lottie
            animationData={loginAnimation}
            className={styles.lottieAnimation}
          />
        </div>

        <div className={styles.rightSide}>
          <h2 className={styles.appTitle}>Employee Sign Up</h2>

          <form onSubmit={handleSubmit}>
            <select
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Company Name
              </option>
              {companies.map((company, index) => (
                <option key={index} value={company}>
                  {company}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="empid"
              placeholder="Employee ID"
              value={form.empid}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="empname"
              placeholder="Name"
              value={form.empname}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone (10 digits)"
              value={form.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className={styles.loginBtn}
              disabled={
                isSubmitting ||
                Object.values(form).some((value) => value.trim() === "")
              }
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </form>

          <div className={styles.signupLink}>
            <Link to="/login">Already Have Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
