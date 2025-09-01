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
import google from "../assets/google.png";
import instagram from "../assets/instagram.png";
import spotify from "../assets/spotify.png";
import youtube from "../assets/youtube.png";

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

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

        {/* Floating Elements - Reduced on mobile for performance */}
        {!isMobile && (
          <>
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
          </>
        )}

        {/* Particle Effects - Reduced on mobile for performance */}
        <div className="particles">
          {[...Array(isMobile ? 15 : 30)].map((_, i) => (
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
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hero-main-content"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-premium-badge"
            >
              <Sparkles size={16} />
              <span>Premium Social Media Solutions</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hero-title"
            >
              Elevate Your <span className="text-gradient-primary">Brand</span>{" "}
              with Strategic Social Media Excellence
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hero-subtitle"
            >
              We craft data-driven social media strategies that drive
              engagement, increase followers, and convert audiences into loyal
              customers. Experience the transformation with our premium
              services.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="hero-buttons"
            >
              <motion.button
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
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
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
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

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="hero-stats-section"
            >
              <div className="hero-stats-grid">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="hero-stat-card"
                    whileHover={{
                      y: isMobile ? 0 : -5,
                      transition: { duration: 0.2 },
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
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="hero-trust-indicators"
            >
              <div className="hero-avatars">
                <div className="hero-avatar-group">
                  {[google, instagram, spotify, youtube].map((logo, i) => (
                    <motion.div
                      key={i}
                      className="hero-avatar"
                      whileHover={{ scale: isMobile ? 1 : 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <img
                        src={logo}
                        alt={`brand-${i}`}
                        className="brand-logo"
                      />
                    </motion.div>
                  ))}
                </div>
                <span className="hero-trust-text">Trusted by 200+ brands</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
