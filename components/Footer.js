import Image from "next/image";
import React from "react";
import { Archivo } from "./Fonts";
import { FaTwitter } from "react-icons/fa";
import { FooterLinks } from "./data";
import Underline from "./Underline";
import ReactBootstrap from "react-bootstrap"
function Footer() {
  return (
    <div
      className={`${Archivo.className} bg-[#000A2D] text-[#FFFFFF]`}
      style={{ padding: "60px 34px 15px 90px" }}
    >
      <div className="flex flex-row p-3 justify-between">
        <div
          className="flex flex-col gap-[44.99px] items-start justify-center h-auto w-auto"
          style={{ padding: "10px 10px 10.01px 10px" }}
        >
          <Image
            className=""
            src="/images/Dental-White.svg"
            width={268}
            height={60}
            alt="image"
          />
          <p className="text-[16px] ml-5">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit.
          </p>
          <div className="flex flex-row text-[30px] ml-5">
            <p className="mr-3 text-[18px]">רּ</p>
            <p className="mr-3 self-center">
              <FaTwitter className="text-[18px] m-0 p-0" />
            </p>
            <p className="mr-3 text-[18px]">ﭬ</p>
            <p className="text-[18px]">וֹ</p>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-[18px]">Helpfull Link</h1>
          <Underline
            borderColor="#3267FF"
            borderShape="borderTop"
            borderSize="2px"
            borderTheme="solid"
            height="2px"
            width="70px"
            marginTop="12px"
          />

          <ul className="mt-6">
            {FooterLinks.map((link, index) => {
              index =
                index +
                Math.floor(Math.random() * Math.floor(Math.random() * 671));
              return (
                <li className="mt-2" key={index}>
                  <a href={link.href} className="mt-4">
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-5">
          <h1 className="text-[18px]">Support</h1>
          <Underline
            borderColor="#3267FF"
            borderShape="borderTop"
            borderSize="2px"
            borderTheme="solid"
            height="2px"
            width="57px"
            marginTop="12px"
          />
          <ul className="mt-6">
            {FooterLinks.map((link, index) => {
              index =
                index +
                Math.floor(Math.random() * Math.floor(Math.random() * 671));
              return (
                <li className="mt-2" key={index}>
                  <a href={link.href} className="mt-4">
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-5">
          <h1 className="text-[18px]">Contact Us</h1>
          <Underline
            borderColor="#3267FF"
            borderShape="borderTop"
            borderSize="2px"
            borderTheme="solid"
            height="2px"
            width="70px"
            marginTop="12px"
          />
          
        </div>
      </div>
      <br />
      <div
        style={{ borderTop: "1px solid rgba(255, 255, 255, 0.09)" }}
        className="flex flex-row justify-between ml-8"
      >
        <div className="mt-3">Dental</div>
        <div className="mt-3">Copyright &copy; 2023. All rights reserved</div>
      </div>
    </div>
  );
}

/* 
!!!css
form {
  display:flex;
  flex-direction:row;
  
  border:1px solid grey;

  padding:1px;
}

input {
  flex-grow:2;
  border:none;
}

input:focus {
  outline: none;
}

form:focus-within { 
  outline: 1px solid blue 
}

button {
  border:1px solid blue;
  background:blue;
  color:white;
} 


!!!html
<form>
  <input />
  <button>Go</button>
</form>
*/
export default Footer;
