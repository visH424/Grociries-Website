import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20 ">
      <div className=" flex flex-wrap gap-y-10 max-w-[1400px] mx-auto px-10">
        <div className="flex-1 basis-[300px]">
          <a className="text-4xl font-bold" href="">
            Gr<span className="text-orange-600 uppercase">o</span>cify
          </a>
          <p className="text-zinc-600 mt-6 max-w-[350px] ">
            Bread for a high content of subtances, our products are all fresh
            and healthy
          </p>
          <p className="text-zinc-800 mt-6 ">2025 &copy; all rights reserved</p>
        </div>
      
      <ul className="flex-1 ">
        <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
        </li>
        <li className="mt-6">
            <a href="#" className="hover:text-orange-500">About</a>
        </li>
        <li className="mt-6">
            <a href="#" className="hover:text-orange-500">FAQ's</a>
        </li>
      </ul>

       <ul className="flex-1">
        <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
        </li>
        <li className="mt-6">
            <a href="#" className=" text-zinc-600 hover:text-orange-500">Support-center</a>
        </li>
        <li className="mt-6">
            <a href="#" className=" text-zinc-600 hover:text-orange-500">Feedback</a>
        </li>
        <li className="mt-6">
            <a href="#" className="  text-zinc-600 hover:text-orange-500">Contact-us</a>
        </li>
      </ul>
      <div className="flex-1">
        <h5 className="text-zinc-800 text-2xl font-bold ">
       Stay Connected
        </h5>
        <p className="mt-6 text-zinc-600">
            Question or Feedback?<br/>
            We' d love to hear from you 
        </p>
        <div className=" bg-white flex p-1 rounded-lg mt-6 ">
            <input  className="h-[5vh] pl-4  flex-1 focus:outline-none " type="email" name="email" id="email" autoComplete="off" placeholder="Email Address"/> 
            <button className="bg-orange-500 p-2 text-white rounded-lg cursor-pointer "><IoIosArrowForward/></button>
        </div>
      </div>
       </div>
    </footer>
  );
};

export default Footer;
