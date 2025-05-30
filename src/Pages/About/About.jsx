import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { FaHandshake, FaBullseye, FaBolt, FaHeart, FaLightbulb, FaTrophy, FaHandsHelping } from "react-icons/fa";
import missionAnimation from "../../animations/mission.json";
import styles from "./About.module.css";

// Import team member images
import darpanImage from "../../aPhotos/darpan.jpeg";
import mansiImage from "../../aPhotos/mansi.jpeg";
import pranavImage from "../../aPhotos/pranav.jpeg";
import abhiImage from "../../aPhotos/abhi.jpeg";
import swaroopImage from "../../aPhotos/swaroop.jpeg";

const About = () => {
  const missionItems = [
    {
      icon: <FaHandshake />,
      title: "Enhancing Team Dynamics",
      description: "We design events to strengthen trust, teamwork, and collaboration through shared experiences."
    },
    {
      icon: <FaBullseye />,
      title: "Personalized Solutions",
      description: "Tailor-made events that align perfectly with your company's values and objectives."
    },
    {
      icon: <FaBolt />,
      title: "Seamless Execution",
      description: "End-to-end event solutions so you can focus on your business while we handle the experience."
    }
  ];

  const teamMembers = [
    {
      name: "Darpan Dasani",
      role: "CEO",
      image: darpanImage,
      bio: "20+ years in corporate event management"
    },
    {
      name: "Mansi Tawar",
      role: "Creative Director",
      image: mansiImage,
      bio: "Specializes in innovative team experiences"
    },
    {
      name: "Pranav Ravanang",
      role: "Operations Head",
      image: pranavImage,
      bio: "Logistics and planning expert"
    }, 
    {
      name: "Abhishek Rathod",
      role: "Head of Client Experience",
      image: abhiImage,
      bio: "10+ years in corporate hospitality management",
      expertise: ["Client Relations", "Event Personalization", "VIP Experiences"],
      funFact: "Organized events for 3 Fortune 500 companies"
    },
    {
      name: "Swaroop Vaidya",
      role: "Lead Event Producer",
      image: swaroopImage,
      bio: "Specializes in large-scale corporate productions",
      expertise: ["Stage Design", "Technical Production", "Vendor Management"],
      funFact: "Former theater director turned corporate event specialist"
    }
  ];

  const coreValues = [
    {
      icon: <FaHeart />,
      title: "Passion",
      description: "We genuinely care about creating meaningful connections"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Constantly evolving our event formats and approaches"
    },
    {
      icon: <FaTrophy />,
      title: "Excellence",
      description: "Never settling for anything less than outstanding"
    },
    {
      icon: <FaHandsHelping />,
      title: "Integrity",
      description: "Honest, transparent, and ethical in all we do"
    }
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.aboutHero}>
        <div className={styles.container}>
          <h1 className={styles.aboutTitle}>About Corpkites</h1>
          <p className={styles.aboutSubtitle}>
            We're redefining corporate culture by creating powerful experiences that inspire connection, 
            collaboration, and growth.
          </p>
          <div className={styles.welcomeAnimation}>
            <Lottie 
              animationData={missionAnimation} 
              loop={true} 
              style={{ width: "100%", maxWidth: "500px" }}
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Vision & Mission</h2>
          <p className={styles.sectionSubtitle}>
            Founded in 2025, Corpkites has organized 500+ events for 200+ companies, 
            helping them build stronger teams and cultures.
          </p>
          
          <div className={styles.missionCards}>
            {missionItems.map((item, index) => (
              <div key={index} className={styles.missionCard}>
                <div className={styles.missionIcon}>{item.icon}</div>
                <h3 className={styles.reasonTitle}>{item.title}</h3>
                <p className={styles.reasonDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Meet Our Team</h2>
          <p className={styles.sectionSubtitle}>
            Passionate professionals with decades of combined experience in corporate event management.
          </p>
          
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <img src={member.image} alt={member.name} className={styles.teamImage} />
                <div className={styles.teamInfo}>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                  <p className={styles.reasonDescription}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <p className={styles.sectionSubtitle}>
            These principles guide everything we do at corpkites.
          </p>
          
          <div className={styles.valuesGrid}>
            {coreValues.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.reasonTitle}>{value.title}</h3>
                <p className={styles.reasonDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (Reused from homepage) */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Transform Your Team?</h2>
            <p>
              Let's create an unforgettable experience that brings your team together.
            </p>
            <div className={styles.ctaActions}>
              <Link to="/contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}>
                Get Started Now
              </Link>
              <button className={`${styles.btn} ${styles.btnSecondary} ${styles.btnLarge}`}>Our Event Portfolio</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
