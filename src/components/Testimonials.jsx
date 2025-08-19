import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import "./Testimonials.css";

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      company: "TechStart Inc.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
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
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
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
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      text: "Working with SocialZeal has been an absolute pleasure. Their content creation is top-notch and their community management skills are exceptional. We've built a loyal following that truly engages with our brand.",
      stats: { followers: "+400%", engagement: "+600%", reach: "+450%" },
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Owner",
      company: "Urban Eats",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      text: "SocialZeal helped us establish a strong social media presence for our restaurant chain. Their local marketing strategies and community engagement tactics have brought us countless new customers.",
      stats: { followers: "+180%", engagement: "+220%", reach: "+200%" },
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Digital Marketing Manager",
      company: "EduTech Solutions",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      text: "The educational content series SocialZeal created for us has been incredibly successful. Their understanding of our audience and ability to create engaging, informative content is outstanding.",
      stats: { followers: "+280%", engagement: "+420%", reach: "+350%" },
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

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <Star key={index} className="testimonial-star" size={20} />
    ));
  };

  return (
    <motion.section
      id="testimonials"
      className="testimonials-section"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="testimonials-container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="testimonials-header"
        >
          <motion.div variants={itemVariants} className="testimonials-badge">
            <span className="testimonials-badge-dot"></span>
            Client Testimonials
          </motion.div>

          <motion.h2 variants={itemVariants} className="testimonials-title">
            What Our <span className="text-gradient-primary">Clients</span> Say
          </motion.h2>

          <motion.p variants={itemVariants} className="testimonials-subtitle">
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with SocialZeal.
          </motion.p>
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="testimonials-rating"
        >
          <motion.div
            variants={itemVariants}
            className="testimonials-rating-card"
          >
            <div className="testimonials-stars">{renderStars(5)}</div>
            <h3 className="testimonials-rating-title">4.9/5 Average Rating</h3>
            <p className="testimonials-rating-subtitle">
              Based on 200+ client reviews
            </p>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="testimonials-grid"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="testimonial-card"
            >
              {/* Quote Icon */}
              <div className="testimonial-header">
                <Quote className="testimonial-quote" size={32} />
                <div className="testimonial-stars">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="testimonial-text">"{testimonial.text}"</p>

              {/* Stats */}
              <div className="testimonial-stats">
                {Object.entries(testimonial.stats).map(([key, value]) => (
                  <div key={key} className="testimonial-stat">
                    <div className="testimonial-stat-value">{value}</div>
                    <div className="testimonial-stat-label">{key}</div>
                  </div>
                ))}
              </div>

              {/* Client Info */}
              <div className="testimonial-client">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-client-info">
                  <div className="testimonial-client-name">
                    {testimonial.name}
                  </div>
                  <div className="testimonial-client-position">
                    {testimonial.position}
                  </div>
                  <div className="testimonial-client-company">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="testimonials-cta"
        >
          <motion.div
            variants={itemVariants}
            className="testimonials-cta-content"
          >
            <h3 className="testimonials-cta-title">
              Ready to Join Our Success Stories?
            </h3>
            <p className="testimonials-cta-subtitle">
              Let's work together to create your own success story.
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

export default Testimonials;
