import React, { useEffect } from "react";
import AnchorNavbar from "./AnchorNavbar";
import logo from "../../dist/assets/logo.svg";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            <img src={logo} className="w-50 h-auto" alt="Logo" />
          </a>

          <div
            className="w-7 h5 relative cursor-pointer z-40 lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <AnchorNavbar href="#home">Home</AnchorNavbar>

            <AnchorNavbar href="#about">About</AnchorNavbar>

            <AnchorNavbar href="#projects">Projects</AnchorNavbar>

            <AnchorNavbar href="#reviews">Reviews</AnchorNavbar>

            <AnchorNavbar href="#contact">Contact</AnchorNavbar>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
