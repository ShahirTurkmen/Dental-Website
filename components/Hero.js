"use client";
import Image from "next/image";
import React from "react";
import { Manrope } from "./Fonts";

function Hero() {
  return (
    <div className="flex justify-between items-center my-[70px] mx-20">
      {/* <div> */}
      <div className="flex flex-col items-start my-[122px]">
        <p
          className={`${Manrope.className} flex flex-row rounded border border-[#EEE] p-2 text-[#3267FF] break-words`}
          style={{ padding: "6px 15.81px 7.39px 16.97px" }}
        >
          <Image
            className="w-auto h-auto mr-1"
            src="/images/hello.svg"
            width={14}
            height={14}
            alt="image"
          />
          Hey! We Are Dentic
        </p>
        <div className={`${Manrope.className} w-[100%] h-[100%]`}>
          <span className="text-[#000A2D] text-[65px] font-[800] break-words">
            Helping You to
            <br />
            Bring Back Your
            <br />
          </span>
          <span className="flex flex-row text-[#000A2D] text-[65px] font-[700] break-words absolute">
            Happy Smile
            <Image
              className="flex flex-shrink-0 top-0 bottom-120 left-2 right-0 rotate-[11deg] relative"
              src="/images/draw-line.png"
              width={120}
              height={10}
              alt="image"
            />
          </span>
        </div>
      </div>
      <div>imgss</div>
      {/* </div> */}
    </div>
  );
}

export default Hero;
