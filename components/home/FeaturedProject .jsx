"use client";
import React from "react";
import Link from "next/link";
import data from "@/data/projects.json";
import { Lens } from "@/components/ui/lens";

// Aurora Background

const FeaturedProject = () => {
  const { projects, icon } = data;
  const { best } = projects;



  return (
    <div className="flex flex-col justify-center items-center gap-3 w-[100%]">
  

      <div className="p-2 w-full flex justify-center flex-wrap gap-2">
        {best.map(({ deploy, github, img, title, tech }) => (
          <div
            key={title + deploy}
            className="grid p-5 border bg-gray-400 dark:bg-gray-600  rounded-2xl shadow-sm   auto-cols-fr "
          >
            <Lens>
              <img src={img} alt={""} className="w-100  object-contain" />
            </Lens>

            <h3 className="text-2xl capitalize">
              {title + " "}
              <a
                href={deploy}
                target="_blanck"
                className="text-blue-800 dark:text-blue-300 "
              >
                See
              </a>
            </h3>

            <div className="flex justify-between">
              <div className="flex w-fit items-center ">
                {tech.map((ele) => (
                  <img
                    src={icon[ele]}
                    alt={ele}
                    key={icon[ele] + deploy}
                    className={`w-7 h-7  `}
                  />
                ))}
              </div>

              <a href={github} target="_blacnk">
                <img src={icon.Github} alt="" className="w-10" />
              </a>
            </div>
          </div>
        ))}
      </div>
          <button className="p-[3px] relative cursor-pointer w-fit flex ">

        <Link href={`/projects `} className="flex w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2 bg-gray-200 text-black dark:bg-black dark:text-white rounded-[6px]  relative group transition duration-200  hover:bg-transparent">
            View My Projects
          </div>
        </Link>
      </button>
    </div>
  );
};

export default FeaturedProject;
