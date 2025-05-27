import React from "react";
import {FaBuilding,FaEnvelope,FaPhoneAlt,FaMapMarkerAlt,FaLinkedin,FaTwitter,FaFacebookF,FaInstagram} from "react-icons/fa";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <FaBuilding />
              </div>
              <h3>CorpConnect</h3>
            </div>
            <p>
              Transforming corporate culture through expertly planned events and
              team-building experiences that create lasting connections and
              drive business success.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4>Our Services</h4>
            <ul>
              <li>Corporate Trips</li>
              <li>Fun Fridays</li>
              <li>Weekend Outings</li>
              <li>Social Activities</li>
              <li>Conferences</li>
              <li>Team Building</li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Contact Info</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><FaEnvelope /></span>
                <span>info@corpconnect.com</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><FaPhoneAlt /></span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><FaMapMarkerAlt /></span>
                <span>123 Business St, City, State 12345</span>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a href="/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={styles.socialIcon} />
              </a>
              <a href="/" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter className={styles.socialIcon} />
              </a>
              <a href="/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className={styles.socialIcon} />
              </a>
              <a href="/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p>&copy; 2024 CorpConnect. All rights reserved.</p>
            <div className={styles.footerLinks}>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
