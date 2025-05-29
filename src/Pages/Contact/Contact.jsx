import { useState, useEffect, useCallback } from "react";
import Lottie from "lottie-react";
import { FiPhone, FiMail } from "react-icons/fi";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
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

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});

  const validateForm = useCallback((data = formData) => {
    const errors = {};
    if (!data.name.trim()) errors.name = "Name is required";
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    if (!data.eventType) errors.eventType = "Event type is required";
    if (!data.participants || parseInt(data.participants) <= 0)
      errors.participants = "Enter a valid number";
    if (!data.message.trim()) errors.message = "Message is required";

    setFormErrors(errors);
    return errors;
  }, [formData]);

  useEffect(() => {
    if (isSubmitted || Object.keys(touchedFields).length > 0) {
      validateForm();
    }
  }, [formData, touchedFields, isSubmitted, validateForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      Swal.fire({
        title: "Incomplete Form",
        text: "Please fill in all required fields correctly.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceId = 'service_cyju9p8';
      const templateId = 'template_eb1p24i';
      const userId = 'UKAMQ8pRiXS1qfQSf';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          phone: formData.phone,
          event_type: formData.eventType,
          participants: formData.participants,
          preferred_date: formData.preferredDate,
          budget: formData.budget,
          message: formData.message,
        },
        userId
      );

      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
      });

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
      setTouchedFields({});
      setIsSubmitted(false);
    } catch (error) {
      console.error("Error sending email:", error);

      Swal.fire({
        title: 'Error!',
        text: 'Oops! Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const shouldShowError = (fieldName) => {
    return (isSubmitted || touchedFields[fieldName]) && formErrors[fieldName];
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

            <form onSubmit={handleSubmit} noValidate>
              <div className={styles["form-row"]}>
                <div className={styles["form-group"]}>
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    placeholder="Your full name"
                    className={shouldShowError('name') ? styles['input-error'] : ''}
                  />
                  {shouldShowError('name') && (
                    <div className={styles["field-error"]}>{formErrors.name}</div>
                  )}
                </div>

                <div className={styles["form-group"]}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    placeholder="you@example.com"
                    className={shouldShowError('email') ? styles['input-error'] : ''}
                  />
                  {shouldShowError('email') && (
                    <div className={styles["field-error"]}>{formErrors.email}</div>
                  )}
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
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                    value={formData.eventType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    className={shouldShowError('eventType') ? styles['input-error'] : ''}
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="conference">Conference</option>
                    <option value="party">Party</option>
                    <option value="other">Other</option>
                  </select>
                  {shouldShowError('eventType') && (
                    <div className={styles["field-error"]}>{formErrors.eventType}</div>
                  )}
                </div>

                <div className={styles["form-group"]}>
                  <label htmlFor="participants">Participants *</label>
                  <input
                    type="number"
                    id="participants"
                    name="participants"
                    min="1"
                    value={formData.participants}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    placeholder="Number of participants"
                    className={shouldShowError('participants') ? styles['input-error'] : ''}
                  />
                  {shouldShowError('participants') && (
                    <div className={styles["field-error"]}>{formErrors.participants}</div>
                  )}
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
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  placeholder="Tell us more about your event..."
                  className={shouldShowError('message') ? styles['input-error'] : ''}
                />
                {shouldShowError('message') && (
                  <div className={styles["field-error"]}>{formErrors.message}</div>
                )}
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

