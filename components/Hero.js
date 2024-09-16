"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
function Hero() {
  return (
    <Wrapper className="my-[70px] mx-20 justify-between">
      {/* <div> */}
        <div className="flex flex-col items-start my-[122px]">
          <p className="flex flex-row rounded border border-[#EEE] p-2 text-[#3267FF]" style={{padding: '6px 15.81px 7.39px 16.97px'}}>
            <Image
              className="w-auto h-auto mr-1"
              src="/images/hello.svg"
              width={14}
              height={14}
              alt="image"
            />
            Hey! We Are Dentic
          </p>
        </div>
        <div>imgss</div>
      {/* </div> */}
    </Wrapper>
  );
}

export default Hero;
