import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  return (
    <div>
      <header className="bg-white fixed right-0 left-0 z-50">
        <nav className="flex justify-between  max-w-[1400px] items-center     px-20 h-[14vh]">
          <Link className="text-4xl font-bold" to="/">
            Gr<span className="text-orange-600 uppercase">o</span>cify
          </Link>
          <ul className="md:flex items-center gap-x-5 hidden">
            <li>
              <a
                className="font-bold tracking-wider hover:text-orange-600"
                href=""
              >
                Home
              </a>
            </li>

            <li>
              <a
                href=""
                className="font-bold tracking-wider hover:text-orange-600 "
              >
                AboutUs
              </a>
            </li>

            <li>
              <a
                href=""
                className="font-bold tracking-wider hover:text-orange-600"
              >
                Process
              </a>
            </li>

            <li>
              <a
                href=""
                className="font-bold tracking-wider hover:text-orange-600"
              >
                Contact-Us
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-x-5">
            <div className="md:flex  p-1 border-2 border-orange-500 rounded-full hidden">
              <input
                className="flex-1 h-[5vh] px-3 focus:outline-none"
                type="text"
                id="text"
                placeholder="Search..."
                autoComplete="off"
              ></input>
              <button className="bg-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl ">
                <IoIosSearch />
              </button>
            </div>

            <a href="" className=" ">
              <FaHeart />
            </a>
            <a href="" className="text-2xl ">
              <HiMiniShoppingBag />
            </a>
            <button href="" className="text-3xl  md:hidden" onClick={toggleMenu}>
              {showMenu ? <TbMenu3 /> : <TbMenu2 />}
            </button>
          </div>
          <ul
            className={`flex  flex-col gap-y-12  bg-orange-500/15 backdrop-blur-xl rounded-xl items-center gap-x-5 md:hidden absolute top-30 -left-full transform -translate-x-1/2 ${
              showMenu ? "left-1/2 " : ""
            }`}
          >
            <li>
              <a
                className="font-bold tracking-wider hover:text-orange-600"
                href=""
              >
                Home
              </a>
            </li>

            <li>
              <a
                href=""
                className="font-bold tracking-wider hover:text-orange-600 "
              >
                AboutUs
              </a>
            </li>

            <li>
              <a
                href=""
                className="font-bold tracking-wider hover:text-orange-600"
              >
                Process
              </a>
            </li>

            <li>
              <a
                href=""
                className="font-bold tracking-wider hover:text-orange-600"
              >
                Contact-Us
              </a>
            </li>
            <li className="flex  p-1 border-2 border-orange-500 rounded-full md:hidden">
              <input
                className="flex-1 h-[5vh] px-3 focus:outline-none"
                type="text"
                id="text"
                placeholder="Search..."
                autoComplete="off"
              ></input>
              <button className="bg-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
                <IoIosSearch />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
