import React from "react";
import { Link } from "react-router-dom";
import { FaGlassCheers, FaHandsHelping, FaPlane, FaMicrophone } from "react-icons/fa";
import styles from "./Services.module.css";

// Define the servicesData object
const servicesData = {
  "fun-fridays": {
    id: "fun-fridays",
    title: "Fun Fridays",
    description: "Boost team morale with exciting Friday activities",
    icon: <FaGlassCheers />,
    features: ["Team Games", "Celebrations", "Stress Relief", "Social Bonding"]
  },
  "team-building": {
    id: "team-building",
    title: "Team Building",
    description: "Strengthen team bonds through collaborative activities",
    icon: <FaHandsHelping />,
    features: ["Communication", "Collaboration", "Problem Solving", "Trust Building"]
  },
  "corporate-trips": {
    id: "corporate-trips",
    title: "Corporate Trips",
    description: "Professional business trips and team retreats that strengthen bonds",
    icon: <FaPlane />,
    features: ["Team Building", "Strategic Planning", "Networking", "Professional Development"]
  },
  "conferences": {
    id: "conferences",
    title: "Conferences",
    description: "Professional conferences and seminars that drive knowledge sharing",
    icon: <FaMicrophone />,
    features: ["Knowledge Sharing", "Industry Insights", "Professional Growth", "Networking"]
  }
};

// Get all services as an array
const getAllServices = () => {
  return Object.values(servicesData);
};

export default function Services() {
  // In React 19, we need to use the 'use' directive for hooks
  const services = getAllServices();

  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Our Services</h1>
          <p className={styles.heroSubtitle}>
            Comprehensive corporate event solutions tailored to your company's unique needs and objectives
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What We Provide</h2>
          <p className={styles.sectionSubtitle}>
            Explore our range of specialized corporate event services designed to strengthen teams and enhance company culture
          </p>

          <div className={styles.servicesList}>
            {services.map((service) => (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceLeft}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                </div>
                <div className={styles.serviceRight}>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <div className={styles.serviceFeatures}>
                    {service.features.map((feature, index) => (
                      <span key={index} className={styles.featureTag}>
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link to={`/services/${service.id}`} className={styles.serviceLink}>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to Plan Your Next Corporate Event?</h2>
          <p className={styles.ctaDescription}>
            Contact us today to discuss how we can help you create memorable and effective corporate events
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className={styles.primaryButton}>
              Contact Us
            </Link>
            <Link to="/about" className={styles.secondaryButton}>
              Learn About Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
