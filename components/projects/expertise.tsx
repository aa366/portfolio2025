import React from "react";
import data from "@/data/home.json";
import dataP from "@/data/projects.json";
import { LinkPreview } from "@/components/ui/link-preview";
import { timeStamp } from "node:console";

const Expertise = ({classes}:{classes?:string;}) => {
  const { projects, icon, links } = dataP;
  const { personal: infos } = data;
  const { best } = projects;

  return (
    <div className="flex flex-col gap-3 items-center w-full">

      <button className={`p-[3px] relative w-fit flex capitalize ${classes}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  text-black  dark:text-white rounded-[6px]  relative group transition duration-200  bg-transparent font-bold">
          expertise
        </div>
      </button>
      <div className="flex flex-wrap bg-gradient-to-r from-gray-300 to-gray-700   w-fit p-[1%] rounded-2xl justify-self-center  z-999">
        {infos.skills.map((ele) => (
          <LinkPreview url={links[ele]} className="" key={ele+timeStamp()}>
            <img
              src={icon[ele]}
              alt={ele}
              className="w-10 h-10 object-contain "
            />
          </LinkPreview>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
