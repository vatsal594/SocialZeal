import React from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import "./LoadingSpinner.css";

const LoadingSpinner = ({ size = "medium", color = "primary", text = "" }) => {
  const sizeClasses = {
    small: "loading-spinner-small",
    medium: "loading-spinner-medium",
    large: "loading-spinner-large",
  };

  const colorClasses = {
    primary: "loading-spinner-primary",
    secondary: "loading-spinner-secondary",
    white: "loading-spinner-white",
  };

  return (
    <div
      className={`loading-spinner ${sizeClasses[size]} ${colorClasses[color]}`}
    >
      <motion.div
        className="loading-spinner-icon"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <Loader2 size={size === "small" ? 16 : size === "large" ? 32 : 24} />
      </motion.div>
      {text && <p className="loading-spinner-text">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
