"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
const btnclassname = `bg-[#3267FF] px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer  transition duration-200 ease-in-out rounded-md hover:bg-[#265BEC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3267FF] focus-visible:ring-offset-2 active:scale-95`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
`;
function Navbar() {
  return (
    <>
      <br />
    <Wrapper>
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
          <li className="text-[#3267FF] p-3">
            <a href="#">Home</a>
          </li>
          <li className="p-3">
            <a href="#">About Us</a>
          </li>
          <li className="p-3">
            <a href="#">Services</a>
          </li>
          <li className="p-3">
            <a href="#" className="flex flex-row">
              Page
              {/* <FaChevronDown /> */}
              <Image
                className="ml-1"
                src="/images/arow.svg"
                width={15}
                height={15}
                alt="image"
              />
            </a>
          </li>
          <li className="p-3">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="my-0 mx-auto">
        <button
          className={`${btnclassname} pt-[17px] pb-[18px] pl-[36px] pr-[35.38px] flex items-center text-center m-0 rounded`}
        >
          Make an Appointment
        </button>
      </div>
    </Wrapper>
    </>
  );
}

export default Navbar;
