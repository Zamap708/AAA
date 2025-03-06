"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import grid from "../../../public/assets/grid.png";
import news from "../../../public/assets/news.png";
import Image from "next/image";
import newsData from "./newsData";

export default function News() {
  const [clickedIndex, setClickedIndex] = useState(0);

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <motion.div
      id="news"
      className="relative h-screen w-full flex items-center justify-center bg-[#46484C]/80 after:bg-[url(/assets/AAA-pattern.png)] after:bg-repeat after:bg-[auto_20%] after:grayscale after:content-[''] after:absolute after:top-0 after:left-0 after:w-screen after:h-full after:block after:bg-[#46484C] after:-z-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="relative h-5/6 w-10/12 z-20 flex justify-center items-end m-auto">
        {/* News Content Box */}
        <motion.div
          className="relative h-full w-6/12 z-20 p-4 flex flex-col gap-2 justify-between border-2 rounded-2xl rounded-br-none bg-black/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="h-1/12 w-full flex gap-4 items-center">
            <Image src={grid} alt="" />
            <h4 className="text-4xl">Amapiano Africa Awards News</h4>
          </div>

          {/* News Image */}
          <div className="h-7/12 w-full overflow-hidden flex justify-center items-center rounded-2xl">
            <Image
              src={news}
              alt="News Image"
              className="rounded-2xl border-2 border-white"
            />
          </div>

          {/* News Text */}
          <div className="h-4/12 w-full flex flex-col gap-1 text-white">
            <h5 className="text-2xl">{newsData[clickedIndex]?.title}</h5>
            <div className="h-[2px] w-full bg-white" />
            <p className="text-sm">{newsData[clickedIndex]?.content}</p>
          </div>
        </motion.div>

        {/* Sidebar News List */}
        <motion.div
          className="h-7/8 w-3/8 rounded-r-2xl border-2 border-l-0 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          {newsData.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => handleClick(index)}
              className={`h-1/8 w-full p-4 border-b-2 flex justify-start items-center cursor-pointer transition-all duration-300 ease-in-out ${clickedIndex === index ? 'bg-white/20' : 'hover:bg-white/10'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h5 className="text-lg transition-colors duration-300 ease-in-out">{item.title}</h5>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
