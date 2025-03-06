"use client";
import React, { useState, useEffect } from "react";
import logo from "../../../public/assets/AAA-alt.png";
import grid from "../../../public/assets/grid.png";
import Image from "next/image";
import Nominee from "./Nominee";
import categories from "./categories";

export default function Voting() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdownDate = new Date("July 1, 2025 00:00:00").getTime(); // Target date: 1st July 2025

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance <= 0) {
        clearInterval(interval); // Stop the countdown when the target date is reached
      } else {
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24))); // Calculate days
        setHours(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ); // Calculate hours
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))); // Calculate minutes
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000)); // Calculate seconds
      }
    }, 1000); // Update the countdown every second

    return () => clearInterval(interval); // Cleanup the interval when the component is unmounted
  }, []);

  const [selectedArtists, setSelectedArtists] = useState({});

  // Function to handle artist selection for each category
  const handleSelect = (categoryName, artist) => {
    setSelectedArtists((prevSelections) => {
      // If the artist is already selected for this category, toggle it off
      if (prevSelections[categoryName] === artist) {
        const { [categoryName]: _, ...rest } = prevSelections;
        return rest;
      } else {
        // Otherwise, set the selected artist for the category
        return { ...prevSelections, [categoryName]: artist };
      }
    });
  };

  // Handle submit action (log selected artists)
  const handleSubmit = () => {
    console.log("Selected Artists:");
    Object.keys(selectedArtists).forEach((category) => {
      console.log(
        `Category: ${category}, Artist: ${selectedArtists[category]}`
      );
    });
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-white/95 after:bg-[url(/assets/AAA-pattern.png)] after:bg-repeat after:bg-[auto_40%] after:grayscale after:content-[''] after:absolute after:top-0 after:left-0 after:w-screen after:h-full after:block after:bg-white after:-z-10">
      <div
        className="w-full h-96 bg-cover bg-center flex flex-col gap-8 p-8 justify-end items-center"
        style={{ backgroundImage: "url('/assets/voting-bg.jpg')" }}
      >
        <h1 className="text-6xl text-white">
          The countdown is on <br />
          Your vote, your vibe!
        </h1>
        <div className="flex justify-between items-center gap-8 text-3xl text-white">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-lg font-semibold">{label}</h3>
              <div className="text-4xl font-extrabold animate-pulse">
                {eval(label.toLowerCase())}
              </div>
            </div>
          ))}
        </div>
      </div>

      {categories.map((category, sectionIndex) => {
    const categoryName = Object.keys(category)[0];
    const artists = category[categoryName];

    return (
      <div key={sectionIndex} className="w-11/12 flex flex-col justify-center p-4 m-auto">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00b7d0] to-[#0089cd] pl-8 py-4 border-l-8 border-[#006b8f] uppercase tracking-wide transition-all duration-300 hover:text-[#006b8f] hover:underline hover:underline-offset-4">
          {categoryName}
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {artists[0].split(', ').map((artist, index) => {
            const isSelected = selectedArtists[categoryName] === artist;

            return (
              <div
                key={index}
                className={`relative rounded-lg p-4 cursor-pointer transition-all duration-300 ${isSelected ? "scale-120 text-white" : "bg-[white] shadow-lg hover:scale-105"}`}
                onClick={() => handleSelect(categoryName, artist)}
              >
                <Nominee isSelected={isSelected} name={artist} />
              </div>
            );
          })}
        </div>
        <div className="my-8 border-t-0 border-[#0089CD]"></div>
      </div>
    );
  })}

  <div className="flex justify-center my-6">
    <button
      onClick={handleSubmit}
      className="bg-[#0089CD] text-2xl text-white px-8 py-4 rounded-lg cursor-pointer hover:scale-110 hover:bg-[#006b8f] transition-all duration-500 shadow-lg"
    >
      Submit Votes
    </button>
      </div>
    </div>
  );
}
