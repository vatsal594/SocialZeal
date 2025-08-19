import React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    services: [
      { name: "Social Media Management", href: "#services" },
      { name: "Content Creation", href: "#services" },
      { name: "Paid Advertising", href: "#services" },
      { name: "Analytics & Reporting", href: "#services" },
      { name: "Community Management", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
    ],
    resources: [
      { name: "Case Studies", href: "#portfolio" },
      { name: "Social Media Guide", href: "#" },
      { name: "Free Tools", href: "#" },
      { name: "Webinars", href: "#" },
      { name: "FAQ", href: "#" },
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "Help Center", href: "#" },
      { name: "Live Chat", href: "#" },
      { name: "Status Page", href: "#" },
      { name: "Support Ticket", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const contactInfo = [
    { icon: Mail, text: "hello@socialzeal.com" },
    { icon: Phone, text: "+1 (555) 123-4567" },
    { icon: MapPin, text: "123 Digital Street, Tech City" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-brand">
                <div className="footer-logo">
                  <span className="footer-logo-text">S</span>
                </div>
                <span className="footer-brand-name">SocialZeal</span>
              </div>

              <p className="footer-description">
                We help brands grow their online presence with strategic social
                media management, engaging content creation, and data-driven
                digital marketing solutions.
              </p>

              {/* Contact Info */}
              <div className="footer-contact">
                {contactInfo.map((info, index) => (
                  <div key={index} className="footer-contact-item">
                    <info.icon className="footer-contact-icon" size={16} />
                    <span className="footer-contact-text">{info.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="footer-social-link"
                    aria-label={social.label}
                  >
                    <social.icon className="footer-social-icon" size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="footer-section">
              <h3 className="footer-section-title">Services</h3>
              <ul className="footer-links">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-section-title">Company</h3>
              <ul className="footer-links">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-section-title">Resources</h3>
              <ul className="footer-links">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-section-title">Support</h3>
              <ul className="footer-links">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="footer-newsletter">
            <div className="footer-newsletter-content">
              <div className="footer-newsletter-info">
                <h3>Stay Updated</h3>
                <p>
                  Get the latest social media tips, trends, and insights
                  delivered to your inbox.
                </p>
              </div>
              <div className="footer-newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footer-newsletter-input"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="footer-newsletter-button"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              © 2024 SocialZeal. All rights reserved. Made with{" "}
              <Heart className="footer-copyright-heart" size={16} /> for amazing
              brands.
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="footer-scroll-top"
        aria-label="Scroll to top"
      >
        <ArrowUp className="footer-scroll-top-icon" size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
