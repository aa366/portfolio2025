"use client";
import { FaBars } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Navbar({otherClasses = ""}) {
  const [navShow, setNavShow] = useState("right-[100%]");
  const [divShow, setDivShow] = useState("hidden");

  const handleShow = () => {
    if (navShow == "right-0") {
      setNavShow("right-[100%]");
      setDivShow("hidden")
    } else if (navShow == "right-[100%]") {
      setNavShow("right-0");
      setDivShow("block")
    }
  };

  return (
    <nav
      className={`nav-bar w-full flex p-4 sticky text-black bg-white dark:bg-gray-900 dark:text-white text-4xl  justify-between px-[5%] relative ${otherClasses}`}
    >
      <div className="self-center">Abdelwahab</div>

      <div className={` fixed h-screen w-screen bg-gray-300 left-0 top-0 opacity-50 ${divShow} md:hidden`}onClick={handleShow}/>

      <button className="md:hidden cursor-pointer" onClick={handleShow}>
        <FaBars />
      </button>
      
      <ul
        className={`flex flex-col items-center md:flex-row gap-5 text-2xl h-screen  md:h-full absolute  dark:bg-gray-900  dark:text-white p-2 transition md:transition-none ${navShow} md:static top-0`}
      >
        <IoMdClose
          className="  md:hidden cursor-pointer hover:text-amber-500 text-4xl "
          onClick={handleShow}
        />
        <li
          onClick={handleShow}
          className="cursor-pointer hover:bg-gray-500 rounded-lg p-3"
        >
          <Link className="h-full w-full" href={`/`}>
            Home
          </Link>
        </li>
        <li
          onClick={handleShow}
          className="cursor-pointer hover:bg-gray-500 rounded-lg p-3  "
        >
          <Link className="h-full w-full " href={`/projects`}>
            Projects
          </Link>
        </li>
        <li
          onClick={handleShow}
          className="cursor-pointer hover:bg-gray-500 rounded-lg p-3  "
        >
          <Link className="h-full w-full " href={`/about`}>
            About
          </Link>
        </li>
        <li
          onClick={handleShow}
          className="cursor-pointer hover:bg-gray-500 rounded-lg p-3  "
        >
          <Link className=" h-full w-full " href={`/contact`}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
