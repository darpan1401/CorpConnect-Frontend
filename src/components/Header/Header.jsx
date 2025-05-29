import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MdAccountCircle, MdMenu, MdClose } from "react-icons/md";
import styles from "./Header.module.css";
import corpKitesLogo from "../../assets/corpkites-logo.png"; // Import the logo image

export default function Header() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerMounted, setHeaderMounted] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role || "";
  const userName = user?.empname || "";

  const publicRoutes = ["/", "/about", "/contact", "/services"];

  // Enable transitions after initial render to prevent animation on page load
  useEffect(() => {
    setHeaderMounted(true);
  }, []);

  const handleNavigation = (e, path) => {
    e.preventDefault();
    const isPublic = publicRoutes.includes(path);

    if (!user && !isPublic) {
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
  }, [showDropdown]); 

  const getAccountButtonText = () => {
    if (!user) return "Account";
    
    if (role !== "admin" && role !== "hr" && userName) {
      return userName;
    }
    
    return "Account";
  };

  return (
    <header className={`${styles.header} ${headerMounted ? styles.headerMounted : ''}`}>
      <a href="/" onClick={(e) => handleNavigation(e, "/")} className={styles.logo}>
        <img src={corpKitesLogo} alt="CorpKites Logo" className={styles.logoIcon} />
        <span className={styles.logoText}>CorpKites</span>
      </a>
      
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

        {role === "user" && (
          <a
            href="/my-events"
            onClick={(e) => handleNavigation(e, "/my-events")}
            className={styles.navLink}
          >
            My Events
          </a>
        )}
        


        {!user && (
          <a
            href="/register"
            onClick={(e) => handleNavigation(e, "/register")}
            className={styles.navLink}
          >
            Signup
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







