"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../public/assets/AAA-black-notext.png";
import Link from "next/link";

export default function Navbar() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu

  const handleScroll = () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop && currentScroll > 60) {
      setScrollingDown(true);
    } else {
      setScrollingDown(false);
    }
    setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll); // For Mobile or negative scrolling
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header
      className={`fixed z-50 flex items-center justify-between px-4 py-2 bg-white h-16 w-full bebas transition-transform ${
        scrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="h-full">
        <Image src={logo} alt="Amapiano Africa Awards Logo" className="h-full w-auto" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex gap-4 text-2xl text-black justify-center items-center">
          <li className="hover:text-[#0089CD]">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-[#0089CD]">
            <Link href="/voting">Voting</Link>
          </li>
          <li className="hover:text-[#0089CD]">
            <Link href="/">Submissions</Link>
          </li>
          <li className="hover:text-[#0089CD]">
            <Link href="/partners">Partners</Link>
          </li>
          <li className="hover:text-[#0089CD]">
            <Link href="/#news">News</Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Icon */}
      <div
        className="md:hidden flex flex-col items-end cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div
          className={`w-6 h-0.5 bg-black mb-1 transition-all ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-black mb-1 transition-all ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-black transition-all ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 right-0 w-3/4 bg-white shadow-md transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col gap-4 text-xl text-black p-6">
          <li className="hover:text-[#0089CD]">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="hover:text-[#0089CD]">
            <Link href="/voting" onClick={() => setMenuOpen(false)}>
              Voting
            </Link>
          </li>
          <li className="hover:text-[#0089CD]">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Submissions
            </Link>
          </li>
          <li className="hover:text-[#0089CD]">
            <Link href="/partners" onClick={() => setMenuOpen(false)}>
              Partners
            </Link>
          </li>
          <li className="hover:text-[#0089CD]">
            <Link href="/#news" onClick={() => setMenuOpen(false)}>
              News
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
