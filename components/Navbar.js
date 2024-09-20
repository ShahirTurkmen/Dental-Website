"use client";
import Image from "next/image";
import React from "react";
import links from "./data";
import { ManropeBold } from "./Fonts";
import "animate.css";

const btnclassname = `bg-[#3267FF] px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer  transition duration-200 ease-in-out rounded-md hover:bg-[#265BEC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3267FF] focus-visible:ring-offset-2 active:scale-95`;

function Navbar() {
  return (
    <>
      <br />
      <div
        className={`${ManropeBold.className} flex flex-row items-center my-0 mx-auto font-bold`}
      >
        <div className="my-0 mx-auto">
          <Image
            className="w-auto h-auto mr-3"
            src="/images/Dental.png"
            width={267.516}
            height={60}
            alt="image"
          />
        </div>
        <div>
          <ul className="list-none flex flex-row">
            {links.map((navLink) => (
              <li
                key={`${navLink.className}-link-${Math.floor(
                  Math.random() * 100 * 392 * 77 * 7 +
                    9 * Math.floor(Math.random())
                )}`}
                onClick={(e) => {
                  e.target.classList.add("animate")
                }}
                className={`${navLink.className} p-3`}
              >
                <a href={navLink.link.href}>{navLink.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-0 mx-auto">
          <button
            className={`${btnclassname} pt-[17px] pb-[18px] pl-[36px] pr-[35.38px] flex items-center text-center m-0 rounded`}
          >
            Make an Appointment
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
