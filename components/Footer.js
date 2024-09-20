import Image from "next/image";
import React from "react";
import { Archivo } from "./Fonts";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div
      className={`${Archivo.className} bg-[#000A2D] text-[#FFFFFF]`}
      style={{ padding: "60px 34px 15px 200px" }}
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
        <div className="mt-7">
          <h1 style={{borderBottom: '2px solid #3267FF'}}>Helpfull Link</h1>
        </div>
        <div className="mt-7">di</div>
        <div className="mt-7">s</div>
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

export default Footer;
