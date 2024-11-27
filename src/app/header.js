import React from "react";
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { PopoverGroup } from '@headlessui/react'
import { ChevronUpIcon, ArrowLongRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'

function Header() {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);



  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX - window.scrollX,
        y: e.clientY - window.scrollX,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  const handleMouseLeave = () => {
    setVisible(false);
  };

  const handleMouseEnter = () => {
    setVisible(true);
  };

  return (
    <header className="z-[9999] bg-black sticky top-0">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 mb--1"
      >
        <div className="flex md:flex-1 lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">nico.</span>
            <Image
              src="/images/logo_whoisnico_white.svg"
              width={96}
              height={96}
              className="h-auto w-24"
              alt="logo nico"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#projects">projekte</a>
          <a href="#skills">skills</a>
          <a href="#career">career</a>
          <a href="#mystack">my stack</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="mailto:nicojann.iselin@gmail.com"
            className="flex items-center gap-1"
          >
            <span>contact</span> <ArrowLongRightIcon className="size-5" />
          </a>
        </div>

        {/* Hamburger Menu */}
        <button
          className="z-[10000] lg:hidden flex items-center justify-center p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <XMarkIcon className="h-6 w-6 text-white" /> : <Bars3Icon className="h-6 w-6 text-white" />}
        </button>
      </nav>

      {/* Sliding Menu */}
      <div
        className={`fixed z-0 top-0 right-0 overflow-hidden h-full p-6 lg:px-8 bg-black transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "100%" }}
      >
        <nav className="flex flex-col space-y-6 text-white">
          <Image
            src="/images/logo_whoisnico_white.svg"
            width={96}
            height={96}
            className="h-auto w-24"
            alt="logo nico"
          />
          <a href="#projects" onClick={() => setMenuOpen(false)}>projekte</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>skills</a>
          <a href="#career" onClick={() => setMenuOpen(false)}>career</a>
          <a href="#mystack" onClick={() => setMenuOpen(false)}>my stack</a>
          <a href="mailto:nicojann.iselin@gmail.com" className="flex items-center gap-1" onClick={() => setMenuOpen(false)}><span>contact</span> <ArrowLongRightIcon className="size-5" /></a>
        </nav>
      </div>
      <div
      className="cursor"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        opacity: visible ? 1 : 0, 
        transition: 'opacity 0.2s ease-in-out',
      }}
    ></div>
    
      {/* Scroll to Top Button */}
      <div className="fixed bottom-0 right-0 p-4 md:p-4">
        <a
          href="#"
          id="scroll-to-top"
          className="bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center"
        >
          <ChevronUpIcon />
        </a>
      </div>
    </header>
  );
}

export default Header;