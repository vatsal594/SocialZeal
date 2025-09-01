import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ArrowRight,
  ExternalLink,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  Search,
  Calendar,
  BarChart3,
  Star,
} from "lucide-react";
import "./Portfolio.css";

const Portfolio = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filters = [
    { id: "all", label: "All Work", icon: Filter },
    { id: "social", label: "Social Media", icon: Users },
    { id: "content", label: "Content Creation", icon: MessageCircle },
    { id: "ads", label: "Paid Advertising", icon: TrendingUp },
    { id: "strategy", label: "Strategy", icon: Target },
  ];

  const projects = [
    {
      id: 1,
      category: "Social",
      title: "Corporate Shoot",
      description:
        "Complete social media transformation for a tech startup, resulting in 300% follower growth and increased engagement across all platforms. We implemented a comprehensive content strategy with A/B testing and data-driven optimizations.",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: { followers: "50K+", engagement: "8.5%", reach: "2M+" },
      platforms: [Instagram, Facebook, Twitter],
      duration: "3 months",
      results: "300% growth in followers, 150% increase in engagement",
      client: "TechStart Inc.",
      date: "2023-05-15",
      featured: true,
    },
    {
      id: 2,
      category: "content",
      title: "Fashion Brand Content Strategy",
      description:
        "Creative content creation and visual storytelling for a luxury fashion brand, establishing a strong brand identity and increasing conversions. We produced high-quality visual content and developed a distinctive brand voice.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: { followers: "120K+", engagement: "12%", reach: "5M+" },
      platforms: [Instagram, Youtube],
      duration: "6 months",
      results: "200% increase in brand awareness, 75% higher conversion rate",
      client: "Luxe Fashion House",
      date: "2023-02-10",
      featured: true,
    },
    {
      id: 3,
      category: "ads",
      title: "E-commerce Paid Campaign",
      description:
        "High-converting paid advertising campaign for an e-commerce store that dramatically increased ROI and customer acquisition. We utilized advanced targeting and retargeting strategies to maximize conversions.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: { followers: "80K+", engagement: "15%", reach: "3M+" },
      platforms: [Facebook, Instagram],
      duration: "4 months",
      results: "320% ROI, 40% lower customer acquisition cost",
      client: "StyleShop E-commerce",
      date: "2023-07-22",
      featured: false,
    },
    {
      id: 4,
      category: "strategy",
      title: "Corporate Social Media Strategy",
      description:
        "Comprehensive social media strategy for a Fortune 500 company, aligning all platforms with brand values and business objectives. We established clear KPIs and implemented a cross-platform content calendar.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: { followers: "200K+", engagement: "9.2%", reach: "8M+" },
      platforms: [Linkedin, Twitter, Facebook],
      duration: "8 months",
      results: "Unified brand voice, 40% increase in B2B leads",
      client: "Global Corporation",
      date: "2022-11-05",
      featured: true,
    },
    {
      id: 5,
      category: "social",
      title: "Restaurant Social Media Management",
      description:
        "Complete social media management for a restaurant chain, increasing foot traffic and customer loyalty through engaging content. We highlighted user-generated content and implemented geo-targeted campaigns.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: { followers: "45K+", engagement: "18%", reach: "1.5M+" },
      platforms: [Instagram, Facebook],
      duration: "5 months",
      results: "25% increase in reservations, 60% growth in local engagement",
      client: "Urban Eats Restaurant",
      date: "2023-04-18",
      featured: false,
    },
    {
      id: 6,
      category: "content",
      title: "Health Brand Content Series",
      description:
        "Educational content series for a health and wellness brand, establishing thought leadership and building a loyal community. We created value-packed content that positioned the brand as an industry authority.",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: { followers: "95K+", engagement: "14%", reach: "4M+" },
      platforms: [Instagram, Youtube, Facebook],
      duration: "7 months",
      results: "50% increase in newsletter signups, 35% higher product sales",
      client: "Wellness Life Co.",
      date: "2023-01-30",
      featured: true,
    },
  ];

  // Filter and sort projects
  const filteredProjects = useCallback(() => {
    let result = projects;
    
    // Filter by category
    if (activeFilter !== "all") {
      result = result.filter((project) => project.category === activeFilter);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.client.toLowerCase().includes(query)
      );
    }
    
    // Sort projects
    switch (sortBy) {
      case "newest":
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "oldest":
        result.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "featured":
        result.sort((a, b) => (b.featured - a.featured));
        break;
      default:
        // Default sorting (by id)
        break;
    }
    
    return result;
  }, [activeFilter, searchQuery, sortBy]);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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

  const openProjectDetail = (project, index) => {
    setSelectedProject(project);
    setCurrentIndex(index);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  const navigateProjects = (direction) => {
    const projectsList = filteredProjects();
    let newIndex;
    
    if (direction === "next") {
      newIndex = (currentIndex + 1) % projectsList.length;
    } else {
      newIndex = (currentIndex - 1 + projectsList.length) % projectsList.length;
    }
    
    setSelectedProject(projectsList[newIndex]);
    setCurrentIndex(newIndex);
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProject) {
        if (e.key === "Escape") {
          closeProjectDetail();
        } else if (e.key === "ArrowRight") {
          navigateProjects("next");
        } else if (e.key === "ArrowLeft") {
          navigateProjects("prev");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, currentIndex]);

  return (
    <motion.section
      id="portfolio"
      className="portfolio-section"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Elements */}
      <div className="portfolio-background">
        <div className="portfolio-orb orb-1"></div>
        <div className="portfolio-orb orb-2"></div>
        <div className="portfolio-orb orb-3"></div>
        <div className="portfolio-grid-pattern"></div>
      </div>

      <div className="portfolio-container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="portfolio-header"
        >
          <motion.div variants={itemVariants} className="section-badge">
            <span className="badge-dot"></span>
            Our Portfolio
          </motion.div>

          <motion.h2 variants={itemVariants} className="section-title">
            Success <span className="text-gradient">Stories</span> & Case Studies
          </motion.h2>

          <motion.p variants={itemVariants} className="section-description">
            Discover how we've helped brands transform their social media
            presence and achieve remarkable growth through strategic campaigns.
          </motion.p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="portfolio-controls"
        >
          <div className="search-container">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="clear-search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="sort-container">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="default">Sort by: Default</option>
              <option value="newest">Sort by: Newest</option>
              <option value="oldest">Sort by: Oldest</option>
              <option value="featured">Sort by: Featured</option>
            </select>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="portfolio-filters"
        >
          {filters.map((filter) => {
            const FilterIcon = filter.icon;
            return (
              <motion.button
                key={filter.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`filter-button ${activeFilter === filter.id ? "active" : ""}`}
              >
                <FilterIcon size={16} />
                <span>{filter.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Results Count */}
        {searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="results-count"
          >
            Found {filteredProjects().length} project(s) for "{searchQuery}"
          </motion.div>
        )}

        {/* Projects Grid */}
        {filteredProjects().length > 0 ? (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="portfolio-grid"
          >
            {filteredProjects().map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className={`portfolio-card ${project.featured ? "featured" : ""}`}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={() => openProjectDetail(project, index)}
              >
                {project.featured && (
                  <div className="featured-badge">
                    <Star size={14} />
                    Featured
                  </div>
                )}
                <div className="card-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-image"
                    loading="lazy"
                  />
                  <div className="card-overlay">
                    <div className="overlay-content">
                      <div className="platforms">
                        {project.platforms.map((Platform, index) => (
                          <div key={index} className="platform-icon">
                            <Platform size={18} />
                          </div>
                        ))}
                      </div>
                      <button className="view-project-btn">
                        <Eye size={18} />
                        View Project
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-description">{project.description}</p>
                  
                  <div className="card-stats">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="stat-item">
                        <div className="stat-value">{value}</div>
                        <div className="stat-label">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="card-footer">
                    <span className="card-category">{project.category}</span>
                    <div className="project-date">
                      <Calendar size={14} />
                      {new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="no-results"
          >
            <BarChart3 size={48} />
            <h3>No projects found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="project-modal"
              onClick={closeProjectDetail}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close" onClick={closeProjectDetail}>
                  <X size={24} />
                </button>
                
                <div className="modal-navigation">
                  <button 
                    className="nav-button prev" 
                    onClick={() => navigateProjects("prev")}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    className="nav-button next" 
                    onClick={() => navigateProjects("next")}
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
                
                <div className="modal-image">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
                
                <div className="modal-body">
                  <div className="modal-header">
                    <h2>{selectedProject.title}</h2>
                    <p className="modal-client">{selectedProject.client}</p>
                  </div>
                  
                  <div className="modal-details">
                    <div className="detail-item">
                      <span className="detail-label">Duration</span>
                      <span className="detail-value">{selectedProject.duration}</span>
                    </div>
                    
                    <div className="detail-item">
                      <span className="detail-label">Platforms</span>
                      <div className="platforms">
                        {selectedProject.platforms.map((Platform, index) => (
                          <div key={index} className="platform-icon">
                            <Platform size={18} />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="detail-item">
                      <span className="detail-label">Date</span>
                      <span className="detail-value">
                        {new Date(selectedProject.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    
                    <div className="detail-item">
                      <span className="detail-label">Results</span>
                      <span className="detail-value">{selectedProject.results}</span>
                    </div>
                  </div>
                  
                  <div className="modal-stats">
                    {Object.entries(selectedProject.stats).map(([key, value]) => (
                      <div key={key} className="modal-stat">
                        <div className="modal-stat-value">{value}</div>
                        <div className="modal-stat-label">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="modal-description">{selectedProject.description}</p>
                  
                  <div className="modal-actions">
                    <button className="btn-primary">
                      <ExternalLink size={18} />
                      View Live Project
                    </button>
                    <button className="btn-secondary" onClick={closeProjectDetail}>
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="portfolio-cta"
        >
          <motion.div variants={itemVariants} className="cta-content">
            <h3 className="cta-title">Ready to Create Your Success Story?</h3>
            <p className="cta-description">
              Let's work together to build a social media presence that drives real results for your brand.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Your Project
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;