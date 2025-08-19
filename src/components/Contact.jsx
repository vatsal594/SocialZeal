import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Calendar,
  Loader2,
} from "lucide-react";
import "./Contact.css";
import LoadingSpinner from "./LoadingSpinner";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setIsLoading(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });

    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@socialzeal.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Digital Street, Tech City",
      description: "Schedule a meeting at our office",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 24 hours",
      description: "We respond to all inquiries quickly",
    },
  ];

  const services = [
    "Social Media Management",
    "Content Creation",
    "Paid Advertising",
    "Analytics & Reporting",
    "Community Management",
    "Strategy Consulting",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="contact-container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="contact-header"
        >
          <motion.div variants={itemVariants} className="contact-badge">
            <span className="contact-badge-dot"></span>
            Get In Touch
          </motion.div>

          <motion.h2 variants={itemVariants} className="contact-title">
            Ready to <span className="text-gradient-primary">Transform</span>{" "}
            Your Social Media?
          </motion.h2>

          <motion.p variants={itemVariants} className="contact-subtitle">
            Let's discuss how we can help you achieve your social media goals.
            Get in touch with us for a free consultation and custom strategy.
          </motion.p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="contact-form-container"
            >
              <h3 className="contact-form-title">Send us a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="contact-success"
                >
                  <CheckCircle className="contact-success-icon" size={48} />
                  <h4 className="contact-success-title">
                    Message Sent Successfully!
                  </h4>
                  <p className="contact-success-message">
                    Thank you for reaching out. We'll get back to you within 24
                    hours with a personalized response.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-grid">
                    <div className="contact-form-group">
                      <label className="contact-form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="contact-form-input"
                        placeholder="Your full name"
                        disabled={isLoading}
                      />
                    </div>

                    <div className="contact-form-group">
                      <label className="contact-form-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="contact-form-input"
                        placeholder="your.email@example.com"
                        disabled={isLoading}
                      />
                    </div>

                    <div className="contact-form-group">
                      <label className="contact-form-label">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="contact-form-input"
                        placeholder="Your company name"
                        disabled={isLoading}
                      />
                    </div>

                    <div className="contact-form-group">
                      <label className="contact-form-label">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="contact-form-input"
                        disabled={isLoading}
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="contact-form-group contact-form-group-full">
                      <label className="contact-form-label">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="contact-form-input contact-form-textarea"
                        placeholder="Tell us about your project and goals..."
                        rows={5}
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="contact-form-submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? (
                      <LoadingSpinner
                        size="small"
                        color="white"
                        text="Sending..."
                      />
                    ) : (
                      <>
                        <Send className="contact-form-submit-icon" size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="contact-info"
          >
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  className="contact-info-card"
                >
                  <div className="contact-info-icon">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div className="contact-info-content">
                    <h4 className="contact-info-title">{info.title}</h4>
                    <p className="contact-info-details">{info.details}</p>
                    <p className="contact-info-description">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="contact-cta"
        >
          <div className="contact-cta-content">
            <motion.h3 variants={itemVariants} className="contact-cta-title">
              Ready to Start Your Success Story?
            </motion.h3>

            <motion.p variants={itemVariants} className="contact-cta-subtitle">
              Let's work together to create a social media strategy that drives
              real results and helps your brand stand out in the digital
              landscape.
            </motion.p>

            <motion.div variants={itemVariants} className="contact-cta-buttons">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="contact-cta-primary pulse-cta"
                onClick={() =>
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                <Calendar size={20} />
                Schedule Consultation
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="contact-cta-secondary"
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                <MessageCircle size={20} />
                View Our Work
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
