import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Users,
  Target,
  Heart,
  CheckCircle,
  TrendingUp,
  Zap,
  Star,
  Rocket,
  Globe,
  Sparkles,
} from "lucide-react";
import "./About.css";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "We're passionate about helping brands succeed in the digital world.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Results",
      description:
        "We focus on delivering measurable results that drive business growth.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We work closely with our clients to ensure their vision becomes reality.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We stay ahead of trends to provide cutting-edge social media solutions.",
      color: "from-yellow-500 to-amber-500",
    },
  ];

  const stats = [
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "500+", label: "Successful Campaigns", icon: Rocket },
    { number: "95%", label: "Client Retention", icon: TrendingUp },
  ];

  const teamStats = [
    { number: "15+", label: "Experts Onboard" },
    { number: "500+", label: "Projects Delivered" },
    { number: "24/7", label: "Support Available" },
    { number: "100%", label: "Happy Clients" },
  ];

  const features = [
    "Strategic social media planning and execution",
    "Creative content creation and design",
    "Community management and engagement",
    "Analytics and performance reporting",
    "Influencer partnership programs",
    "Social media advertising campaigns",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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
        ease: "easeOut",
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
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="about"
      className="about-section"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Elements */}
      <div className="background-elements">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="about-container">
        <motion.div
          className="about-header"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="section-badge">
            <Sparkles size={16} />
            <span>About SocialZeal</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="section-title">
            We Transform Your <span className="text-gradient">Social Presence</span> Into 
            Meaningful Connections
          </motion.h2>

          <motion.p variants={itemVariants} className="section-description">
            Founded in 2019, SocialZeal has been at the forefront of digital marketing 
            innovation. We combine creativity with data-driven strategies to help brands 
            build meaningful connections with their audiences across all social platforms.
          </motion.p>
        </motion.div>

        <div className="about-content">
          {/* Left Column - Stats & Features */}
          <motion.div 
            className="about-left"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  variants={cardVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="stat-icon">
                    <stat.icon size={24} />
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="features-list">
              <h3 className="features-title">Our Services</h3>
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="feature-item"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CheckCircle className="feature-icon" size={20} />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Values & Team */}
          <motion.div 
            className="about-right"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="values-grid">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className={`value-card ${value.color}`}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8, 
                    transition: { duration: 0.3 } 
                  }}
                >
                  <div className="value-icon-wrapper">
                    <value.icon className="value-icon" size={24} />
                  </div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="team-card">
              <div className="team-header">
                <div className="team-icon">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="team-title">Our Expert Team</h3>
                  <p className="team-subtitle">Dedicated to your success</p>
                </div>
              </div>
              <p className="team-description">
                Our diverse team of social media experts, creative designers, and 
                strategic thinkers work together to deliver exceptional results for our clients.
              </p>
              
              <div className="team-stats">
                {teamStats.map((stat, index) => (
                  <div key={index} className="team-stat">
                    <div className="team-stat-number">{stat.number}</div>
                    <div className="team-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;