import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  TrendingUp,
  Users,
  Target,
  Eye,
  Heart,
  MessageCircle,
} from "lucide-react";
import "./Portfolio.css";

const Portfolio = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Work" },
    { id: "social", label: "Social Media" },
    { id: "content", label: "Content Creation" },
    { id: "ads", label: "Paid Advertising" },
    { id: "strategy", label: "Strategy" },
  ];

  const projects = [
    {
      id: 1,
      category: "social",
      title: "TechStart Social Media Campaign",
      description:
        "Complete social media transformation for a tech startup, resulting in 300% follower growth.",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: { followers: "50K+", engagement: "8.5%", reach: "2M+" },
      platforms: [Instagram, Facebook, Twitter],
    },
    {
      id: 2,
      category: "content",
      title: "Fashion Brand Content Strategy",
      description:
        "Creative content creation and visual storytelling for a luxury fashion brand.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: { followers: "120K+", engagement: "12%", reach: "5M+" },
      platforms: [Instagram, Youtube],
    },
    {
      id: 3,
      category: "ads",
      title: "E-commerce Paid Campaign",
      description:
        "High-converting paid advertising campaign for an e-commerce store.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: { followers: "80K+", engagement: "15%", reach: "3M+" },
      platforms: [Facebook, Instagram],
    },
    // {
    //   id: 4,
    //   category: "strategy",
    //   title: "Restaurant Social Strategy",
    //   description:
    //     "Complete social media strategy and community management for a local restaurant chain.",
    //   image:
    //     "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    //   stats: { followers: "25K+", engagement: "18%", reach: "1M+" },
    //   platforms: [Instagram, Facebook],
    // },
    // {
    //   id: 5,
    //   category: "social",
    //   title: "Fitness Brand Campaign",
    //   description:
    //     "Motivational social media campaign for a fitness and wellness brand.",
    //   image:
    //     "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    //   stats: { followers: "90K+", engagement: "10%", reach: "4M+" },
    //   platforms: [Instagram, Youtube, Twitter],
    // },
    // {
    //   id: 6,
    //   category: "content",
    //   title: "Educational Content Series",
    //   description:
    //     "Educational content series for a professional development platform.",
    //   image:
    //     "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    //   stats: { followers: "60K+", engagement: "14%", reach: "2.5M+" },
    //   platforms: [Linkedin, Twitter, Youtube],
    // },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
      id="portfolio"
      className="portfolio-section"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="portfolio-container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="portfolio-header"
        >
          <motion.div variants={itemVariants} className="portfolio-badge">
            <span className="portfolio-badge-dot"></span>
            Our Portfolio
          </motion.div>

          <motion.h2 variants={itemVariants} className="portfolio-title">
            Success <span className="text-gradient-primary">Stories</span> &
            Case Studies
          </motion.h2>

          <motion.p variants={itemVariants} className="portfolio-subtitle">
            Discover how we've helped brands transform their social media
            presence and achieve remarkable growth through strategic campaigns.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="portfolio-filters"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`portfolio-filter-button ${
                activeFilter === filter.id ? "active" : ""
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="portfolio-grid"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="portfolio-card"
            >
              <div className="portfolio-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-image"
                />
                <div className="portfolio-overlay">
                  <div className="portfolio-overlay-content">
                    <div className="portfolio-platforms">
                      {project.platforms.map((Platform, index) => (
                        <Platform
                          key={index}
                          className="portfolio-platform-icon"
                          size={20}
                        />
                      ))}
                    </div>
                    <div className="portfolio-stats">
                      <div className="portfolio-stat">
                        <span className="portfolio-stat-value">
                          {project.stats.followers}
                        </span>
                        <span className="portfolio-stat-label">Followers</span>
                      </div>
                      <div className="portfolio-stat">
                        <span className="portfolio-stat-value">
                          {project.stats.engagement}
                        </span>
                        <span className="portfolio-stat-label">Engagement</span>
                      </div>
                      <div className="portfolio-stat">
                        <span className="portfolio-stat-value">
                          {project.stats.reach}
                        </span>
                        <span className="portfolio-stat-label">Reach</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="portfolio-cta"
        >
          {/* <motion.div variants={itemVariants} className="portfolio-cta-content">
            <h3 className="portfolio-cta-title">
              Ready to See Your Success Story?
            </h3>
            <p className="portfolio-cta-subtitle">
              Let's create a social media strategy that delivers real results
              for your brand.
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
              Start Your Project
            </motion.button>
          </motion.div> */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
