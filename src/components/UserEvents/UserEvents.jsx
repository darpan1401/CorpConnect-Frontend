import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaInfoCircle, 
  FaMoneyBillWave, 
  FaUserPlus
} from "react-icons/fa";
import styles from "./UserEvents.module.css";
import baseUrl from "../basUrl/baseUrl";

export default function UserEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    
    if (storedUser) {
      const company = storedUser.companyName || storedUser.company || "";
      
      if (company) {
        fetchEvents(company, token);
      } else {
        setLoading(false);
        Swal.fire({
          title: "Company Missing",
          text: "Your profile doesn't have a company association",
          icon: "error"
        });
      }
    } else {
      setLoading(false);
      Swal.fire({
        title: "Login Required",
        text: "Please login to access this page",
        icon: "warning"
      });
    }
  }, []);

  const fetchEvents = async (company, token) => {
    try {
      setLoading(true);
      
      const apiUrl = `${baseUrl}/hr/events?company=${encodeURIComponent(company.trim())}`;
      
      const response = await axios.get(apiUrl);
      
      // Filter for only upcoming events
      const currentDate = new Date();
      const upcomingEvents = Array.isArray(response.data) 
        ? response.data.filter(event => new Date(event.date) >= currentDate)
        : [];
      
      setEvents(upcomingEvents);
      
      // Dispatch event for navbar notification
      const event = new CustomEvent('event-notifications', {
        detail: { count: upcomingEvents.length }
      });
      window.dispatchEvent(event);
      
    } catch (error) {
      console.error("Error fetching events", error);
      
      let errorMsg = "Failed to load events. Please try again later.";
      
      if (error.response) {
        errorMsg = error.response.data.message || 
                  error.response.data.error ||
                  errorMsg;
      }
      
      Swal.fire({
        title: "Error",
        text: errorMsg,
        icon: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  const enrollInEvent = async (eventId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.getItem("token");
      
            if (!user || !token) {
        Swal.fire({
          title: "Work in Progress",
          text: "This feature is currently under development",
          icon: "info"
        });
        return;
      }
      
      await axios.post(`${baseUrl}/events/enroll`, {
        eventId,
        userId: user.empid || user.id,
        userName: user.empname || user.name,
        companyName: user.companyName || user.company
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      Swal.fire({
        title: "Success!",
        text: "Enrollment successful!",
        icon: "success"
      });
      
      // Refresh events
      fetchEvents(user.companyName || user.company, token);
    } catch (error) {
      console.error("Enrollment error:", error);
      let errorMsg = "Enrollment failed. Please try again.";
      
      if (error.response) {
        errorMsg = error.response.data.message || errorMsg;
      }
      
      Swal.fire({
        title: "Error",
        text: errorMsg,
        icon: "error"
      });
    }
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loader}></div>
        <p>Loading events...</p>
      </div>
    );
  }
  
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Upcoming Events</h1>
      
      {events.length === 0 ? (
        <div className={styles.noEvents}>
          <p>No upcoming events for your company at the moment.</p>
        </div>
      ) : (
        <div className={styles.eventsGrid}>
          {events.map((event) => (
            <div key={event.id || event._id} className={styles.eventCard}>
              <div className={styles.eventHeader}>
                <h3>Event Name - {event.eventName}</h3>
              </div>
              
              <div className={styles.eventDetails}>
                <div className={styles.detailRow}>
                  <FaCalendarAlt className={styles.icon} />
                  <div>
                    <span className={styles.label}>Date:</span>
                    <span className={styles.value}>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className={styles.detailRow}>
                  <FaMapMarkerAlt className={styles.icon} />
                  <div>
                    <span className={styles.label}>Location:</span>
                    <span className={styles.value}>{event.location}</span>
                  </div>
                </div>
                
                <div className={styles.detailRow}>
                  <FaInfoCircle className={styles.icon} />
                  <div>
                    <span className={styles.label}>Description:</span>
                    <span className={styles.value}>{event.description}</span>
                  </div>
                </div>
                
                {event.price > 0 && (
                  <div className={styles.detailRow}>
                    <FaMoneyBillWave className={styles.icon} />
                    <div>
                      <span className={styles.label}>Price:</span>
                      <span className={styles.value}>₹{event.price}</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className={styles.buttonContainer}>
                <button 
                  className={`${styles.enrollButton} ${event.isEnrolled ? styles.enrolled : ''}`}
                  onClick={() => enrollInEvent(event.id || event._id)}
                  disabled={event.isEnrolled}
                >
                  <FaUserPlus />
                  {event.isEnrolled ? "Enrolled ✓" : "Enroll Now"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
