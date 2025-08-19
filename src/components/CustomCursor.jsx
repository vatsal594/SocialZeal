import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const addGrow = () => cursor.classList.add("cursor-grow");
    const removeGrow = () => cursor.classList.remove("cursor-grow");

    document.addEventListener("mousemove", moveCursor);
    // Add grow effect on interactive elements
    const interactive = document.querySelectorAll(
      "a, button, .btn, [role='button'], input, textarea, select, .navbar-hamburger, .navbar-logo"
    );
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", addGrow);
      el.addEventListener("mouseleave", removeGrow);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", addGrow);
        el.removeEventListener("mouseleave", removeGrow);
      });
    };
  }, []);

  // Hide on mobile
  if (window.innerWidth < 768) return null;

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;
