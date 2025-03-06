import React from "react";
import logo from "../../../public/assets/AAA-alt.png";
import arrow from "../../../public/assets/arrow.png";
import grid from "../../../public/assets/grid.png";
import maphorisa from "../../../public/assets/maphorisa.jpg";
import Image from "next/image";

export default function Nominee(props) {
  return (
    <div className="relative h-4/5 w-full p-8 z-10 flex">
      <div className="h-full w-full p-8 flex justify-center items-center gap-4 bg">
        <div className="flex flex-col h-full rounded-2xl">
          <div className="flex h-1/8 w-full">
            <div className="h-full w-1/3 p-2 flex justify-center items-center">
              <Image src={logo} alt="" />
            </div>
            <div className="h-full w-2/3 px-1 rounded-t-2xl border-2 border-b-0 flex justify-start items-center bg-white/20">
              <div className="h-full w-1/3 p-2 flex justify-start items-center">
                <Image src={grid} alt="" />
              </div>
              <h4>{props.name}</h4>
            </div>
          </div>
          <div className="h-7/8 w-full p-4 flex justify-center items-center border-2 rounded-b-2xl rounded-l-2xl bg-white/20">
            <div
              className="relative h-full w-full bg-cover bg-center rounded-b-2xl rounded-l-2xl"
              style={{ backgroundImage: "url('/assets/maphorisa.jpg')" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
