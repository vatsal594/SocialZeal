import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Users,
  Target,
  BarChart3,
  Brain,
  Megaphone,
  Palette,
  Sparkles,
  ChevronRight,
  Loader2,
  TrendingUp,
  MessageCircle,
  Calendar,
} from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);

  // Initialize EmailJS (replace with your actual credentials)
  const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
  const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
  const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setFormData((prev) => ({ ...prev, service }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      console.log("Form submitted:", formData);
      setIsSubmitted(true);

      // Optional: Save to Google Sheets or Airtable here
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const generateWhatsAppMessage = () => {
    const { name, service, budget } = formData;
    return `Hi! My name is ${name}. I'm interested in ${service} with a budget of ${
      budget || "not specified"
    }.`;
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi, I want to discuss my project!");
    window.open(`https://wa.me/919637496522?text=${message}`, "_blank");
  };

  const scheduleCall = () => {
    // Replace with your actual Calendly link
    window.open("https://calendly.com/your-username", "_blank");
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setSelectedService(null);
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@socialzeal.com",
      description: "Send us an email anytime",
      action: "mailto:hello@socialzeal.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 9637496522",
      description: "Mon-Fri from 9am to 6pm",
      action: "tel:+15551234567",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 24 hours",
      description: "We respond to all inquiries quickly",
      action: "#",
    },
  ];

  const services = [
    {
      name: "Social Media",
      icon: Megaphone,
      description: "End-to-end management of your social media presence",
    },
    {
      name: "Content Creation",
      icon: Palette,
      description: "High-quality posts, graphics, and creative brand content",
    },
    {
      name: "Video Editing",
      icon: BarChart3,
      description: "Professional editing for ads, reels, and brand videos",
    },
    {
      name: "Analytics & Reporting",
      icon: TrendingUp,
      description: "Data-driven insights to track and optimize performance",
    },
    {
      name: "Brand Strategy",
      icon: Sparkles,
      description: "Comprehensive strategy to strengthen brand identity",
    },
    {
      name: "Other's",
      icon: Target,
      description: "Custom solutions tailored to your unique business needs",
    },
  ];

  const budgets = [
    "₹1,000 - ₹5,000  ($12 - $60)",
    "₹5,000 - ₹10,000  ($60 - $120)",
    "₹10,000 - ₹25,000  ($120 - $300)",
    "₹25,000 - ₹50,000  ($300 - $600)",
    "₹50,000+  ($600+)",
  ];

  const timelines = [
    "Immediately",
    "Within 2 weeks",
    "Within 1 month",
    "Within 3 months",
    "Just exploring",
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
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="contact-container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="contact-header"
        >
          <motion.div variants={itemVariants} className="contact-badge">
            <Sparkles size={14} />
            Get In Touch
          </motion.div>

          <motion.h2 variants={itemVariants} className="contact-title">
            Ready to <span className="text-gradient-primary">Elevate</span> Your
            Digital Presence?
          </motion.h2>

          <motion.p variants={itemVariants} className="contact-subtitle">
            Let's craft something extraordinary together. Tell us about your
            project and we'll create a custom strategy.
          </motion.p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="form-column"
          >
            <motion.div
              variants={itemVariants}
              className="contact-form-container"
            >
              <div className="form-progress">
                <div className="progress-steps">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`progress-step ${
                        currentStep >= step ? "active" : ""
                      }`}
                    >
                      <div className="step-number">{step}</div>
                      <div className="step-label">
                        {step === 1 && "Service"}
                        {step === 2 && "Details"}
                        {step === 3 && "Message"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="contact-form-title">
                {currentStep === 1 && "What service are you interested in?"}
                {currentStep === 2 && "Tell us about your project"}
                {currentStep === 3 && "Almost done!"}
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="contact-success"
                >
                  <div className="success-animation">
                    <CheckCircle className="contact-success-icon" size={48} />
                  </div>
                  <h4 className="contact-success-title">
                    Message Sent Successfully!
                  </h4>
                  <p className="contact-success-message">
                    Thank you for reaching out. We'll contact you within 24
                    hours.
                  </p>

                  <div className="success-actions">
                    <motion.button
                      onClick={openWhatsApp}
                      className="whatsapp-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle size={18} />
                      Message on WhatsApp
                    </motion.button>

                    <motion.button
                      onClick={scheduleCall}
                      className="calendly-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Calendar size={18} />
                      Schedule a Call
                    </motion.button>

                    <button onClick={resetForm} className="back-to-form">
                      Back to Form
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="contact-form"
                  ref={formRef}
                >
                  {/* Step 1: Service Selection */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="form-step"
                    >
                      <div className="service-grid">
                        {services.map((service) => (
                          <motion.div
                            key={service.name}
                            className={`service-card ${
                              selectedService === service.name ? "selected" : ""
                            }`}
                            onClick={() => handleServiceSelect(service.name)}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="service-icon">
                              <service.icon size={20} />
                            </div>
                            <h4>{service.name}</h4>
                            <p>{service.description}</p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="form-navigation">
                        <motion.button
                          type="button"
                          onClick={nextStep}
                          disabled={!selectedService}
                          className="next-button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Continue
                          <ChevronRight size={18} />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Project Details */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="form-step"
                    >
                      <div className="contact-form-grid">
                        <div className="contact-form-group">
                          <label className="contact-form-label">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="contact-form-input"
                            placeholder="Your full name"
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
                          />
                        </div>

                        <div className="contact-form-group">
                          <label className="contact-form-label">
                            Company / Brand
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="contact-form-input"
                            placeholder="Your company name"
                          />
                        </div>

                        <div className="contact-form-group">
                          <label className="contact-form-label">
                            Project Budget
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="contact-form-input"
                          >
                            <option value="">Select budget range</option>
                            {budgets.map((budget) => (
                              <option key={budget} value={budget}>
                                {budget}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="contact-form-group contact-form-group-full">
                          <label className="contact-form-label">Timeline</label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="contact-form-input"
                          >
                            <option value="">When do you want to start?</option>
                            {timelines.map((timeline) => (
                              <option key={timeline} value={timeline}>
                                {timeline}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="form-navigation">
                        <motion.button
                          type="button"
                          onClick={prevStep}
                          className="prev-button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Back
                        </motion.button>
                        <motion.button
                          type="button"
                          onClick={nextStep}
                          disabled={!formData.name || !formData.email}
                          className="next-button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Continue
                          <ChevronRight size={18} />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Message */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="form-step"
                    >
                      <div className="contact-form-group contact-form-group-full">
                        <label className="contact-form-label">
                          Tell us about your project *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="contact-form-input contact-form-textarea"
                          placeholder="What are your goals, challenges, and expectations?..."
                          rows={4}
                        />
                      </div>

                      <div className="form-navigation">
                        <motion.button
                          type="button"
                          onClick={prevStep}
                          className="prev-button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Back
                        </motion.button>
                        <motion.button
                          type="submit"
                          disabled={isLoading || !formData.message}
                          className="contact-form-submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="animate-spin" size={18} />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={18} />
                              Send Message
                            </>
                          )}
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </form>
              )}
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="info-column"
          >
            <div className="contact-info">
              <motion.h3 variants={itemVariants} className="info-title">
                Why work with us?
              </motion.h3>

              <motion.div variants={itemVariants} className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">
                    <Target size={18} />
                  </div>
                  <div className="feature-content">
                    <h4>Result-Driven</h4>
                    <p>Focus on metrics that matter to your business</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <Users size={18} />
                  </div>
                  <div className="feature-content">
                    <h4>Dedicated Team</h4>
                    <p>Specialized team focused on your success</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <BarChart3 size={18} />
                  </div>
                  <div className="feature-content">
                    <h4>Transparent Reporting</h4>
                    <p>Regular insights into campaign performance</p>
                  </div>
                </div>
              </motion.div>

              <motion.hr variants={itemVariants} className="divider" />

              <motion.h3 variants={itemVariants} className="info-title">
                Get in touch
              </motion.h3>

              <motion.div variants={itemVariants} className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.action}
                    variants={itemVariants}
                    className="contact-info-card"
                    whileHover={{ y: -3 }}
                  >
                    <div className="contact-info-icon">
                      <info.icon size={18} />
                    </div>
                    <div className="contact-info-content">
                      <h4 className="contact-info-title">{info.title}</h4>
                      <p className="contact-info-details">{info.details}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* WhatsApp Quick Contact */}
              {/* WhatsApp Quick Contact - Enhanced Styling */}
              <motion.div
                variants={itemVariants}
                className="whatsapp-quick-container"
              >
                <div className="whatsapp-header">
                  <div className="whatsapp-icon-wrapper">
                    <MessageCircle size={20} />
                  </div>
                  <h4>Quick WhatsApp Chat</h4>
                </div>

                <p className="whatsapp-description">
                  Prefer instant messaging? Chat with us directly on WhatsApp
                  for faster responses.
                </p>

                <motion.button
                  onClick={openWhatsApp}
                  className="whatsapp-button-enhanced"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle size={18} />
                  Start Chat on WhatsApp
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
