import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { FaBullseye, FaBrain, FaBolt, FaHandshake,FaReact , FaMagic } from "react-icons/fa";
import welcomeAnimation from "../../animations/home.json";
import trips from "../../animations/trips.json";
import ff from "../../animations/funfriday.json";
import outing from "../../animations/outing.json";
import social from "../../animations/social.json";
import conf from "../../animations/conf.json";
import styles from "./Home.module.css";

function Home() {
  const eventCategories = [
    {
      id: "corporate-trips",
      title: "Corporate Trips",
      description: "Professional business trips and team retreats that strengthen bonds and drive collaboration.",
      color: "#3498db",
      features: ["Team Building", "Strategic Planning", "Networking", "Professional Development"],
      animation: trips,
    },
    {
      id: "fun-fridays",
      title: "Fun Fridays",
      description: "Weekly team bonding activities designed to boost morale and create lasting memories.",
      color: "#e74c3c",
      features: ["Team Games", "Celebrations", "Stress Relief", "Social Bonding"],
      animation: ff,
    },
    {
      id: "weekend-outings",
      title: "Weekend Outings",
      description: "Refreshing outdoor activities and adventures that energize teams and build connections.",
      color: "#27ae60",
      features: ["Outdoor Adventures", "Nature Activities", "Team Challenges", "Relaxation"],
      animation: outing,
    },
    {
      id: "social-activities",
      title: "Social Activities",
      description: "Engaging social events that foster collaboration and strengthen workplace relationships.",
      color: "#f39c12",
      features: ["Networking Events", "Cultural Activities", "Community Building", "Social Impact"],
      animation: social,
    },
    {
      id: "conferences",
      title: "Conferences",
      description: "Professional conferences and seminars that drive knowledge sharing and business growth.",
      color: "#9b59b6",
      features: ["Knowledge Sharing", "Industry Insights", "Professional Growth", "Networking"],
      animation: conf,
    },
    {
      id: "cultural-events",
      title: "Cultural Function", 
      description: "Celebrate corporate spirit through music, drama, and cultural performances that foster unity.",
      color: "#e67e22",
      features: ["Team Bonding", "Talent Showcase", "Entertainment", "Corporate Culture"],
      animation: conf,
    },
  ];

  const whyChooseUs = [
    {
      icon: <FaBullseye />,
      title: "Corporate World Experience",
      description: "Years of hands-on experience in the corporate environment gives us deep insights into what works.",
    },
    {
      icon: <FaBrain />,
      title: "Understanding Exact Requirements",
      description: "We know exactly what corporate teams need because we've been there and done that.",
    },
    {
      icon: <FaBolt />,
      title: "Proven Track Record",
      description: "Hundreds of successful events and satisfied corporate clients speak for our expertise.",
    },
    {
      icon: <FaHandshake />,
      title: "End-to-End Solutions",
      description: "From planning to execution, we handle everything so you can focus on your business.",
    },
    {
      icon: <FaMagic  />,
      title: "Customized Event Experiences",
      description: "We tailor every event to align perfectly with your company’s culture and goals.",
    },
    {
      icon: <FaReact />,
      title: "Tech-Enabled Efficiency",
      description: "We leverage the latest tools to ensure a smooth, modern, and seamless event experience.",
    }
  ];

  return (
    <div className={styles.home}>
      {/* Welcome Section */}
      <section className={styles.welcomeSection}>
        <div className={styles.container}>
          <div className={styles.welcomeContent}>
            <div className={styles.welcomeText}>
              <h1 className={styles.welcomeTitle}>Welcome to Corpkites</h1>
              <p className={styles.welcomeSubtitle}>
                Transforming corporate culture through expertly planned events and team-building experiences that create lasting connections and drive business success.
              </p>
              <div className={styles.welcomeStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Events Organized</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>200+</span>
                  <span className={styles.statLabel}>Happy Companies</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>15K+</span>
                  <span className={styles.statLabel}>Participants</span>
                </div>
              </div>
              <div className={styles.welcomeActions}>
                <Link to="/contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}>
                  Start Planning Today
                </Link>

              </div>
            </div>
            <div className={styles.welcomeAnimation}>
              <Lottie
                animationData={welcomeAnimation}
                loop={true}
                style={{ width: "100%", height: "400px", maxWidth: "400px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className={styles.eventsCategories}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Event Categories</h2>
          <p className={styles.sectionSubtitle}>
            Discover our comprehensive range of corporate event solutions, each designed to meet specific business objectives and team dynamics.
          </p>
          <div className={styles.categoriesGrid}>
            {eventCategories.map((category) => (
              <div key={category.id} className={styles.categoryCard}>
                <div className={styles.categoryAnimation}>
                  <Lottie
                    animationData={category.animation}
                    loop={true}
                    style={{ width: "120px", height: "120px" }}
                  />
                </div>
                <div className={styles.categoryContent}>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                  <p className={styles.categoryDescription}>{category.description}</p>
                  <div className={styles.categoryFeatures}>
                    {category.features.map((feature, index) => (
                      <span key={index} className={styles.featureTag}>
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/services/${category.id}/${
                      category.id === "corporate-trips"
                        ? ""
                        : category.id === "fun-fridays"
                        ? ""
                        : category.id === "weekend-outings"
                        ? ""
                        : category.id === "social-activities"
                        ? ""
                        : category.id === "conferences"
                        ? ""
                        : category.id === "cultural-events"
                        ? ""
                        : ""
                    }`}
                  >
                    <button
                      className={`${styles.btn} ${styles.btnOutline} ${styles.viewMoreBtn}`}
                      style={{ borderColor: category.color }}
                    >
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyChooseUs}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose corpkites?</h2>
          <p className={styles.sectionSubtitle}>
            Our deep understanding of corporate dynamics and proven expertise make us the perfect partner for your next event.
          </p>
          <div className={styles.reasonsGrid}>
            {whyChooseUs.map((reason, index) => (
              <div key={index} className={styles.reasonCard}>
                <div className={styles.reasonIcon}>
                  {reason.icon}
                </div>
                <div className={styles.reasonContent}>
                  <h3 className={styles.reasonTitle}>{reason.title}</h3>
                  <p className={styles.reasonDescription}>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h1 className={styles.ctaTitle}>Ready to Transform Your Next Corporate Event?</h1>
            <p className={styles.ctaDescription}>
              Let us help you create memorable experiences that strengthen your team and elevate your company culture.
            </p>
            <div className={styles.ctaActions}>
              <Link to="/contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}>
                Get Started Now
              </Link>
              <button className={`${styles.btn} ${styles.btnSecondary} ${styles.btnLarge}`}>
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
