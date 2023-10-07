"use client";

import Navbar from "./navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <div className="sm:max-2xl:flex h-screen">
        <div className="flex justify-center w-full h-fit">
          <Image
            src="/DM.png"
            width={500}
            height={500}
            alt="Deviant Misfits Logo"
          />
        </div>
        <div className="ml-[-10px] text-lg leading-8 text-white w-full flex justify-center gap-x-5 sm:max-2xl:mt-10">
          <p className="text-center w-28 font-bold">ABOUT US</p>
          <p className="text-justify w-52">
            We are Deviant Misfits. <br /> We are a chill ass guild with many contents. <br />
            You mfs come join and you'll get to talk to femboys for free!
          </p>
        </div>
        <div className="ml-[-10px] text-lg leading-8 text-white w-full flex flex-wrap justify-center gap-x-5 sm:max-2xl:mt-10 ml-14 h-fit">
          <p className="text-center w-28 font-bold">REQUIREMENT</p>
          <p className="text-justify w-52">
            - Sane <br />- Preferably 5M PvP Fame <br /> - Have at least 1 brain cell
          </p>
        <div className="w-full flex justify-center my-10 sm:max-2xl:ml-16">
          <button className="rounded-full bg-[#0D7377] p-5 text-white w-40 h-[70px]">
            Join Us!
          </button>
        </div>
        </div>
      </div>
    </main>
  );
}
