import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award,
  Users,
  Target,
  Heart,
  CheckCircle,
  TrendingUp,
  Zap,
  Star,
} from "lucide-react";
import "./About.css";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "We're passionate about helping brands succeed in the digital world.",
    },
    {
      icon: Target,
      title: "Results",
      description:
        "We focus on delivering measurable results that drive business growth.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We work closely with our clients to ensure their vision becomes reality.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We stay ahead of trends to provide cutting-edge social media solutions.",
    },
  ];

  const achievements = [
    { number: "5+", label: "Years Experience" },
    { number: "200+", label: "Happy Clients" },
    { number: "500+", label: "Successful Campaigns" },
    { number: "95%", label: "Client Retention" },
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
      id="about"
      className="about-section"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="about-container">
        <div className="about-grid">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="about-left"
          >
            <motion.div variants={itemVariants} className="about-badge">
              <span className="about-badge-dot"></span>
              About SocialZeal
            </motion.div>

            <motion.h2 variants={itemVariants} className="about-title">
              We're a{" "}
              <span className="text-gradient-primary">Creative Team</span> of
              Social Media Experts
            </motion.h2>

            <motion.p variants={itemVariants} className="about-description">
              Founded in 2019, SocialZeal has been at the forefront of digital
              marketing innovation. We combine creativity with data-driven
              strategies to help brands build meaningful connections with their
              audiences across all social media platforms.
            </motion.p>

            <motion.div variants={itemVariants} className="about-features">
              {[
                "Strategic social media planning and execution",
                "Creative content creation and design",
                "Community management and engagement",
                "Paid advertising and campaign optimization",
                "Analytics and performance reporting",
              ].map((feature, index) => (
                <div key={index} className="about-feature">
                  <CheckCircle className="about-feature-icon" size={20} />
                  <span className="about-feature-text">{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="about-achievements">
              {achievements.map((achievement, index) => (
                <div key={index} className="about-achievement">
                  <div className="about-achievement-number">
                    {achievement.number}
                  </div>
                  <div className="about-achievement-label">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="about-right"
          >
            <div className="about-right-content">
              {/* Mission Statement */}
              <motion.div variants={itemVariants} className="about-mission">
                <div className="about-mission-header">
                  <div className="about-mission-icon">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="about-mission-title">Our Mission</h3>
                </div>
                <p className="about-mission-text">
                  To empower businesses with innovative social media strategies
                  that drive real growth, meaningful engagement, and lasting
                  brand relationships in the digital age.
                </p>
              </motion.div>

              {/* Values Grid */}
              <div className="about-values-grid">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    variants={itemVariants}
                    className="about-value-card"
                  >
                    <div className="about-value-icon">
                      <value.icon className="text-white" size={24} />
                    </div>
                    <h4 className="about-value-title">{value.title}</h4>
                    <p className="about-value-description">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Team Highlight */}
              <motion.div
                variants={itemVariants}
                className="about-team-highlight"
              >
                <div className="about-team-header">
                  <div className="about-team-icon">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="about-team-title">Our Team</h3>
                </div>
                <p className="about-team-text">
                  Our diverse team of social media experts, creative designers,
                  and strategic thinkers work together to deliver exceptional
                  results for our clients.
                </p>
                <div className="about-team-stats">
                  {[
                    { number: "15+", label: "Team Members" },
                    { number: "50+", label: "Industries Served" },
                    { number: "24/7", label: "Support Available" },
                    { number: "100%", label: "Client Focus" },
                  ].map((stat, index) => (
                    <div key={index} className="about-team-stat">
                      <div className="about-team-stat-number">
                        {stat.number}
                      </div>
                      <div className="about-team-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
