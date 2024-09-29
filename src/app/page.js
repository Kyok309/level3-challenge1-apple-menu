"use client";
import { useState } from "react";
import Navbar from "./components/navbar";
import Section from "./components/section";
import Section2 from "./components/section2";
import clsx from "clsx";

export default function Home() {
  return (
    <main className="min-h-full bg-white antialiased text-center">
      <Navbar/>
      <div className="mt-[44px] tabletMax:mt-[48px] flex flex-col items-center">
        <div className="bg-white flex justify-center flex-wrap text-sm py-3 max-w-[300px] tablet:max-w-[460px] desktop:max-w-fit">
          <span className="font-sfProTextLight text-[#1d1d1f] leading-[20.5883px]">Now through 9/30, get a gift card up to $150 when you buy Mac or iPad with education savings.&nbsp;
            <a href="" className="text-[#06c]">
              <span className="hover:underline">Shop</span>
              <span>&nbsp; &gt;</span>
            </a>
          </span>
        </div>
        <Section/>
        <Section2/>  
      </div>
    </main>
  );
}
