import React, { useState } from "react";
import logo from "../dataPNG/logo.png";
import whitepaper from "../dataPNG/whitepaper.png";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-transparent z-50 px-4 sm:px-8 py-4">
        <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto">
          {/* Logo Section */}
          <div className="flex items-center mr-10">
            <img src={logo} alt="EthAi Logo" className="w-8 h-8 mr-2" />
            <span className="[font-family:'Play-Bold',Helvetica] font-bold text-white text-xl">
              EthAi
            </span>
          </div>

          {/* Navbar Links */}
          <nav
            className={`hidden lg:flex flex space-x-10 text-white text-base border border-transparent rounded-[48px] w-[700px] h-[64px] flex-shrink-0 py-4 px-32`}
            style={{ color: "#b0faff", background: "rgba(12, 43, 47, 0.70)" }}
          >
            <a href="#features" className="hover:underline">
              Features
            </a>
            <a href="#why-us" className="hover:underline">
              Why Us
            </a>
            <a href="#tokenomics" className="hover:underline">
              Tokenomics
            </a>
            <a href="#roadmap" className="hover:underline">
              Roadmap
            </a>
          </nav>

          {/* Login and Whitepaper Section */}
          <div className="hidden lg:flex justify-center items-center align-middle space-x-4">
            <button className="text-white text-center mb-3">Log in</button>
            <a href="#whitepaper" className="flex items-center">
              <img src={whitepaper} alt="Whitepaper" className="w-108 h-108" />
            </a>
          </div>

          {/* Burger Menu Button */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="lg:hidden bg-[#0c2b2f] bg-opacity-70 text-white py-4 space-y-4"
            style={{ color: "#b0faff" }}
          >
            <a href="#features" className="block text-center hover:underline">
              Features
            </a>
            <a href="#why-us" className="block text-center hover:underline">
              Why Us
            </a>
            <a href="#tokenomics" className="block text-center hover:underline">
              Tokenomics
            </a>
            <a href="#roadmap" className="block text-center hover:underline">
              Roadmap
            </a>
            <div className="flex justify-center items-center space-x-4">
              <button className="text-white">Log in</button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

