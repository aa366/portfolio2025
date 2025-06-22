import React from "react";
import data from "@/data/home.json";
import dataP from "@/data/projects.json";
import { Lens } from "@/components/ui/lens";

const Projects = () => {
  const { projects, icon, links } = dataP;
  const { personal: infos } = data;
  const { best } = projects;

  return (
    <div className="flex flex-col gap-3 items-center w-full ">

      <button className="p-[3px] relative w-fit flex capitalize ">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  text-black  dark:text-white rounded-[6px]  relative group transition duration-200  bg-transparent font-bold">
          projects
        </div>
      </button>

      <div className=" w-full flex justify-center flex-wrap  gap-4 p-4">
        {best.map(
          ({
            deploy,
            github,
            img,
            title,
            tech,
            description,
            challenges,
            time,
          }) => (
            <div
              key={title + deploy}
              className=" p-5 border bg-gray-400 dark:bg-gray-600  rounded-2xl shadow-sm  flex flex-col gap-1  justify-between  flex-1 min-w-[300px] max-w-[500px] items-center"
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
             <div className="flex flex-col justify-between">
                 <h5 className="text-2xl  break-words">
                <span className="text-amber-700 dark:text-amber-300 font-bold ">
                  Description :{" "}
                </span>
                {description}
              </h5>
              <h5 className="text-2xl ">
                <span className="text-amber-700 dark:text-amber-300 font-bold ">
                  Challenges :{" "}
                </span>
                {challenges}
              </h5>
              <h5 className="text-2xl ">
                {" "}
                <span className="text-amber-700 dark:text-amber-300 font-bold ">
                  Time :{" "}
                </span>
                {time} days
              </h5>

             </div>

              <div className="flex justify-between w-full">

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
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
