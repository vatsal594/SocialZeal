import React from "react";
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
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

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
    },
    {
      icon: (
        <Lottie animationData={adsAnim} loop={true} style={{ height: 48 }} />
      ),
      title: "Paid Advertising",
      description:
        "Strategic paid social media campaigns to boost your reach, engagement, and conversions.",
      features: [
        "Campaign Strategy",
        "Ad Creative",
        "Budget Management",
        "A/B Testing",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: (
        <Lottie
          animationData={communityAnim}
          loop={true}
          style={{ height: 48 }}
        />
      ),
      title: "Community Management",
      description:
        "Building and nurturing your online community through authentic engagement and relationship building.",
      features: [
        "Comment Management",
        "Influencer Outreach",
        "Brand Advocacy",
        "Crisis Communication",
      ],
      color: "from-purple-500 to-pink-500",
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
    },
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
      id="services"
      className="services-section"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="services-container">
        <motion.div
          initial="hidden"
          animate="visible"
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
          animate="visible"
          variants={containerVariants}
          className="services-grid"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="service-card"
            >
              <div className={`service-icon bg-gradient-to-r ${service.color}`}>
                {service.icon}
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="service-feature">
                    <div className="service-feature-dot"></div>
                    <span className="service-feature-text">{feature}</span>
                  </div>
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
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          animate="visible"
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
              >
                <div className="services-stat-number">{stat.number}</div>
                <div className="services-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="services-cta"
        >
          <motion.div variants={itemVariants} className="services-cta-content">
            <h3 className="services-cta-title">
              Ready to Transform Your Social Media?
            </h3>
            <p className="services-cta-subtitle">
              Let's discuss how we can help you achieve your social media goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
