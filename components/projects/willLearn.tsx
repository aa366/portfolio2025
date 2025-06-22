import React from "react";
import data from "@/data/home.json";
import dataP from "@/data/projects.json";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { timeStamp } from "console";

const WillLearn = () => {
  const { projects, icon, links } = dataP;
  const { personal: infos } = data;
  const { best } = projects;

  return (
    <div className="flex flex-col gap-2 items-center">
      <button className="p-[3px] relative w-fit flex capitalize ">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  text-black  dark:text-white rounded-[6px]  relative group transition duration-200  bg-transparent font-bold">
          what i'll learn
        </div>
      </button>
      <div className="gap-2 flex flex-col items-center p-[5%]">
        <h1 className="text-3xl font-bold ">
          {" "}
          i'm always seek knowledge And Learning for now
        </h1>
        <ul className="flex flex-wrap justify-between gap-2 w-full text-2xl">
            
          {infos.willLearn.map((ele) => (
            <li
              key={ele + timeStamp()}
              className=" bg-gray-500 p-2 rounded-2xl"
            >
          
          
            {ele}
          
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WillLearn;
