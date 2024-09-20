import Image from "next/image";
import React from "react";
import styles from "./style.module.css";
import { Six_Caps } from "next/font/google";

const sixCaps = Six_Caps({
  weight: ["400"],
  subsets: ["latin"],
});

export const Home = () => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-4 w-screen h-screen text-center">
      <h1
        className={`font-bold text-[calc(1rem+16.15vw)] ${sixCaps.className} text-white uppercase leading-[calc(1rem+14.15vw)]`}
      >
        Shadebyte
      </h1>
      <div className="flex flex-col justify-center items-center text-[#6d6d6d] text-center uppercase">
        <p>We create products that serves both users</p>
        <p>and businesses and drive real results.</p>
      </div>
      <div className="flex items-center gap-2 bg-white mt-4 px-3 py-2 rounded-md transition-all duration-500 cursor-pointer ease-in-out group">
        <div className="relative">
          <Image
            src="/icons/add.svg"
            width={18}
            height={18}
            alt="Add"
            className="top-1/2 left-1/2 z-0 absolute transition-all -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-[5px] duration-500 ease-in-out"
          />
          <div className="top-1/2 left-1/2 absolute flex justify-center items-center bg-gray-400 rounded-full transition-all -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-[30px] duration-500 ease-in-out size-[32px]">
            <h1 className="text-[10px] text-white">You</h1>
          </div>
          <Image
            src="/images/person.avif"
            width={32}
            height={32}
            alt="Person"
            className="group-hover:mr-10 relative z-10 border-[2px] border-black rounded-full transition-all duration-500 ease-in-out"
          />
        </div>
        <h1 className="group-hover:ml-8 font-medium text-black text-sm transition-all duration-500 ease-in-out">
          Book a 15-min call
        </h1>
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="flex justify-center items-center bg-green-500 rounded-full size-3">
          <div className="bg-green-500 rounded-full animate-ping size-3" />
        </div>
        <h1 className="font-normal text-sm">Let&apos;s Connect!</h1>
      </div>
      <div className="bottom-10 absolute flex flex-col justify-center items-center px-10">
        <div className={styles.scroll} />
      </div>
      <div className="bottom-16 absolute flex flex-col justify-center items-center">
        <h1 className="text-white translate-x-[12px]">Scroll For More</h1>
      </div>
    </div>
  );
};
