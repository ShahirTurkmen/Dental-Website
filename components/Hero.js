'use client'
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`
function Hero() {
  return (
    <Wrapper>
      <div>
        <div className="flex flex-col items-start">
          <p className="rounded border border-[#EEE] p-2 text-[#3267FF]">
            <Image
              className="w-auto h-auto mr-3"
              src="/images/hello.svg"
              width={14}
              height={14}
              alt="image"
            />
            Hey! We Are Dentic
          </p>
        </div>
        <div></div>
      </div>
    </Wrapper>
  );
}

export default Hero