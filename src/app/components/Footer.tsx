import React from "react";
import Image from "next/image";
import bgImage from "/assets/AAA-image-001.jpg";
import logo from "../../../public/assets/AAA-black.png";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative h-auto w-full shadow-xl z-20">
      <div className="h-full w-full p-4 pt-8 flex flex-col md:flex-row text-black bg-white/95 after:bg-[url(/assets/AAA-pattern.png)] after:bg-repeat after:bg-[auto_40%] after:grayscale after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:block after:bg-white after:-z-10">
        <div className="relative w-full md:w-1/6 h-32 md:min-h-full md:mr-10 flex flex-col justify-center items-center gap-4 md:justify-start">
          <Image src={logo} alt="" className="z-10 h-full object-contain" />
          <div className="flex w-full justify-center items-end gap-2">
            <Facebook className="border-2 border-black rounded-xl p-1 box-content hover:bg-white hover:scale-105" strokeWidth={1.5}/>
            <Instagram className="border-2 border-black rounded-xl p-1 box-content hover:bg-white hover:scale-105" strokeWidth={1.5}/>
            <Linkedin className="border-2 border-black rounded-xl p-1 box-content hover:bg-white hover:scale-105" strokeWidth={1.5}/>
            <Youtube className="border-2 border-black rounded-xl p-1 box-content hover:bg-white hover:scale-105" strokeWidth={1.5}/>
          </div>
        </div>
        <div className="w-full hidden md:w-1/5 h-auto md:h-3/4 md:flex flex-col gap-4 md:gap-9 mt-4 md:mt-0">
          <h5 className="font-bold">Menu</h5>
          <ul className=" md:flex flex-col gap-3">
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Voting</p>
            </li>
            <li>
              <p>Submissions</p>
            </li>
            <li>
              <p>Partners</p>
            </li>
            <li>
              <p>News</p>
            </li>
          </ul>
        </div>

        <div className="w-full hidden md:w-1/5 h-auto md:h-3/4 md:flex flex-col gap-4 md:gap-9 mt-4 md:mt-0">
          <h5 className="font-bold">Categories</h5>
          <ul className="hidden md:flex flex-col gap-3">
            <li>
              <p>Artist of The Year</p>
            </li>
            <li>
              <p>Male Artist of The Year</p>
            </li>
            <li>
              <p>Female Artist of The Year</p>
            </li>
            <li>
              <p>Song of The Year</p>
            </li>
            <li>
              <p>Newcomer of The Year</p>
            </li>
            <li>
              <p>Album of The Year</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex bg-white/95 w-full justify-center items-center py-6">
        <h2>Powered by Gastby Softworks</h2>
      </div>
    </footer>
  );
}
