import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, FaCalendarCheck, FaUsers, FaClipboardList, 
  FaUtensils, FaMedal, FaSmile, FaGamepad, FaFilm, 
  FaTrophy, FaChess, FaLaptop, FaArrowRight
} from 'react-icons/fa';
import styles from './EventFlow.module.css';


const eventFlowData = {
  "fun-fridays": {
    "cooking-challenge": {
      title: "Cooking Challenge",
      description: "A fun and engaging cooking competition that brings teams together through culinary creativity",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Choose a convenient Friday afternoon for your team's cooking challenge"
        },
        {
          icon: <FaUsers />,
          title: "Team Formation",
          description: "Divide participants into balanced teams of 4-5 members each"
        },
        {
          icon: <FaClipboardList />,
          title: "Challenge Briefing",
          description: "Teams receive their cooking challenge and rules from our professional chef"
        },
        {
          icon: <FaUtensils />,
          title: "Cooking Competition",
          description: "Teams work together to create their culinary masterpieces within the time limit"
        },
        {
          icon: <FaMedal />,
          title: "Judging & Awards",
          description: "Dishes are judged on taste, presentation, creativity, and teamwork"
        },
        {
          icon: <FaSmile />,
          title: "Celebration",
          description: "Everyone enjoys the food together in a celebratory team dinner"
        }
      ],
      benefits: [
        "Improves team communication",
        "Builds collaboration skills",
        "Encourages creativity",
        "Creates shared memories",
        "Reduces workplace stress"
      ],
      testimonial: {
        quote: "The cooking challenge was the highlight of our quarter! Our team is still talking about it months later.",
        author: "Priya Sharma, HR Director at TechCorp India"
      }
    },
    "game-tournament": {
      title: "Game Tournament",
      description: "Competitive gaming that builds team spirit through friendly competition",
      image: "https://images.unsplash.com/photo-1511882150382-421056c89033",
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Select a Friday afternoon for your team's gaming tournament"
        },
        {
          icon: <FaGamepad />,
          title: "Game Selection",
          description: "Choose from our catalog of team-based games that match your team's interests"
        },
        {
          icon: <FaUsers />,
          title: "Team Formation",
          description: "Create balanced teams to ensure fair and fun competition"
        },
        {
          icon: <FaChess />,
          title: "Tournament Setup",
          description: "Our facilitators set up the tournament brackets and explain the rules"
        },
        {
          icon: <FaLaptop />,
          title: "Game Play",
          description: "Teams compete in rounds of exciting gameplay with professional facilitation"
        },
        {
          icon: <FaTrophy />,
          title: "Awards Ceremony",
          description: "Winners receive prizes and all participants celebrate their achievements"
        }
      ],
      benefits: [
        "Builds team spirit",
        "Encourages healthy competition",
        "Improves strategic thinking",
        "Creates a fun work environment",
        "Strengthens team bonds"
      ],
      testimonial: {
        quote: "Our team gaming tournament revealed leadership qualities in team members we hadn't noticed before!",
        author: "Rahul Mehta, Team Lead at InnovateTech"
      }
    },
    "movie-night": {
      title: "Movie Night",
      description: "A relaxing evening of film and discussion to unwind and bond",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
      steps: [
        {
          icon: <FaCalendarCheck />,
          title: "Schedule",
          description: "Select a Friday evening for your team's movie night"
        },
        {
          icon: <FaFilm />,
          title: "Film Selection",
          description: "Choose a film that aligns with your team's interests or learning objectives"
        },
        {
          icon: <FaClipboardList />,
          title: "Setup & Preparation",
          description: "We prepare a comfortable viewing environment with premium audio-visual setup"
        },
        {
          icon: <FaUtensils />,
          title: "Refreshments",
          description: "Enjoy gourmet snacks and beverages during the screening"
        },
        {
          icon: <FaUsers />,
          title: "Discussion",
          description: "Participate in a facilitated discussion about themes and insights from the film"
        },
        {
          icon: <FaSmile />,
          title: "Team Bonding",
          description: "Continue the evening with informal socializing and team bonding"
        }
      ],
      benefits: [
        "Provides stress relief",
        "Encourages thoughtful discussion",
        "Creates shared cultural experiences",
        "Improves team communication",
        "Builds a positive team culture"
      ],
      testimonial: {
        quote: "Our movie nights have become a monthly tradition that everyone looks forward to. It's amazing how much closer our team has become.",
        author: "Ananya Patel, CEO at CreativeMinds"
      }
    }
  }
};

export default function EventFlow() {
  const { serviceId, eventId } = useParams();
  const navigate = useNavigate();
  

  const eventFlow = eventFlowData[serviceId]?.[eventId];
  
  useEffect(() => {
 
    const steps = document.querySelectorAll(`.${styles.processStep}`);
    steps.forEach((step, index) => {
      setTimeout(() => {
        step.classList.add(styles.animate);
      }, 300 * index);
    });
    

    const benefits = document.querySelectorAll(`.${styles.benefitItem}`);
    benefits.forEach((benefit, index) => {
      setTimeout(() => {
        benefit.classList.add(styles.animate);
      }, 200 * index);
    });
  }, []);
  
  if (!eventFlow) {
    return (
      <div className={styles.errorContainer}>
        <h2>Event information not found</h2>
        <button 
          className={styles.backButton} 
          onClick={() => navigate(`/services/${serviceId}`)}
        >
          <FaArrowLeft /> Back to {serviceId.replace(/-/g, ' ')}
        </button>
      </div>
    );
  }

  return (
    <div className={styles.eventFlowPage}>
      {/* Back Navigation */}
      <div className={styles.backNavigation}>
        <div className={styles.container}>
          <button 
            className={styles.backButton} 
            onClick={() => navigate(`/services/${serviceId}`)}
          >
            <FaArrowLeft /> Back to {serviceId.replace(/-/g, ' ')}
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${eventFlow.image})` }}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>{eventFlow.title}</h1>
          <p className={styles.heroSubtitle}>{eventFlow.description}</p>
        </div>
      </section>

      {/* Process Flow */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.sectionSubtitle}>
            Follow our proven process to deliver an exceptional {eventFlow.title} experience
          </p>

          <div className={styles.processFlowTimeline}>
            {eventFlow.steps.map((step, index) => (
              <div key={index} className={`${styles.processStep} ${index % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.stepContent}>
                  <div className={styles.stepIconContainer}>
                    <div className={styles.stepIcon}>{step.icon}</div>
                  </div>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                  {index < eventFlow.steps.length - 1 && (
                    <div className={styles.stepArrow}>
                      <FaArrowRight />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Benefits</h2>
          <p className={styles.sectionSubtitle}>
            Why {eventFlow.title} is great for your team
          </p>

          <div className={styles.benefitsList}>
            {eventFlow.benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitItem}>
                <div className={styles.benefitCheck}>✓</div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className={styles.testimonial}>
            <blockquote className={styles.testimonialQuote}>
              "{eventFlow.testimonial.quote}"
            </blockquote>
            <p className={styles.testimonialAuthor}>— {eventFlow.testimonial.author}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to Book Your {eventFlow.title}?</h2>
          <p className={styles.ctaDescription}>
            Contact us today to schedule this event for your team
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className={styles.primaryButton}>
              Book Now
            </Link>
            <Link to={`/services/${serviceId}`} className={styles.secondaryButton}>
              Explore Other Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

