import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaMoneyBillWave, FaArrowLeft, FaInfoCircle } from 'react-icons/fa';
import styles from './ServiceDetail.module.css';

// fun friday
import cooking from '../../aservicephotos/cooking.jpeg';
import gaming from '../../aservicephotos/gaming.jpeg';
import movie from '../../aservicephotos/movie.jpeg';

// social activities
import beach from '../../aservicephotos/beach.jpg';
import plants from '../../aservicephotos/plants.jpeg';
import blood from '../../aservicephotos/blood.jpg';

//corporate trips
import bali from '../../aservicephotos/bali.jpg';
import goa from '../../aservicephotos/goa.jpeg';
import mumbai from '../../aservicephotos/mumbai.jpeg';
import bangalore from '../../aservicephotos/banglore.jpeg';
import kerala from '../../aservicephotos/kerala.jpeg';
import rajasthan from '../../aservicephotos/rajasthan.jpeg';

//conferences
import tech from '../../aservicephotos/tech.jpg';
import leadership from '../../aservicephotos/leadership.jpg';
import hr from '../../aservicephotos/hr.jpg';


//cultural events
import cuisine from '../../aservicephotos/cuisine day.jpg';
import costume from '../../aservicephotos/costume.jpg';
import music from '../../aservicephotos/music.jpg';
import food from '../../aservicephotos/food fest.jpg';
import heritage from '../../aservicephotos/heritage.jpg';
import folk from '../../aservicephotos/folk.jpg';

//weekend outing
import hiking from '../../aservicephotos/hiking.jpeg';
import bbeach from '../../aservicephotos/Beach Retreat.jpeg';
import park from '../../aservicephotos/park.jpeg';



const tripData = {
  "corporate-trips": [
    {
      id: "bali",
      destination: "Bali",
      image: bali,
      duration: "5 Days, 4 Nights",
      price: "₹23,000",
      capacity: "2 Adults",
      description: "Experience the beauty of Bali with your team. Perfect for corporate retreats and team bonding."
    },
    {
      id: "goa",
      destination: "Goa",
      image: goa,
      duration: "4 Days, 3 Nights",
      price: "₹15,000",
      capacity: "2 Adults",
      description: "Enjoy the beaches and vibrant culture of Goa. Great for team relaxation and strategic planning."
    },
    {
      id: "mumbai",
      destination: "Mumbai",
      image: mumbai,
      duration: "3 Days, 2 Nights",
      price: "₹12,000",
      capacity: "2 Adults",
      description: "Explore the business capital of India. Perfect for corporate meetings and networking."
    },
    {
      id: "bangalore",
      destination: "Bangalore",
      image: bangalore,
      duration: "3 Days, 2 Nights",
      price: "₹13,500",
      capacity: "2 Adults",
      description: "Visit India's tech hub. Ideal for tech companies and innovation workshops."
    },
    {
      id: "kerala",
      destination: "Kerala",
      image: kerala,
      duration: "4 Days, 3 Nights",
      price: "₹16,500",
      capacity: "2 Adults",
      description:
        "Explore God's Own Country with backwaters, hill stations, and spice plantations. Perfect for team retreats in nature.",
    },
    {
      id: "rajasthan",
      destination: "Rajasthan",
      image: rajasthan,
      duration: "5 Days, 4 Nights",
      price: "₹18,000",
      capacity: "2 Adults",
      description:
        "Experience royal heritage and desert landscapes. Ideal for cultural immersion and leadership workshops.",
    }
  ],





  "fun-fridays": [
    {
      id: "cooking-challenge",
      destination: "Cooking Challenge",
      image: cooking,
      duration: "Half Day",
      price: "₹2,500",
      capacity: "Up to 20 people",
      description: "Team cooking challenges to boost creativity and collaboration."
    },
    {
      id: "game-tournament",
      destination: "Game Tournament",
      image: gaming,
      duration: "Half Day",
      price: "₹1,800",
      capacity: "Up to 30 people",
      description: "Competitive gaming tournaments to foster team spirit and friendly competition."
    },
    {
      id: "movie-night",
      destination: "Movie Night",
      image: movie,
      duration: "Evening",
      price: "₹1,200",
      capacity: "Up to 50 people",
      description: "Relaxing movie nights with discussions to unwind and bond after a busy week."
    }
  ],






  "social-activities": [
    {
      id: "beach-cleanup",
      destination: "Beach Cleanup Drive",
      image: beach,
      duration: "Half Day",
      price: "₹0",
      capacity: "Unlimited",
      description: "Join hands to clean the local beach and contribute to a greener environment."
    },
    {
      id: "tree-plantation",
      destination: "Tree Plantation",
      image: plants,
      duration: "Half Day",
      price: "₹500",
      capacity: "Up to 50 people",
      description: "Engage in planting trees and spreading awareness for a sustainable future."
    },
    {
      id: "blood-donation",
      destination: "Blood Donation Camp",
      image: blood,
      duration: "2 Hours",
      price: "₹0",
      capacity: "Unlimited",
      description: "Help save lives by participating in a community blood donation event."
    }
  ],




  "conferences": [
    {
      id: "tech-summit",
      destination: "Tech Summit",
      image: tech,
      duration: "3 Days",
      price: "₹20,000",
      capacity: "Up to 100 people",
      description: "Professional tech conference with industry speakers and networking opportunities."
    },
    {
      id: "leadership-summit",
      destination: "Leadership Summit",
      image: leadership,
      duration: "2 Days",
      price: "₹18,000",
      capacity: "Up to 80 people",
      description: "Empower leaders with sessions on management, innovation, and business strategy."
    },
    {
      id: "hr-conclave",
      destination: "HR Conclave",
      image: hr,
      duration: "1 Day",
      price: "₹10,000",
      capacity: "Up to 60 people",
      description: "Insightful discussions on HR best practices, employee engagement, and talent retention."
    }
    // add more as per need
  ],

  

  "cultural-events": [
    {
      id: "cultural-cuisine-day",
      destination: "Cultural Cuisine Day",
      image: cuisine,
      duration: "Full Day",
      price: "₹5,000",
      capacity: "Up to 50 people",
      description: "Celebrate world cultures through a day of cooking and tasting traditional dishes."
    },
    {
      id: "themed-costume-day",
      destination: "Themed Costume Day",
      image: costume,
      duration: "Full Day",
      price: "₹3,500",
      capacity: "Up to 100 people",
      description: "Dress up in traditional costumes to experience and learn about diverse cultures."
    },
    {
      id: "music-and-dance-festival",
      destination: "Music and Dance Festival",
      image: music,
      duration: "Evening",
      price: "₹4,000",
      capacity: "Up to 200 people",
      description: "Enjoy vibrant music and dance performances showcasing various cultural traditions."
    },
    {
      id: "folklore-sessions",
      destination: "Folklore Sessions",
      image: folk,
      duration: "2 Hours",
      price: "₹2,000",
      capacity: "Up to 40 people",
      description: "Engage with storytellers sharing folk tales and legends from around the world."
    },
    {
      id: "traditional-food-festival",
      destination: "Traditional Food Festival",
      image: food,
      duration: "Full Day",
      price: "₹6,000",
      capacity: "Up to 100 people",
      description: "Taste and celebrate a variety of traditional foods from different cultures."
    },
    {
      id: "heritage-walks",
      destination: "Heritage Walks",
      image: heritage,
      duration: "3 Hours",
      price: "₹1,500",
      capacity: "Up to 25 people",
      description: "Explore historical sites and learn about cultural heritage through guided walks."
    }
  ],





  "weekend-outings": [
    {
      id: "nature-hiking",
      destination: "Nature Hiking",
      image: hiking,
      duration: "Full Day",
      price: "₹3,500",
      capacity: "Up to 25 people",
      description: "Refreshing hiking trips in scenic locations to rejuvenate and build team connections in nature."
    },
    {
      id: "beach-retreat",
      destination: "Beach Retreat",
      image: bbeach,
      duration: "Weekend",
      price: "₹8,000",
      capacity: "Up to 40 people",
      description: "Relaxing beach getaways with team activities, water sports, and bonfire sessions."
    },
    {
      id: "adventure-park",
      destination: "Adventure Park",
      image: park,
      duration: "Full Day",
      price: "₹4,200",
      capacity: "Up to 35 people",
      description: "Thrilling adventure park experiences with zip-lining, rock climbing, and team challenges."
    }
  ]

  
};

// Service titles mapping
const serviceTitles = {
  "corporate-trips": "Corporate Trips",
  "fun-fridays": "Fun Fridays",
  "social-activities": "Social Activities",
  "team-building": "Team Building",
  "conferences": "Conferences",
  "cultural-events": "Cultural Events",
  "weekend-outings": "Weekend Outings"

};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  // Get trips for the selected service
  const trips = tripData[serviceId] || [];
  const serviceTitle = serviceTitles[serviceId] || "Service Details";

  return (
    <div className={styles.serviceDetailPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
      <button 
            className={styles.backButton} 
            onClick={() => navigate('/services')}
          >
            <FaArrowLeft /> Back to Services
          </button>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>{serviceTitle}</h1>
          <p className={styles.heroSubtitle}>
            Explore our {serviceTitle.toLowerCase()} options tailored for corporate teams
          </p>
        </div>
      </section>

      {/* Trips/Options List */}
      <section className={styles.tripsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Available Options</h2>
          <p className={styles.sectionSubtitle}>
            Choose from our carefully curated selection of {serviceTitle.toLowerCase()} designed for corporate teams
          </p>

          <div className={styles.tripGrid}>
            {trips.map((trip) => (
              <div key={trip.id} className={styles.tripCard}>
                <div className={styles.tripImageContainer}>
                  <img src={trip.image} alt={trip.destination} className={styles.tripImage} />
                  <div className={styles.tripDuration}>
                    <FaCalendarAlt /> {trip.duration}
                  </div>
                </div>
                <div className={styles.tripContent}>
                  <h3 className={styles.tripDestination}>
                    <FaMapMarkerAlt /> {trip.destination}
                  </h3>
                  <p className={styles.tripDescription}>{trip.description}</p>
                  <div className={styles.tripDetails}>
                    <div className={styles.tripDetail}>
                      <FaMoneyBillWave /> {trip.price} <span>per person</span>
                    </div>
                    <div className={styles.tripDetail}>
                      <FaUsers /> {trip.capacity}
                    </div>
                  </div>
                  <Link 
                    to={`/services/${serviceId}/${trip.id}/flow`} 
                    className={styles.moreInfoButton}
                  >
                    <FaInfoCircle /> View Process Flow
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
          <h2 className={styles.ctaTitle}>Need a Custom Solution?</h2>
          <p className={styles.ctaDescription}>
            We can create tailored {serviceTitle.toLowerCase()} experiences for your specific team needs
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className={styles.primaryButton}>
              Contact Us
            </Link>
            <Link to="/services" className={styles.secondaryButton}>
              Back to Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



