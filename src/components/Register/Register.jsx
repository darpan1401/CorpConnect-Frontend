import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../animations/login.json";
import styles from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import baseUrl from "../basUrl/baseUrl";
import Swal from "sweetalert2";
import companyList from "../companies/companies";

export default function Register() {
  const navigate = useNavigate();

  const [companies, setCompanies] = useState([]);
  const [form, setForm] = useState({
    empid: "",
    companyName: "",
    empname: "",
    email: "",
    phone: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [isCheckingDuplicates, setIsCheckingDuplicates] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setCompanies(companyList);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const checkDuplicate = async (field, value) => {
    try {
      const response = await axios.get(`${baseUrl}/employee/check-duplicate`, {
        params: { field, value },
      });
      return response.data.exists;
    } catch (error) {
      console.error(`Error checking ${field}:`, error);
      return false;
    }
  };

  const validateForm = async () => {
    const newErrors = {};
    let isValid = true;

    if (!form.companyName.trim()) {
      newErrors.companyName = "Company name is required";
      isValid = false;
    }
    if (!form.empid.trim()) {
      newErrors.empid = "Employee ID is required";
      isValid = false;
    }
    if (!form.empname.trim()) {
      newErrors.empname = "Name is required";
      isValid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }
    if (!form.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    if (!isValid) return false;

    setIsCheckingDuplicates(true);
    try {
      const idExists = await checkDuplicate("empid", form.empid);
      if (idExists) {
        newErrors.empid = "Employee ID already exists";
        isValid = false;
      }

      const emailExists = await checkDuplicate("email", form.email);
      if (emailExists) {
        newErrors.email = "Email already registered";
        isValid = false;
      }

      const phoneExists = await checkDuplicate("phone", form.phone);
      if (phoneExists) {
        newErrors.phone = "Phone number already registered";
        isValid = false;
      }

      setErrors(newErrors);
      return isValid;
    } catch (error) {
      console.error("Validation error:", error);
      Swal.fire({
        title: "Validation Error",
        text: "Could not verify user information. Please try again.",
        icon: "error",
      });
      return false;
    } finally {
      setIsCheckingDuplicates(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = await validateForm();
    if (!isValid) return;

    setIsSubmitting(true);

    try {
      await axios.post(`${baseUrl}/register`, form);

      Swal.fire({
        title: "Registered Successfully!",
        text: "Redirecting to login...",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });

      setTimeout(() => {
        setForm({
          empid: "",
          companyName: "",
          empname: "",
          email: "",
          phone: "",
          password: "",
          role: "admin",
        });
        setIsSubmitting(false);
        navigate("/login");
      }, 2000);
    } catch (error) {
      setIsSubmitting(false);

      if (error.response) {
        const { status, data } = error.response;

        if (status === 400) {
          Swal.fire({
            title: "Registration Failed",
            text: data || "Invalid registration data",
            icon: "error",
          });
        } else if (status === 409) {
          Swal.fire({
            title: "Registration Failed",
            text: data || "Duplicate entry found",
            icon: "error",
          });
        } else {
          Swal.fire({
            title: "Registration Failed",
            text: data || "An error occurred",
            icon: "error",
          });
        }
      } else {
        Swal.fire({
          title: "Network Error",
          text: "Could not connect to server",
          icon: "error",
        });
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContent}>
        <div className={styles.leftSide}>
          <Lottie animationData={loginAnimation} className={styles.lottieAnimation} />
        </div>

        <div className={styles.rightSide}>
          <h2 className={styles.appTitle}>Employee Sign Up</h2>

          <form onSubmit={handleSubmit}>
            <select
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              required
              className={errors.companyName ? styles.inputError : ""}
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
            {errors.companyName && <div className={styles.error}>{errors.companyName}</div>}

            <input
              type="text"
              name="empid"
              placeholder="Employee ID"
              value={form.empid}
              onChange={handleChange}
              required
              className={errors.empid ? styles.inputError : ""}
            />
            {errors.empid && <div className={styles.error}>{errors.empid}</div>}

            <input
              type="text"
              name="empname"
              placeholder="Name"
              value={form.empname}
              onChange={handleChange}
              required
              className={errors.empname ? styles.inputError : ""}
            />
            {errors.empname && <div className={styles.error}>{errors.empname}</div>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className={errors.email ? styles.inputError : ""}
            />
            {errors.email && <div className={styles.error}>{errors.email}</div>}

            <input
              type="tel"
              name="phone"
              placeholder="Phone (10 digits)"
              value={form.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
              className={errors.phone ? styles.inputError : ""}
            />
            {errors.phone && <div className={styles.error}>{errors.phone}</div>}

            <input
              type="password"
              name="password"
              placeholder="Password (min 6 characters)"
              value={form.password}
              onChange={handleChange}
              required
              minLength="6"
              className={errors.password ? styles.inputError : ""}
            />
            {errors.password && <div className={styles.error}>{errors.password}</div>}

            <input type="hidden" name="role" value="admin" />

            <button
              type="submit"
              className={styles.loginBtn}
              disabled={isSubmitting || isCheckingDuplicates}
            >
              {isSubmitting ? "Registering..." : isCheckingDuplicates ? "Checking..." : "Register"}
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
