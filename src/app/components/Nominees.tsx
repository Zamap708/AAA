"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Nominee from "./Nominee";
import categories from "../voting/categories";
import logo from "../../../public/assets/AAA-alt.png";
import arrow from "../../../public/assets/arrow.png";

export default function Nominees() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Auto-change category every 7 seconds with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentCategoryIndex(
          (prevIndex) => (prevIndex + 1) % categories.length
        );
        setFade(false);
      }, 1000); // Fade duration
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const category = categories[currentCategoryIndex];
  const categoryName = Object.keys(category)[0];
  const artists = category[categoryName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative h-screen bg-cover after:content-[''] after:absolute after:top-0 after:left-0 after:w-screen after:h-full after:block after:bg-black after:opacity-30"
      style={{
        backgroundImage: "url('/assets/AAA-Design-Concept.pdf-image-013.jpg')",
      }}
    >
      {/* Header */}
      <div className="relative h-1/5 overflow-hidden flex justify-between items-start pt-5 pr-10 z-20">
        <div className="flex justify-center items-center gap-4 h-full w-fit">
          <div className="relative w-4/5 h-20">
            <Image src={arrow} alt="" className="h-full" />
          </div>
          <h3 className="text-6xl w-fit text-[#B4F958]">Nominees</h3>
        </div>
        <div className="h-20">
          <Image src={logo} alt="" className="h-full"/>
        </div>
      </div>

      {/* Category & Nominees */}
      <div className="relative h-full w-full flex flex-col justify-center items-start py-4">
        <div className="flex items-center h-max w-full px-8 z-10">
          <h3 className="relative w-fit text-3xl text-white pl-10 whitespace-nowrap">
            {categoryName}
          </h3>
          <div className="h-1 w-full mx-8 bg-white" />
        </div>

        {/* Nominee List - No Responsive Edits, Only Animations */}
        <div
          className={`h-full w-full grid grid-cols-3 grid-rows-1 border-b-2 border-white transition-opacity duration-1000 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {artists[0].split(", ").map((artist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            >
              <Nominee name={artist} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
