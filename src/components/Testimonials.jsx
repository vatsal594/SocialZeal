import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Star,
  Quote,
  Award,
  TrendingUp,
  Users,
  Heart,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Zap,
} from "lucide-react";
import "./Testimonials.css";

import googleLogo from "../assets/google.png";
import instagramLogo from "../assets/instagram.png";
import youtubeLogo from "../assets/youtube.png";
import spotifyLogo from "../assets/spotify.png";

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      company: "TechStart Inc.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      text: "SocialZeal transformed our social media presence completely. We saw a 300% increase in followers and 5x more engagement. Their strategic approach and creative content have been game-changing for our brand.",
      stats: { followers: "+300%", engagement: "+500%", reach: "+400%" },
      highlight: "300% follower growth in 3 months",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director",
      company: "Fashion Forward",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      text: "The team at SocialZeal is incredibly professional and creative. They understood our brand perfectly and delivered results that exceeded our expectations. Our social media ROI has never been better.",
      stats: { followers: "+250%", engagement: "+350%", reach: "+300%" },
      highlight: "2.5X ROI on social media spend",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder",
      company: "FitLife Wellness",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      text: "Working with SocialZeal has been an absolute pleasure. Their content creation is top-notch and their community management skills are exceptional. We've built a loyal following that truly engages with our brand.",
      stats: { followers: "+400%", engagement: "+600%", reach: "+450%" },
      highlight: "400% follower growth with 60% engagement rate",
    },
    {
      id: 4,
      name: "David Kim",
      position: "Brand Manager",
      company: "Urban Eats",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      text: "The results speak for themselves. SocialZeal helped us increase our social media conversion rate by 200% while reducing our ad spend. Their data-driven approach is truly impressive.",
      stats: { followers: "+350%", engagement: "+450%", reach: "+380%" },
      highlight: "200% higher conversion rate with lower ad spend",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      color: "blue",
    },
    {
      icon: Award,
      value: "95%",
      label: "Client Retention",
      color: "purple",
    },
    {
      icon: TrendingUp,
      value: "300%",
      label: "Avg. Growth",
      color: "green",
    },
    {
      icon: Heart,
      value: "98%",
      label: "Satisfaction Rate",
      color: "rose",
    },
  ];

  const trustedCompanies = [
    {
      name: "Google",
      logo: googleLogo,
      color: "bg-blue-50",
    },
    {
      name: "Instagram",
      logo: instagramLogo,
      color: "bg-pink-50",
    },
    {
      name: "YouTube",
      logo: youtubeLogo,
      color: "bg-red-50",
    },
    {
      name: "Spotify",
      logo: spotifyLogo,
      color: "bg-green-50",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <div key={i}>
        <Star
          size={18}
          className={
            i < rating
              ? "testimonial-star testimonial-star-filled"
              : "testimonial-star"
          }
        />
      </div>
    ));
  };

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
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="testimonials" className="testimonials-section" ref={ref}>
      {/* Animated background elements */}
      <div className="testimonials-background"></div>

      {/* Animated particles */}
      <div className="particles-container">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="testimonials-container">
        {/* Header */}
        <motion.div
          className="testimonials-header"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="testimonials-badge" variants={itemVariants}>
            <Sparkles size={16} className="mr-2" />
            Client Testimonials
          </motion.div>

          <motion.h2 className="testimonials-title" variants={itemVariants}>
            What Our{" "}
            <span className="testimonials-title-gradient">Clients</span> Say
          </motion.h2>

          <motion.p
            className="testimonials-description"
            variants={itemVariants}
          >
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with SocialZeal.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="testimonials-stats"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className={`testimonial-stat-card stat-${stat.color}`}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`stat-icon-container stat-icon-${stat.color}`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="testimonial-carousel-container" ref={carouselRef}>
          <div className="carousel-inner">
            <div className="testimonial-card">
              <Quote className="quote-icon" />

              <div className="testimonial-header">
                <div className="testimonial-rating">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                <div className="testimonial-highlight">
                  <Zap size={14} className="mr-1" fill="currentColor" />
                  {testimonials[currentIndex].highlight}
                </div>
              </div>

              <p className="testimonial-text">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="testimonial-stats-grid">
                {Object.entries(testimonials[currentIndex].stats).map(
                  ([key, value]) => (
                    <div key={key} className="testimonial-stat-item">
                      <div className="testimonial-stat-value">{value}</div>
                      <div className="testimonial-stat-label">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="testimonial-author">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="testimonial-author-avatar"
                />
                <div className="testimonial-author-info">
                  <div className="testimonial-author-name">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="testimonial-author-position">
                    {testimonials[currentIndex].position}
                  </div>
                  <div className="testimonial-author-company">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="carousel-controls">
              <motion.button
                className="carousel-button"
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={20} />
              </motion.button>

              <div className="carousel-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${
                      index === currentIndex ? "active" : ""
                    }`}
                    onClick={() => goToTestimonial(index)}
                  />
                ))}
              </div>

              <motion.button
                className="carousel-button"
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>

        <motion.div
          className="trusted-companies"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.p className="trusted-title" variants={itemVariants}>
            Trusted by industry leaders worldwide
          </motion.p>

          <div className="companies-grid">
            {trustedCompanies.map((company, index) => (
              <motion.div
                key={index}
                className={`company-item ${company.color} flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300`}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 15 },
                }}
              >
                {/* Company Logo Container */}
                <div className="company-logo-container w-16 h-16 mb-3 flex items-center justify-center p-2 bg-white rounded-lg shadow-sm">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="company-logo w-full h-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml;base64,${btoa(`
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" viewBox="0 0 100 40">
                  <rect width="100" height="40" fill="#373f46" rx="8"/>
                  <text x="50" y="25" font-family="Arial, sans-serif" font-size="12" fill="#fff" text-anchor="middle">${company.name}</text>
                </svg>
              `)}`;
                    }}
                  />
                </div>

                {/* Company Name */}
                <p className="company-name text-sm font-medium text-gray-700">
                  {company.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
