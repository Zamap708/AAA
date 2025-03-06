import React from "react";
import Image from "next/image";
// import { useState, useEffect } from "react";
import bgImage from "/assets/AAA-image-001.jpg";
import logo from "../../../public/assets/AAA-black.png";

export default function Footer() {
  return (
    <footer className="relative h-80 w-full shadow-xl z-20">
      <div className="h-full w-screen p-4 flex text-black bg-white/95 after:bg-[url(/assets/AAA-pattern.png)] after:bg-repeat after:bg-[auto_40%] after:grayscale after:content-[''] after:absolute after:top-0 after:left-0 after:w-screen after:h-full after:block after:bg-white after:-z-10">
        <div className="relative w-1/6 h-3/4 flex flex-col">        
            <Image
              src={logo}
              alt=""
              fill={true}
              className="z-10 object-contain"
            />
          </div>
        <div className="w-1/5 h-3/4 flex flex-col gap-9">
          <h5 className="font-bold">Menu</h5>
          <ul className="flex flex-col gap-3">
            <li><p>Home</p></li>
            <li><p>Voting</p></li>
            <li><p>Submissions</p></li>
            <li><p>Partners</p></li>
            <li><p>News</p></li>
          </ul>
        </div>

        <div className="w-1/5 h-3/4 flex flex-col gap-9">
          <h5 className="font-bold">Categories</h5>
          <ul className="flex flex-col gap-3">
            <li><p>Artist of The Year</p></li>
            <li><p>Male Artist of The Year</p></li>
            <li><p>Female Artist of The Year</p></li>
            <li><p>Song of The Year</p></li>
            <li><p>Newcomer of The Year</p></li>
            <li><p>Album of The Year</p></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
