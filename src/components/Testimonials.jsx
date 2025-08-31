import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
  Award,
  TrendingUp,
  Users,
  Heart,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "95%", label: "Client Retention" },
    { icon: TrendingUp, value: "300%", label: "Avg. Growth" },
    { icon: Heart, value: "98%", label: "Satisfaction Rate" },
  ];

  const trustedCompanies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Netflix",
    "Spotify",
    "Adobe",
    "Apple",
    "Facebook",
    "Twitter",
    "Tesla",
    "Uber",
    "Airbnb",
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying && inView) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, inView, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={18}
        className={
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }
      />
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
      <div className="testimonials-container">
        {/* Header */}
        <motion.div
          className="testimonials-header"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="section-badge" variants={itemVariants}>
            Client Testimonials
          </motion.div>

          <motion.h2 className="section-title" variants={itemVariants}>
            What Our <span className="text-gradient">Clients</span> Say
          </motion.h2>

          <motion.p className="section-description" variants={itemVariants}>
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with SocialZeal.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="stats-grid"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="stat-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="stat-icon">
                  <Icon size={24} />
                </div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="testimonial-carousel">
          <div className="carousel-wrapper">
            <motion.div
              key={currentIndex}
              className="testimonial-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Quote className="quote-icon" />
              <div className="testimonial-rating">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              <p className="testimonial-text">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="testimonial-stats">
                {Object.entries(testimonials[currentIndex].stats).map(
                  ([key, value]) => (
                    <div key={key} className="stat-item">
                      <div className="stat-value">{value}</div>
                      <div className="stat-label">{key}</div>
                    </div>
                  )
                )}
              </div>

              <div className="testimonial-author">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="author-avatar"
                />
                <div className="author-info">
                  <div className="author-name">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="author-position">
                    {testimonials[currentIndex].position}
                  </div>
                  <div className="author-company">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Carousel Controls */}
          <div className="carousel-controls">
            <button className="control-btn" onClick={prevTestimonial}>
              <ChevronLeft size={20} />
            </button>

            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => goToTestimonial(index)}
                />
              ))}
            </div>

            <button className="control-btn" onClick={nextTestimonial}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Trusted Companies */}
        <motion.div
          className="trusted-companies"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.p className="trusted-title" variants={itemVariants}>
            Trusted by industry leaders
          </motion.p>

          <div className="companies-grid">
            {trustedCompanies.map((company, index) => (
              <motion.div
                key={index}
                className="company-item"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
