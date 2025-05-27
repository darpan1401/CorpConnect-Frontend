import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import baseUrl from "../basUrl/baseUrl";
import styles from "./AdminDashboard.module.css";
import companyList from "../companies/companies";
import { FaCalendarAlt, FaBuilding, FaMapMarkerAlt, FaInfoCircle, FaPlus, FaEdit, FaTrashAlt } from "react-icons/fa";

export default function AdminDashboard() {
  const [events, setEvents] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingEventId, setEditingEventId] = useState(null);
  const [adminName, setAdminName] = useState("");
  const [newEvent, setNewEvent] = useState({
    companyName: "",
    eventName: "",
    date: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.empname) {
      setAdminName(storedUser.empname);
    }
    fetchEvents();
    setCompanies(companyList);
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/admin/events`);
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events", error);
    }
  };

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setNewEvent({
      companyName: "",
      eventName: "",
      date: "",
      location: "",
      description: "",
    });
    setEditingEventId(null);
    setShowForm(false);
  };

  const handleAddOrUpdateEvent = async (e) => {
    e.preventDefault();
    try {
      if (editingEventId) {
        await axios.put(`${baseUrl}/admin/events/${editingEventId}`, newEvent);
        Swal.fire({
          title: "Success!",
          text: "Event updated successfully.",
          icon: "success",
          confirmButtonColor: "#667eea",
          heightAuto: false,
        });
      } else {
        await axios.post(`${baseUrl}/admin/events`, newEvent);
        Swal.fire({
          title: "Success!",
          text: "Event added successfully.",
          icon: "success",
          confirmButtonColor: "#667eea",
          heightAuto: false,
        });
      }
      resetForm();
      fetchEvents();
    } catch (error) {
      console.error("Error saving event", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to save event.",
        icon: "error",
        confirmButtonColor: "#667eea",
        heightAuto: false,
      });
    }
  };

  const handleEdit = (event) => {
    setNewEvent({
      companyName: event.companyName,
      eventName: event.eventName,
      date: event.date,
      location: event.location,
      description: event.description,
    });
    setEditingEventId(event.id);
    setShowForm(true);
    
    // Scroll to form
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  const handleDelete = async (eventId) => {
    const confirm = await Swal.fire({
      title: "Delete Event?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f56565",
      cancelButtonColor: "#667eea",
      confirmButtonText: "Yes, delete it!",
      heightAuto: false,
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(`${baseUrl}/admin/events/${eventId}`);
        Swal.fire({
          title: "Deleted!",
          text: "Event has been deleted.",
          icon: "success",
          confirmButtonColor: "#667eea",
          heightAuto: false,
        });
        fetchEvents();
      } catch (error) {
        console.error("Delete failed", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to delete event.",
          icon: "error",
          confirmButtonColor: "#667eea",
          heightAuto: false,
        });
      }
    }
  };

  const formatDate = (dateStr) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  return (
    <div className={styles.container}>
      <div className={styles.welcomeBanner}>
        <p>
          Welcome, <strong>{adminName}</strong>
        </p>
      </div>

      <h2 className={styles.heading}>Admin Dashboard</h2>

      <div className={styles.topButtons}>
        <button
          className={styles.toggleBtn}
          onClick={() => {
            resetForm();
            setShowForm(!showForm);
          }}
        >
          {showForm ? (
            <>Back to Event List</>
          ) : (
            <><FaPlus style={{ marginRight: "8px" }} /> Add New Event</>
          )}
        </button>
      </div>

      {showForm ? (
        <form className={styles.eventForm} onSubmit={handleAddOrUpdateEvent}>
          <select
            name="companyName"
            value={newEvent.companyName}
            onChange={handleInputChange}
            required
            className={styles.input}
          >
            <option value="" disabled>
              Select Company Name
            </option>
            {companies.map((company, index) => (
              <option key={index} value={company}>
                {company}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="eventName"
            placeholder="Event Name"
            value={newEvent.eventName}
            onChange={handleInputChange}
            required
            className={styles.input}
          />

          <textarea
            name="description"
            placeholder="Event Description"
            value={newEvent.description}
            onChange={handleInputChange}
            required
            className={styles.input}
          />

          <input
            type="date"
            name="date"
            value={newEvent.date}
            onChange={handleInputChange}
            required
            className={styles.input}
          />

          <input
            type="text"
            name="location"
            placeholder="Event Location"
            value={newEvent.location}
            onChange={handleInputChange}
            required
            className={styles.input}
          />

          <button type="submit" className={styles.addBtn}>
            {editingEventId ? (
              <><FaEdit style={{ marginRight: "8px" }} /> Update Event</>
            ) : (
              <><FaPlus style={{ marginRight: "8px" }} /> Add Event</>
            )}
          </button>
        </form>
      ) : (
        <table className={styles.eventTable}>
          <thead>
            <tr>
              <th><FaBuilding style={{ marginRight: "8px" }} /> Company</th>
              <th><FaCalendarAlt style={{ marginRight: "8px" }} /> Event</th>
              <th><FaInfoCircle style={{ marginRight: "8px" }} /> Description</th>
              <th><FaCalendarAlt style={{ marginRight: "8px" }} /> Date</th>
              <th><FaMapMarkerAlt style={{ marginRight: "8px" }} /> Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.length > 0 ? (
              events.map((event) => (
                <tr key={event.id}>
                  <td>{event.companyName}</td>
                  <td>{event.eventName}</td>
                  <td>{event.description.length > 50 ? `${event.description.substring(0, 50)}...` : event.description}</td>
                  <td>{formatDate(event.date)}</td>
                  <td>{event.location}</td>
                  <td>
                    <div className={styles.actionButtons}>
                      <button
                        onClick={() => handleEdit(event)}
                        className={styles.editBtn}
                      >
                        <FaEdit style={{ marginRight: "5px" }} /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(event.id)}
                        className={styles.deleteBtn}
                      >
                        <FaTrashAlt style={{ marginRight: "5px" }} /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className={styles.noData}>
                  No events found. Click "Add New Event" to create one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
