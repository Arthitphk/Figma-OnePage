import React from 'react'
import Pathimg from "../Images/Path.png"
import { useState } from "react";

const Top = () => {
    const [open , setOpen] = useState(false);
    const toggleMenu = () => {
    setOpen(!open)
  };

  return (
   
    <div className="relative">
        <div>
            <div className=''  style={{ backgroundImage: `url(${Pathimg})`, backgroundRepeat: 'no-repeat', backgroundPosition: '100%', height:'100%'}}>
                <nav className="p-10 container mx-auto">
                    <div  className="flex  justify-between">
                        <ul className="hidden md:flex space-x-4 py-3 px-6">
                            <li><a href="/Home" className=" text-Themecolor1 font-bold">Home</a></li>
                            <li><a href="#" className="  text-Themecolor1 font-bold">About</a></li>
                            <li><a href="#" className="  text-Themecolor1 font-bold">Contact</a></li>  
                        </ul>
                        <div className=" font-bold text-Themecolor2 text-2xl">
                            <p className="p-1">Landing</p>
                        </div>
                        <div className="p-1">
                            <button class="bg-Themecolor2 hidden 2xl:block xl:block lg:block md:block
                             sm:hidden  hover:bg-pink-700 text-Themewhite font-bold py-2 px-14 hover:bg-Themecolor1">
                                Buy now
                            </button>
                        </div>
                        <div className="md:hidden">
                            <button id="menu-toggle">
                                <svg  
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    viewBox=" 0 0 24 24"
                                    className="w-6 h-6"
                                    onClick={toggleMenu}
                                    >
                                    <path d="M4 6H16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>  
                    </div>

                    {open ? (
                        <ul className="flex-col md:hidden ms-2 hover:border-b-4 border-indigo-500">
                        <li><a href="/Home" className=" text-Themecolor1 font-bold">Home</a></li>
                        <li><a href="#" className="  text-Themecolor1 font-bold">About</a></li>
                        <li><a href="#" className="  text-Themecolor1 font-bold">Contact</a></li>
                        </ul>
                    ) : null }
                </nav>
                <div className="relative">
                        <div className="container mx-auto 2xl:grid 2xl:grid-cols-2  xl:grid xl:grid-cols-2  lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 gap-4 md:grid md:grid-cols-1 2xl:pb-72 xl:pb-52 lg:pb-40 md:pb-44"> 
                                <div className=" 2xl:mt-60 xl:mt-60 lg:mt-60 md:mt-32  sm:mt-20 mt-28 2xl:pb-0 xl:pb-0 lg:pb-0 md:pb-0 sm:pb-10 pb-12 pl-10">
                                    <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-wrap text-5xl font-bold">Introduce Your Product Quickly & Effectively</h1>
                                    <p className="my-10 2xl:text-2xl xl:text-2xl lg:text-2xl text-wrap text-1xl">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                    mus. <br/><br/>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                    </p>
                                    <div className="flex gap-10 flex-wrap ">
                                        <button class="bg-Themecolor2 hover:bg-pink-700  text-Themewhite font-bold py-2 px-11 hover:bg-Themecolor1">
                                        Purchase UI Kit
                                        </button>
                                        <button class=" border-Themeblack border-4 text-Themecolor2 font-bold py-2 px-12 hover:bg-Themecolor1">
                                        Learn More
                                        </button>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="absolute top-32 right-0">
                                        <img className='w-full object-cover md:h-full hidden 2xl:block xl:block lg:block md:hidden' src="src\Images\Group.png" alt=""/>
                                    </div>
                                </div>
                        </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Top