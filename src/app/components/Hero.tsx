import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/AAA-white 2.png";
import logoText from "../../../public/assets/AAA-white-text-only.png";

export default function Hero() {
  return (
    <div className="relative h-screen w-screen p-0 m-0 overflow-hidden">
      {/* <div className="absolute h-full w-full bg-[#EE8803] z-20 rotate-[90rad] top-[80%] right-[50%]  " /> */}
      {/* <div className="absolute h-full w-full bg-[#EE8803] z-20 -rotate-[90rad] left-[70%] " /> */}
      <video
        className="absolute -z-10 top-0 left-0 w-screen h-screen object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/11-BACKGROUND-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative flex flex-col w-full h-full items-center justify-center border-white">
        <Image src={logo} alt="" className="w-48 sm:w-40 md:w-48" />
        <div>
          <h2 className="relative text-3xl sm:text-2xl md:text-3xl text-white after:content-[''] after:absolute after:top-[40%] after:left-[110%] after:h-1 after:w-[150%] after:bg-white before:content-[''] before:absolute before:top-[40%] before:right-[110%] before:h-1 before:w-[150%] before:bg-white">
            The First Annual
          </h2>
        </div>
        <Image
          src={logoText}
          alt=""
          className="w-64 sm:w-56 md:w-64 border-b-0 border-t-0 border-white"
        />
        <div className="w-1/2 h-1 mt-4 bg-white" />
      </div>
    </div>
  );
}
