import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  Play,
  TrendingUp,
  Users,
  Target,
  Sparkles,
  Zap,
} from "lucide-react";
import "./Hero.css";

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    {
      icon: TrendingUp,
      value: "500+",
      label: "Campaigns",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      value: "200+",
      label: "Happy Clients",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      value: "95%",
      label: "Success Rate",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <motion.section
      id="home"
      className="hero-section"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated Background Elements */}
      <div className="hero-background">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-blob hero-blob-3"></div>

        {/* Grid Pattern */}
        <div className="hero-grid"></div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="hero-floating-element hero-floating-1"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="hero-floating-element hero-floating-2"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="hero-floating-element hero-floating-3"
        ></motion.div>
      </div>

      <div className="container hero-content">
        <div className="hero-grid-layout">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hero-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-badge"
            >
              <Sparkles className="hero-badge-icon" />
              Leading Social Media Agency
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hero-title"
            >
              Transform Your{" "}
              <span className="text-gradient-primary">Social Media</span>{" "}
              Presence
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hero-subtitle"
            >
              We help brands grow their online presence with strategic social
              media management, engaging content creation, and data-driven
              digital marketing solutions that deliver real results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="hero-buttons"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary text-lg px-10 py-5 animate-pulse-glow"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Start Your Journey
                <ArrowRight className="ml-3" size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary text-lg px-10 py-5"
              >
                <Play className="mr-3" size={20} />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="hero-trust-indicators"
            >
              <div className="hero-avatars">
                <div className="hero-avatar-group">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="hero-avatar"></div>
                  ))}
                </div>
                <span className="hero-trust-text">Trusted by 200+ brands</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-right"
          >
            {/* Stats Grid */}
            <div className="hero-stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="hero-stat-card"
                >
                  <div className="hero-stat-icon">
                    <div
                      className={`hero-stat-icon-bg bg-gradient-to-r ${stat.color}`}
                    >
                      <stat.icon className="text-white" size={28} />
                    </div>
                  </div>
                  <div className="hero-stat-value">{stat.value}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Featured Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="hero-featured-card"
            >
              <div className="hero-featured-header">
                <div className="hero-featured-avatar"></div>
                <div className="hero-featured-info">
                  <div className="hero-featured-name">Sarah Johnson</div>
                  <div className="hero-featured-role">Marketing Director</div>
                </div>
                <div className="hero-featured-rating">
                  <span className="hero-featured-stars">★★★★★</span>
                </div>
              </div>
              <p className="hero-featured-text">
                "SocialZeal transformed our social media presence completely. We
                saw a 300% increase in engagement!"
              </p>
              <div className="hero-featured-stats">
                <div className="hero-featured-stat">
                  <span className="hero-featured-stat-value">+300%</span>
                  <span className="hero-featured-stat-label">Engagement</span>
                </div>
                <div className="hero-featured-stat">
                  <span className="hero-featured-stat-value">+500%</span>
                  <span className="hero-featured-stat-label">Followers</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
