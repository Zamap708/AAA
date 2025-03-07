"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/assets/AAA-black.png";
import graphicL from "../../../public/assets/graphic-l.png";

export default function Voting() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-[600px] overflow-hidden flex flex-col justify-center items-center border-t-[20px] border-b-[20px] border-[#EE8803] bg-auto bg-center after:content-[''] after:absolute after:top-0 after:left-0 after:w-screen after:h-full after:block after:bg-black after:opacity-30 after:z-10"
        style={{
          backgroundImage:
            "url('/assets/AAA-Design-Concept.pdf-image-001 2.jpg')",
        }}
      >
        <div className="absolute h-full w-full bg-[#EE8803] z-20 rotate-[90rad] md:right-[60%] right-[80%] bottom-[60%] lg:bottom-[0%]  "/>
        <div className="absolute h-full w-full bg-[#EE8803] z-20 -rotate-[90rad] md:left-[70%] left-[90%] bottom-[60%] lg:bottom-[20%]  "/>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative z-20 bebas text-center text-white flex flex-col gap-4 px-4 md:gap-8"
        >
          <h2 className="text-4xl md:text-7xl">Make your voice count!</h2>
          <h2 className="text-3xl md:text-6xl">
            Check back soon when the polls are live!
          </h2>
        </motion.div>
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="relative h-auto md:h-[400px] w-full flex flex-col md:flex-row items-center justify-center bg-white bg-repeat bg-[auto_50%] grayscale after:content-[''] after:absolute after:top-0 after:left-0 after:w-screen after:h-full after:block after:bg-white after:opacity-80 px-4 py-8 md:py-0"
        style={{ backgroundImage: "url('/assets/AAA-pattern.png')" }}
      >
        <motion.div
          className="relative h-24 w-24 md:h-3/5 md:w-1/5 flex-shrink-0"
        >
          <Image
            src={logo}
            alt=""
            fill={true}
            className="z-10 object-contain"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="w-full md:w-3/5 z-10 text-black text-center md:text-left text-sm md:text-base mt-4 md:mt-0"
        >
          The inaugural Amapiano Africa Awards, to take place in 2025, will
          celebrate the vibrant Amapiano genre, honoring its pioneers and
          showcasing its cultural impact across the world. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </motion.p>
      </motion.div>
    </div>
  );
}
