import {React, useState} from "react";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import EasterEgg from "./easteregg.js";

const Footer = () => {
  const [isEasterEggPopupOpen, setIsEasterPopupOpen] = useState(false);
  const [alreadyFound, setAlreadyFound] = useState(false);

  const handleOpenEasterEgg = () => {
    if(!alreadyFound) {
    setIsEasterPopupOpen(true);
    }
  };

  const handleCloseEasterPopup = ()  => {
    setIsEasterPopupOpen(false);
    setAlreadyFound(true);
  };
  return (
    <footer className="bg-[url('/images/typography1_white_opacity.png')] bg-fixed bg-cover bg-center bg-no-repeat bg-black text-white px-12 pt-12 md:px-24 md:pt-24 pb-6">
      {/* Trennlinie */}
      <div className="border-t border-white mb-12"></div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
        {/* Spalte 1 */}
        <div>
          {/* Logo */}
          <Image
            src="/images/logo_whoisnico_white.svg"
            width={96}
            height={96}
            className="h-auto w-24 mb-4"
            alt="logo nico"
          />
          {/* Beschreibung */}
          <p className="text-sm mb-4">
            connect with me through my social media channels or by sending me a project inquiry via e-mail.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/nikoizelin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/nico-iselin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </a>
            <a
              href="mailto:nicojann.iselin@gmail.com"
              aria-label="Email"
              className="hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Spalte 2 - Leer */}
        <div></div>

        {/* Spalte 3 */}
        <div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-xs">
        © {new Date().getFullYear()} whoisnico. <span onClick={handleOpenEasterEgg} className="cursor-pointer hover:scale-210 transition-transform">❤️</span> all rights reserved.
      </div>
      <EasterEgg isOpen={isEasterEggPopupOpen} onClose={handleCloseEasterPopup}></EasterEgg>
    </footer>
  );
};

export default Footer;
