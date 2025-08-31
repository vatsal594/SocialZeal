import React, { useState, useEffect } from "react";
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
  Star,
  ChevronDown,
} from "lucide-react";
import "./Hero.css";

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isPlaying, setIsPlaying] = useState(false);

  const stats = [
    {
      icon: TrendingUp,
      value: "500+",
      label: "Shoots & Edits",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      value: "100%",
      label: "Success Rate",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const handleWatchDemo = () => {
    setIsPlaying(true);
    // In a real implementation, this would open a modal with a video
    setTimeout(() => setIsPlaying(false), 3000);
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById("services");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        
        {/* Particle Effects */}
        <div className="particles">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
              }}
            />
          ))}
        </div>
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
              <span>Leading Social Media Agency</span>
              <motion.div 
                className="badge-highlight"
                animate={{ x: [-10, 100, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
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
                className="btn btn-primary hero-cta-btn"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                <span>Start Your Journey</span>
                <ArrowRight className="btn-icon" />
                <div className="btn-shine"></div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary hero-cta-btn"
                onClick={handleWatchDemo}
                disabled={isPlaying}
              >
                {isPlaying ? (
                  <div className="loading-spinner"></div>
                ) : (
                  <>
                    <Play className="btn-icon" />
                    <span>Watch Demo</span>
                  </>
                )}
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
                    <motion.div 
                      key={i} 
                      className="hero-avatar"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    ></motion.div>
                  ))}
                </div>
                <span className="hero-trust-text">Trusted by 200+ brands</span>
              </div>
              
              <div className="hero-reviews">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span>4.9/5 from 200+ reviews</span>
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
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
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
              whileHover={{ y: -5 }}
            >
              <div className="hero-featured-header">
                <div className="hero-featured-avatar">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="Sarah Johnson" 
                  />
                </div>
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
                  <Zap size={16} className="stat-icon" />
                  <span className="hero-featured-stat-value">+300%</span>
                  <span className="hero-featured-stat-label">Engagement</span>
                </div>
                <div className="hero-featured-stat">
                  <Users size={16} className="stat-icon" />
                  <span className="hero-featured-stat-value">+500%</span>
                  <span className="hero-featured-stat-label">Followers</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToNext}
        >
          <span>Scroll Down</span>
          <div className="hero-scroll-button">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="hero-scroll-dot"
            />
          </div>
          <ChevronDown size={20} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;