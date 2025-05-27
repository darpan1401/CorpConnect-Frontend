import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MdAccountCircle, MdMenu, MdClose } from "react-icons/md";
import styles from "./Header.module.css";

export default function Header() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role || "";
  const userName = user?.empname || "";

  const publicRoutes = ["/", "/about", "/contact", "/services"];

  const handleNavigation = (e, path) => {
    e.preventDefault();
    const isPublic = publicRoutes.includes(path);

    if (!user && !isPublic) {
      // Close the mobile menu before showing the alert
      setMenuOpen(false);
      
      Swal.fire({
        icon: "info",
        title: "Login Required",
        text: "Please login to access full website",
        showCancelButton: true,
        confirmButtonText: "Login Now",
        cancelButtonText: "Cancel",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }

    navigate(path);
    setMenuOpen(false); // Close mobile menu after navigation
  };

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/login");
    setShowDropdown(false);
    setMenuOpen(false);
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (showDropdown && !event.target.closest(`.${styles.userMenu}`)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]); // Removed styles.userMenu from dependency array

  // Determine what text to show in the account button
  const getAccountButtonText = () => {
    if (!user) return "Account";
    
    // For normal users (not admin or hr), show their name
    if (role !== "admin" && role !== "hr" && userName) {
      return userName;
    }
    
    // For admin and hr, just show "Account"
    return "Account";
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>CorpConnect</div>
      
      <button 
        className={styles.navToggle} 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>
      
      <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
        <a
          href="/"
          onClick={(e) => handleNavigation(e, "/")}
          className={styles.navLink}
        >
          Home
        </a>

        <a
          href="/services"
          onClick={(e) => handleNavigation(e, "/services")}
          className={styles.navLink}
        >
          Our Services
        </a>

        <a
          href="/about"
          onClick={(e) => handleNavigation(e, "/about")}
          className={styles.navLink}
        >
          About
        </a>
        
        <a
          href="/contact"
          onClick={(e) => handleNavigation(e, "/contact")}
          className={styles.navLink}
        >
          Contact
        </a>


        {!user && (
          <a
            href="/register"
            onClick={(e) => handleNavigation(e, "/register")}
            className={styles.navLink}
          >
            More
          </a>
        )}

        {role === "admin" && (
          <a
            href="/admin/dashboard"
            onClick={(e) => handleNavigation(e, "/admin/dashboard")}
            className={styles.navLink}
          >
            Dashboard
          </a>
        )}
        
        {role === "hr" && (
          <a
            href="/hr/dashboard"
            onClick={(e) => handleNavigation(e, "/hr/dashboard")}
            className={styles.navLink}
          >
            Dashboard
          </a>
        )}

        {user && (
          <div className={styles.userMenu}>
            <button
              className={styles.userButton}
              onClick={() => setShowDropdown(!showDropdown)}
              aria-label="User menu"
            >
              <MdAccountCircle size={28} />
              <span>{getAccountButtonText()}</span>
            </button>

            {showDropdown && (
              <div className={styles.dropdownMenu}>
                <button className={styles.dropdownItem} onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
