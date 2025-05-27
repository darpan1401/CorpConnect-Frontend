import { useState } from "react";
import Lottie from "lottie-react";
import { FiPhone, FiMail } from "react-icons/fi"; // React Icons imported here
import contactAnimation from "../../animations/contact";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    eventType: "",
    participants: "",
    preferredDate: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        eventType: "",
        participants: "",
        preferredDate: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <header className={styles["contact-header"]}>
        <div className={styles["header-content"]}>
          <div className={styles["header-text"]}>
            <h1>Contact Us</h1>
            <p>Got questions or want to book an event? Reach out now!</p>
          </div>
          <div className={styles["header-animation"]}>
            <Lottie animationData={contactAnimation} loop={true} />
          </div>
        </div>
      </header>

      <div className={styles["contact-content"]}>
        <div className={styles["contact-grid"]}>
          <div className={styles["contact-info"]}>
            <h2>Reach Out</h2>
            <p>We're here to help! Choose the most convenient way to contact us.</p>

            <div className={styles["contact-methods"]}>
              <div className={styles["contact-method"]}>
                <div className={styles["method-icon"]}>
                  <FiPhone size={28} />
                </div>
                <div className={styles["method-info"]}>
                  <h3>Phone</h3>
                  <p className={styles["method-details"]}>+1 (555) 123-4567</p>
                  <p className={styles["method-description"]}>
                    Call us for quick inquiries and direct support.
                  </p>
                </div>
              </div>

              <div className={styles["contact-method"]}>
                <div className={styles["method-icon"]}>
                  <FiMail size={28} />
                </div>
                <div className={styles["method-info"]}>
                  <h3>Email</h3>
                  <p className={styles["method-details"]}>events@example.com</p>
                  <p className={styles["method-description"]}>
                    Send us an email anytime, we check daily.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles["contact-features"]}>
              <h3>Why Contact Us?</h3>
              <ul>
                <li>Experienced event planners</li>
                <li>Personalized service</li>
                <li>Competitive pricing</li>
                <li>Quick response time</li>
              </ul>
            </div>
          </div>
          
          <div className={styles["contact-form-container"]}>
            <h2>Send a Message</h2>

            {submitStatus === "success" && (
              <div className={styles["success-message"]}>
                Your message has been sent successfully!
              </div>
            )}
            {submitStatus === "error" && (
              <div className={styles["error-message"]}>
                Oops! Something went wrong. Please try again later.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className={styles["form-row"]}>
                <div className={styles["form-group"]}>
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Your full name"
                  />
                </div>

                <div className={styles["form-group"]}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className={styles["form-row"]}>
                <div className={styles["form-group"]}>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Your company (optional)"
                  />
                </div>

                <div className={styles["form-group"]}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="+1 555 123 4567"
                  />
                </div>
              </div>

              <div className={styles["form-row"]}>
                <div className={styles["form-group"]}>
                  <label htmlFor="eventType">Event Type *</label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="conference">Conference</option>
                    <option value="party">Party</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles["form-group"]}>
                  <label htmlFor="participants">Participants *</label>
                  <input
                    type="number"
                    id="participants"
                    name="participants"
                    required
                    min="1"
                    value={formData.participants}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Number of participants"
                  />
                </div>
              </div>

              <div className={styles["form-row"]}>
                <div className={styles["form-group"]}>
                  <label htmlFor="preferredDate">Preferred Date</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles["form-group"]}>
                  <label htmlFor="budget">Budget (optional)</label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Your budget"
                  />
                </div>
              </div>

              <div className={`${styles["form-group"]} ${styles["message-group"]}`}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="Tell us more about your event..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles["submit-btn"]}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles["loading-spinner"]}></span> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
