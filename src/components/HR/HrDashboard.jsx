import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../basUrl/baseUrl";
import styles from "./HrDashboard.module.css";
import jsPDF from "jspdf";
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaMoneyBillWave, FaFileDownload, FaInfoCircle } from "react-icons/fa";

export default function HRDashboard() {
  const [events, setEvents] = useState([]);
  const [hrCompany, setHrCompany] = useState("");
  const [hrName, setHrName] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.empname && storedUser.companyName) {
      setHrName(storedUser.empname);
      setHrCompany(storedUser.companyName);
      fetchEvents(storedUser.companyName);
    }
  }, []);

  const fetchEvents = async (companyName) => {
    try {
      const response = await axios.get(
        `${baseUrl}/hr/events?company=${encodeURIComponent(companyName)}`
      );
      setEvents(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching events for HR", error);
      setEvents([]);
    }
  };

  const downloadPDF = (event) => {
    try {
      const doc = new jsPDF();
      
      
      doc.setFillColor(102, 126, 234);
      doc.rect(0, 0, 210, 40, "F");
      
      // Add title
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(24);
      doc.text("Event Details", 105, 20, { align: "center" });
      
      // Add company logo placeholder
      doc.setDrawColor(255, 255, 255);
      doc.setLineWidth(0.5);
      doc.rect(15, 10, 30, 20);
      doc.setFontSize(10);
      doc.text("Company Logo", 30, 25, { align: "center" });
      
      // Add content
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(16);
      doc.text(`Event: ${event.eventName || "Untitled Event"}`, 20, 50);
      
      doc.setFontSize(12);
      doc.text(`Company: ${event.companyName || "Unknown Company"}`, 20, 60);
      
      // Safely format date
      let formattedDate;
      try {
        formattedDate = new Date(event.date).toLocaleDateString();
        if (formattedDate === "Invalid Date") formattedDate = "Date not specified";
      } catch (e) {
        formattedDate = "Date not specified";
      }
      doc.text(`Date: ${formattedDate}`, 20, 70);
      
      doc.text(`Location: ${event.location || "Location not specified"}`, 20, 80);
      
      if (event.price) {
        doc.text(`Price: $${event.price}`, 20, 90);
      }
      
      // Add description with word wrap and handle null/undefined
      doc.text("Description:", 20, 100);
      const description = event.description || "No description provided";
      const splitDescription = doc.splitTextToSize(description, 170);
      doc.text(splitDescription, 20, 110);
      
      // Add footer
      doc.setFillColor(102, 126, 234);
      doc.rect(0, 280, 210, 20, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(10);
      doc.text("corpkites - Connecting Businesses", 105, 290, { align: "center" });
      doc.text(`Generated on ${new Date().toLocaleDateString()}`, 105, 295, { align: "center" });
      
      // Save the PDF with a safe filename
      const safeFilename = (event.eventName || "event").replace(/[^a-z0-9]/gi, '_').toLowerCase();
      doc.save(`${safeFilename}_details.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  // Filter events into upcoming and past
  const currentDate = new Date();
  const upcomingEvents = events.filter(
    (event) => new Date(event.date) >= currentDate
  );
  const pastEvents = events.filter(
    (event) => new Date(event.date) < currentDate
  );

  const renderEventCards = (eventsList) => {
    if (eventsList.length === 0) {
      return <div className={styles.noEvents}>No events found</div>;
    }

    return (
      <div className={styles.cardContainer}>
        {eventsList.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <h3>
              <FaCalendarAlt style={{ color: "#667eea" }} />
              {event.eventName}
            </h3>
            <p>
              <FaBuilding style={{ color: "#667eea" }} />
              <strong>Company:</strong> {event.companyName}
            </p>
            <p>
              <FaCalendarAlt style={{ color: "#667eea" }} />
              <strong>Date:</strong>{" "}
              {new Date(event.date).toLocaleDateString()}
            </p>
            <p>
              <FaMapMarkerAlt style={{ color: "#667eea" }} />
              <strong>Location:</strong> {event.location}
            </p>
            <p>
              <FaInfoCircle style={{ color: "#667eea" }} />
              <strong>Description:</strong> {event.description}
            </p>
            {event.price && (
              <p>
                <FaMoneyBillWave style={{ color: "#667eea" }} />
                <strong>Price:</strong> ${event.price}
              </p>
            )}
            <button
              className={styles.downloadBtn}
              onClick={() => downloadPDF(event)}
              type="button"
            >
              <FaFileDownload />
              Download PDF
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.welcomeBanner}>
        <p>
          Welcome, <strong>{hrName}</strong> from <strong>{hrCompany}</strong>
        </p>
      </div>

      <h2>Upcoming Events</h2>
      {renderEventCards(upcomingEvents)}

      <h2>Past Events</h2>
      {renderEventCards(pastEvents)}
    </div>
  );
}
