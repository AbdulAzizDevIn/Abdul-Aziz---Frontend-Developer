import React from "react";
import logo from "../dataPNG/logo.png";
import whitepaper from "../dataPNG/whitepaper.png";

export const NavBar = () => {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-transparent z-50 px-8 py-4">
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
            className="flex space-x-10 text-white text-base border border-transparent rounded-[48px] w-[653px] h-[64px] flex-shrink-0 py-4 px-32"
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
          <div className="flex justify-center items-center align-middle space-x-4">
            <button className="text-white text-center mb-3">Log in</button>
            <a href="#whitepaper" className="flex items-center">
              <img src={whitepaper} alt="Whitepaper" className="w-108 h-108" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};
