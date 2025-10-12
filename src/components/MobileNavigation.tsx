import React, { useEffect, useState } from "react";

const MobileNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  // Close menu with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="lg:hidden">
      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm"
          onClick={closeMenu}
        >
          <div className="fixed top-4 right-4">
            <button
              onClick={closeMenu}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-300"
              aria-label="Close navigation"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex h-full flex-col items-center justify-center space-y-8 text-center">
            <a
              href="#about"
              className="text-lg font-medium text-slate-300 hover:text-teal-300"
              onClick={closeMenu}
            >
              About
            </a>
            <a
              href="#experience"
              className="text-lg font-medium text-slate-300 hover:text-teal-300"
              onClick={closeMenu}
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-lg font-medium text-slate-300 hover:text-teal-300"
              onClick={closeMenu}
            >
              Skills
            </a>
            <a
              href="#education"
              className="text-lg font-medium text-slate-300 hover:text-teal-300"
              onClick={closeMenu}
            >
              Education
            </a>
            <a
              href="#publications"
              className="text-lg font-medium text-slate-300 hover:text-teal-300"
              onClick={closeMenu}
            >
              Publications
            </a>
            <a
              href="#projects"
              className="text-lg font-medium text-slate-300 hover:text-teal-300"
              onClick={closeMenu}
            >
              Projects
            </a>
          </nav>
        </div>
      )}

      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-300"
        aria-label="Open navigation"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default MobileNavigation;
