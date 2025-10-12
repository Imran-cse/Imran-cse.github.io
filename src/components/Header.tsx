import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update nav indicators
    const navItems = document.querySelectorAll(".nav a");
    navItems.forEach((item) => {
      const href = item.getAttribute("href");
      const section = href?.substring(1); // Remove the #
      const indicator = item.querySelector(".nav-indicator");
      const text = item.querySelector(".nav-text");

      if (section === activeSection) {
        indicator?.classList.add("w-16", "bg-slate-200");
        indicator?.classList.remove("w-8", "bg-slate-600");
        text?.classList.add("text-slate-200");
        text?.classList.remove("text-slate-500");
      } else {
        indicator?.classList.remove("w-16", "bg-slate-200");
        indicator?.classList.add("w-8", "bg-slate-600");
        text?.classList.remove("text-slate-200");
        text?.classList.add("text-slate-500");
      }
    });
  }, [activeSection]);

  return null; // This component just handles the scroll logic
};

export default Header;
