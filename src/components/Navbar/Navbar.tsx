"use client";
import { useState } from "react";
import style from "./style.module.css";
const Navbar = () => {
  return (
    <nav
      className={
        "flex w-full absolute top-0 z-50 bg-black-900 bg-white bg-opacity-75  items-center p-10 justify-between " +
        style["mainNav"]
      }
    >
      <a href="/" className=" flex items-center">
        <img src="/logo-trans.png" className="h-7  p-0 invert " alt="Logo" />
        <span className="text-blue-900 font-main  text-xl">
          Hygge<span className="text-blue-950 font-bold">X</span>
        </span>
      </a>

      <ul className="flex gap-10 text-sm font-main">
        <li className="">
          <a
            href="/"
            className="hover:!text-main-400 transition-colors duration-300`"
          >
            Home
          </a>
        </li>

        <li className="">
          <a
            href="/blogs"
            className="hover:!text-main-400 transition-colors duration-300`"
          >
            Flashcard
          </a>
        </li>
        <li className="">
          <a
            href="/news"
            className="hover:!text-main-400 transition-colors duration-300`"
          >
            Contact
          </a>
        </li>
        <li className="">
          <a
            href="/aboutUs"
            className="hover:!text-main-400 transition-colors duration-300`"
          >
            Faq
          </a>
        </li>
        <li className="">
          <a
            href="/contactUs"
            className="hover:!text-main-400 p-3 px-10 rounded-3xl transition-colors duration-300 bg-gradient-to-b from-blue-900 from-10% to-blue-700 font-bold text-white to-90%`"
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
