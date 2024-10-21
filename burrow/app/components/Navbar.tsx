"use client"

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!nav);
    };

    return (
        <header>
           <div className="m-auto md:px-8 lg:px-0 max-w-[960px] flex items-center justify-between
           text-slate-800">
               <ul className="hidden md:flex items-center justify-between gap-x-8">
                   <a href="" className="text-xl">Home</a>
                   <a href="" className="text-xl">About Us</a>
               </ul>
               <Link href="/" className="pl-8 py-3 md:px-0 flex items-center justify-center">
                   <img src="/logo.png" style={{height:"4rem",width:"4rem",marginRight:"1rem"}}></img>
                   <img src="/textlogo.png" style={{height:"1.5rem",width:"9rem"}}></img>
               </Link>
               <ul className="hidden md:flex items-center justify-between gap-x-8">
                   <a href="" className="text-xl">Browse</a>
                   <a href="" className="text-xl">Contact</a>
               </ul>
               <button className="md:hidden pr-8" onClick={toggleNav}>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                   </svg>
               </button>
           </div> 
               <div
                    className={`block md:hidden fixed inset-y-0 left-0 transform bg-white shadow-2xl
                    transition-transform duration-300 ease-in-out
                    ${nav ? "translate-x-0" : "-translate-x-full"}`}
                    style={{ width: "300px" }}
                >
                <div className="flex flex-col p-4">
                    <Link href="/" className="py-3 md:px-0 flex items-center">
                        <img src="/logo.png" style={{height:"4rem",width:"4rem",marginRight:"1rem"}}></img>
                    </Link>
                    <Link href="/" className="py-2 text-lg" onClick={toggleNav}>Home</Link>
                    <Link href="/about" className="py-2 text-lg" onClick={toggleNav}>About Us</Link>
                    <Link href="/browse" className="py-2 text-lg" onClick={toggleNav}>Browse</Link>
                    <Link href="/contact" className="py-2 text-lg" onClick={toggleNav}>Contact</Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
