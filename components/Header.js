"use client";
import React from "react";
import Image from "next/image";
import { Archivo } from "./Fonts"; 

function Header() {
  return (
    <>
      <div
        className={`flex flex-row mt-[1rem] mr-[1rem] text-[#636468] ${Archivo.className} border-b-[1px] border-b-[#E9E9E9] bg-[#FFF] p-3`}
      >
        <div className="my-0 mx-auto">
          <div className="flex flex-row">
            <p className={`text-sm text-[#3267FF] mr-3`}>略</p>
            <p className={`border-r-[1px] border-r-[#3267FF] mr-4 pr-3`}>
              +01234 567 890
            </p>
            <Image
              className="w-auto h-auto mr-3"
              src="/images/Frame.svg"
              width={14}
              height={14}
              alt="image"
            />
            <p>Jl. Patimura II No. 18, Denpasar</p>
          </div>
        </div>
        <div className="my-0 mx-auto">
          <div className="flex flex-row">
            <Image
              className="w-auto h-auto mr-3"
              src="/images/Frame1.svg"
              width={14}
              height={14}
              alt="image"
            />
            <p>Monday - Saturday: 9 am - 11.30 pm</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
