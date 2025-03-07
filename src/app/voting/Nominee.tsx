import React from "react";
import logo from "../../../public/assets/AAA-alt.png";
import arrow from "../../../public/assets/arrow.png";
import grid from "../../../public/assets/grid.png";
import maphorisa from "../../../public/assets/maphorisa.jpg";
import Image from "next/image";

export default function Nominee(props) {
  return (
      <div className={`relative h-[400px] w-full z-10 flex hover:scale-110 transition-transform duration-300 ease-in-out`}>
        <div className="h-full w-full p-8 flex justify-center items-center gap-4 bg">
          <div className="flex flex-col h-full w-full rounded-2xl">
            <div className="flex h-1/8 w-full justify-end   ">
              {/* <div className="h-full w-1/3 p-2 flex justify-center items-center">
                <Image src={logo} alt="" />
              </div> */}
              <div className={`h-full w-2/3 p-4 rounded-t-2xl border-b-0 flex gap-4 justify-start items-center ${props.isSelected ? "bg-[#0089CD] text-[#fff]" : "bg-[#46484C]/80 text-white"} `}>
                {/* <div className=" p-2 flex justify-start items-center"> */}
                <Image src={grid} alt="" className="sm:w-auto w-1/5"/>
                {/* </div> */}
                <h2 className="text-2xl">{props.name}</h2>
              </div>
            </div>
                  <div className={`h-7/8 w-full p-4 flex justify-center items-center rounded-b-2xl rounded-l-2xl ${props.isSelected ? "bg-[#0089CD]" : "bg-[#46484C]/80"} shadow-2xl`}>
              <div
                className="relative h-full w-full bg-cover bg-center rounded-b-2xl rounded-l-2xl"
                style={{ backgroundImage: "url('/assets/maphorisa.jpg')" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
  )
}
