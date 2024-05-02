import React from "react";
import { SlArrowDown } from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";
import { TiBell } from "react-icons/ti";
import { IoAddOutline } from "react-icons/io5";
function Navbar(){
    return(
        <div>
            <div className="flex w-screen h-20 bg-slate-800 items-center justify-end">
                <div className="flex justify-center w-full">
                <div className="flex w-full justify-center h-12 items-center rounded-full mr-3 truncate">
                    <div className="flex bg-slate-200 rounded-l-full w-24 h-12 justify-center items-center text-slate-500 font-medium">
                    <button>Patients</button>
                    <SlArrowDown></SlArrowDown>
                    </div>
                    <div className=" flex w-full md:w-96 justify-between items-center">
                    <input placeholder="Search" className=" flex w-full md:w-96 h-12 rounded-r-full"></input>
                    <SlMagnifier className=" text-2xl relative right-8 text-gray-500 font-bold"></SlMagnifier>
                    </div>
                    <div className="flex text-white bg-green-600 w-28 h-12 justify-center items-center rounded-full max-sm:flex hover:cursor-pointer">
                       <IoAddOutline className="flex text-2xl font-bold"></IoAddOutline>
                       Add New
                     </div>
                </div>
                </div>
                <div className="flex w-40 justify-between mr-6">
                    <div className="flex">
                    <div className=" w-3 h-3 bg-red-600 rounded-full relative left-10 bottom-1"></div>
                   <div className="flex justify-center items-center  bg-slate-600 w-12 h-12 rounded-full text-gray-400 text-3xl hover:cursor-pointer">
                      <TiBell></TiBell>
                    </div>
                    </div>
                   
                    <div className="flex justify-center items-center w-12 h-12 rounded-full bg-slate-600 hover:cursor-pointer">
                        <img className=" w-11 h-11 rounded-full" src={require('../assest/profile.jpeg')} alt="loading" width={50} height={50}></img>
                    </div>
                </div>
                
                
                   
            </div>
        </div>
    )
}

export default Navbar;