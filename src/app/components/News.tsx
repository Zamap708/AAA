"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import grid from "../../../public/assets/grid.png";
import news from "../../../public/assets/news.png";
import Image from "next/image";
import newsData from "./newsData";

export default function News() {
  const [clickedIndex, setClickedIndex] = useState(0);

  const handleClick = (index: any) => {
    setClickedIndex(index);
  };

  return (
    <motion.div
      id="news"
      className="relative h-screen w-full p-4 flex items-center justify-center text-white bg-[#46484C]/80 after:bg-[url(/assets/AAA-pattern.png)] after:bg-repeat after:bg-[auto_20%] after:grayscale after:content-[''] after:absolute after:top-0 after:left-0 after:w-screen after:h-full after:block after:bg-[#46484C] after:-z-10"
      // initial={{ opacity: 0, y: 50 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.8, ease: "easeOut" }}
      // viewport={{ once: true }}
    >
      <div className="relative h-5/6 sm:w-10/12 z-20 flex justify-center items-end m-auto">
        <motion.div
          className="relative h-full w-full sm:w-8/12 md:w-6/12 z-20 p-2 sm:p-4 flex flex-col gap-2 justify-between border-2 rounded-2xl rounded-br-none bg-black/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="w-full flex gap-2 sm:gap-4 items-center">
            <Image src={grid} alt="" className="w-1/8 sm:w-auto"/>
            <h2 className="text-lg sm:text-xl md:text-4xl">Amapiano Africa Awards News</h2>
          </div>

          <div className="h-full w-full overflow-hidden flex justify-center items-center rounded-2xl">
            <Image
              src={news}
              alt="News Image"
              className="rounded-2xl border-2 border-white h-full w-auto object-cover"
            />
          </div>

          <div className=" w-full flex flex-col gap-1 text-white">
            <h5 className="font-bold sm:text-2xl">{newsData[clickedIndex]?.title}</h5>
            <div className="h-[2px] w-full bg-white" />
            <p className="text-xs sm:text-sm p-2">{newsData[clickedIndex]?.content}</p>
          </div>
        </motion.div>

        <motion.div
          className="h-7/8 w-full sm:w-3/8 rounded-r-2xl border-2 border-l-0 flex flex-col mt-4 sm:mt-0 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          {newsData.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => handleClick(index)}
              className={`h-1/8 w-full md:p-3 p-2 sm:p-4 border-b-2 flex justify-start items-center cursor-pointer transition-all duration-300 ease-in-out ${clickedIndex === index ? 'bg-white/20' : 'hover:bg-white/10'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h5 className="text-xs sm:text-sm lg:text-lg transition-colors duration-300 ease-in-out">{item.title}</h5>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
