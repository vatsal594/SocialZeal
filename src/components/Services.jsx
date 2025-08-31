import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import socialAnim from "../assets/lottie/social-media.json";
import contentAnim from "../assets/lottie/content-creation.json";
import analyticsAnim from "../assets/lottie/analytics.json";
import adsAnim from "../assets/lottie/ads.json";
import communityAnim from "../assets/lottie/community.json";
import strategyAnim from "../assets/lottie/strategy.json";
import "./Services.css";

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: (
        <Lottie animationData={socialAnim} loop={true} style={{ height: 48 }} />
      ),
      title: "Social Media Management",
      description:
        "Complete management of your social media presence across all platforms with strategic content planning and community engagement.",
      features: [
        "Content Strategy",
        "Community Management",
        "Analytics & Reporting",
        "Crisis Management",
      ],
      color: "from-pink-500 to-purple-500",
      gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    },
    {
      icon: (
        <Lottie
          animationData={contentAnim}
          loop={true}
          style={{ height: 48 }}
        />
      ),
      title: "Content Creation",
      description:
        "Professional content creation including graphics, videos, and copywriting that resonates with your target audience.",
      features: [
        "Visual Design",
        "Video Production",
        "Copywriting",
        "Brand Consistency",
      ],
      color: "from-blue-500 to-cyan-500",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    },
    {
      icon: (
        <Lottie
          animationData={analyticsAnim}
          loop={true}
          style={{ height: 48 }}
        />
      ),
      title: "Analytics & Reporting",
      description:
        "Data-driven insights and comprehensive reporting to track your social media performance and ROI.",
      features: [
        "Performance Tracking",
        "ROI Analysis",
        "Competitor Analysis",
        "Custom Reports",
      ],
      color: "from-green-500 to-emerald-500",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    },

    {
      icon: (
        <Lottie
          animationData={strategyAnim}
          loop={true}
          style={{ height: 48 }}
        />
      ),
      title: "Social Media Strategy",
      description:
        "Comprehensive social media strategy development aligned with your business goals and target audience.",
      features: [
        "Audience Research",
        "Platform Strategy",
        "Content Calendar",
        "Growth Planning",
      ],
      color: "from-yellow-500 to-orange-500",
      gradient: "linear-gradient(135deg, #eab308 0%, #f97316 100%)",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      y: -15,
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="services"
      className="services-section"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="services-container">
        {/* Floating Background Elements */}
        <div className="services-floating-elements">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="services-floating-element"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                width: `${20 + Math.random() * 30}px`,
                height: `${20 + Math.random() * 30}px`,
              }}
            ></div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="services-header"
        >
          <motion.div variants={itemVariants} className="services-badge">
            <span className="services-badge-dot"></span>
            Our Services
          </motion.div>

          <motion.h2 variants={itemVariants} className="services-title">
            Comprehensive{" "}
            <span className="text-gradient-primary">Social Media</span>{" "}
            Solutions
          </motion.h2>

          <motion.p variants={itemVariants} className="services-subtitle">
            From strategy to execution, we provide end-to-end social media
            services that drive real results for your business.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="services-grid"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover="hover"
              className="service-card"
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
              style={{
                background:
                  activeService === index
                    ? `linear-gradient(135deg, rgba(30, 30, 40, 0.8) 0%, rgba(40, 40, 60, 0.9) 100%), ${service.gradient}`
                    : "rgba(30, 30, 40, 0.55)",
              }}
            >
              <div className="service-card-inner">
                <div
                  className={`service-icon bg-gradient-to-r ${service.color}`}
                >
                  {service.icon}
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <div className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="service-feature"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * featureIndex }}
                    >
                      <div className="service-feature-dot"></div>
                      <span className="service-feature-text">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="service-button"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  style={{
                    background:
                      activeService === index
                        ? service.gradient
                        : "transparent",
                    borderColor:
                      activeService === index ? "transparent" : "#667eea",
                  }}
                >
                  Learn More
                  <svg
                    className="service-button-arrow"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="services-stats"
        >
          <div className="services-stats-grid">
            {[
              { number: "500+", label: "Campaigns Managed" },
              { number: "200+", label: "Happy Clients" },
              { number: "95%", label: "Success Rate" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="services-stat"
                whileHover={{ scale: 1.05 }}
              >
                <div className="services-stat-number">{stat.number}</div>
                <div className="services-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
