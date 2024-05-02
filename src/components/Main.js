import React from "react";
import { CgProfile } from "react-icons/cg";
import { GiOilDrum } from "react-icons/gi";
import { BiFilterAlt } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuStickyNote } from "react-icons/lu";
import { HiOutlineEyeDropper } from "react-icons/hi2";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdPlayArrow } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdOutlineNotes } from "react-icons/md";
import { HiMiniBanknotes } from "react-icons/hi2";
import { FaMoneyCheckDollar } from "react-icons/fa6";
function Main(){
    return (
        <div className="flex">
             <div className=" w-2/12 h-screen border-r-2 border-slate-100">
                <span className=" text-slate-500 font-medium m-3 flex top-3 max-sm:text-xs">Dashboards</span>
                <div className="flex flex-col justify-center items-center gap-1 mt-2">
                    <div className="w-10/12 h-20 bg-slate-100 flex flex-col justify-center items-center rounded-t-lg text-slate-500 font-medium drop-shadow-lg">
                        
                        <CgProfile className="text-3xl"></CgProfile>
                        <p className=" text-sm font-semibold text-slate-600 max-sm:text-xs">Patients</p>
                    </div>
                    <div className="w-10/12 h-20 bg-green-600 flex flex-col justify-center items-center text-white drop-shadow-lg" >
                       
                        <GiOilDrum className="text-3xl"></GiOilDrum>
                        <p className=" text-sm font-semibold max-sm:text-xs">HR</p>
                    </div>
                    <div className="w-10/12 h-20 bg-slate-100 flex flex-col justify-center items-center text-slate-500 font-medium drop-shadow-lg">
                       
                        <BiFilterAlt className="text-3xl"></BiFilterAlt>
                         <p className=" text-sm font-semibold text-slate-600 max-sm:text-xs">Labs</p>
                    </div>
                    <div className="w-10/12 h-20 bg-slate-100 flex flex-col justify-center items-center rounded-b-lg text-slate-500 font-medium drop-shadow-lg">
                        <BsShop className="text-3xl"></BsShop>
                        <p className=" text-sm font-semibold text-slate-600 max-sm:text-xs">Pharma</p>
                    </div>
                </div>
                <span className=" text-slate-500 font-medium m-3 flex top-3 max-sm:text-xs">Processes</span>
                <div className="flex flex-col justify-center items-center gap-1 mt-2">
                    <div className="w-10/12 h-20 bg-slate-100 flex flex-col justify-center items-center rounded-t-lg text-slate-500 font-medium drop-shadow-lg">
                        
                        <IoNewspaperOutline className="text-3xl"></IoNewspaperOutline>
                        <p className=" text-sm font-semibold text-slate-600 max-sm:text-xs">Registration</p>
                    </div>
                    <div className="w-10/12 h-20 bg-slate-100 flex flex-col justify-center items-center text-slate-500 drop-shadow-lg" >
                       
                        <LuStickyNote className="text-3xl"></LuStickyNote>
                        <p className=" text-sm font-semibold max-sm:text-xs">Consultation</p>
                    </div>
                    <div className="w-10/12 h-20 bg-slate-100 flex flex-col justify-center items-center text-slate-500 font-medium drop-shadow-lg">
                       
                        <HiOutlineEyeDropper className="text-3xl"></HiOutlineEyeDropper>
                         <p className=" text-sm font-semibold text-slate-600 max-sm:text-xs">Tests & Reports</p>
                    </div>
                    <div className="w-10/12 h-20 bg-slate-100 flex flex-col justify-center items-center rounded-b-lg text-slate-500 font-medium drop-shadow-lg">
                        <HiOutlineBanknotes className="text-3xl"></HiOutlineBanknotes>
                        <p className=" text-sm font-semibold text-slate-600 max-sm:text-xs">Billing</p>
                    </div>
                </div>
             </div>
             <div className=" flex flex-col items-center w-10/12 h-screen bg-slate-100 px-3">
                <div className=" w-full h-10 rounded-lg bg-white m-3">
                    
                    <div className="flex items-center w-fit h-10 border-b-2 border-green-600 gap-1 text-green-600 text-xl ml-2">
                        <HiOutlineUserGroup></HiOutlineUserGroup>
                        Consultants
                    </div>
                </div>
                <div className="flex items-center w-full h-14 rounded-lg bg-white">
                    
                    <div className="flex items-center justify-center h-14 rounded-l-lg border-b-2 bg-green-600 w-1/12 gap-1 text-white text-xl">
                        
                        Filters
                    </div>
                    <MdPlayArrow className="flex -left-3 text-4xl text-green-600 relative"></MdPlayArrow>
                    <div className="flex w-11/12 items-center gap-8">
                    <select className=" w-40 h-10 border-slate-200 border rounded-full drop-shadow-sm">
                       <option> Select Range</option>
                    </select>
                    <div className="flex justify-center items-center gap-3">
                        <input name="ty" type="radio" className="w-7 h-7 "></input>
                        <label className=" text-slate-500">Summary</label>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                       <input name="ty" type="radio" className="w-7 h-7 "></input>
                        <label className=" text-slate-500">Brach Wise</label>
                    </div> 
                        
                    </div>
                </div>
                <div className=" grid  grid-cols-4 gap-10 max-lg:grid-cols-2 max-lg:h-64 justify-between items-center w-full h-28 mt-4">
                    <div className="flex w-11/12 h-28 bg-white rounded-md border-l-4 border-orange-100">
                       <div className=" w-3/5 h-28 m-4">
                          <p className="text-green-600 font-medium">Consultant Count</p>
                          <h1 className="text-2xl text-slate-700 font-bold">90 / 900</h1>
                          <p className=" text-slate-400 font-light">Today/period</p>
                       </div>
                       <div className=" flex justify-center items-center w-14 h-14 rounded-full bg-orange-100 relative top-5 right-3">
                         <HiMiniUserGroup className="text-2xl text-slate-600"></HiMiniUserGroup>
                       </div>
                    </div>
                    <div className="flex w-11/12 h-28 bg-white rounded-md border-l-4 border-blue-200">
                       <div className=" w-3/5 h-28 m-4">
                          <p className="text-green-600 font-medium">Consultation</p>
                          <h1 className="text-2xl text-slate-700 font-bold">11 / 25</h1>
                          <p className=" text-slate-400 font-light">Today/period</p>
                       </div>
                       <div className=" flex justify-center items-center w-14 h-14 rounded-full bg-blue-200 relative top-5 right-3">
                         <MdOutlineNotes className="text-2xl text-slate-600"></MdOutlineNotes>
                       </div>
                    </div>
                    <div className="flex w-11/12 h-28 bg-white rounded-md border-l-4 border-green-200">
                       <div className=" w-3/5 h-28 m-4">
                          <p className="text-green-600 font-medium">Labs</p>
                          <h1 className="text-2xl text-slate-700 font-bold">25 / 560</h1>
                          <p className=" text-slate-400 font-light">Today/period</p>
                       </div>
                       <div className=" flex justify-center items-center w-14 h-14 rounded-full bg-green-200 relative top-5 right-3">
                         <HiMiniBanknotes className="text-2xl text-slate-600"></HiMiniBanknotes>
                       </div>
                    </div>
                    <div className="flex w-11/12 h-28 bg-white rounded-md border-l-4 border-violet-200">
                       <div className=" w-3/5 h-28 m-4">
                          <p className="text-green-600 font-medium">Deit Plans</p>
                          <h1 className="text-2xl text-slate-700 font-bold">25 / 250</h1>
                          <p className=" text-slate-400 font-light">Today/period</p>
                       </div>
                       <div className=" flex justify-center items-center w-14 h-14 rounded-full bg-violet-200 relative top-5 right-3">
                         <FaMoneyCheckDollar className="text-2xl text-slate-600"></FaMoneyCheckDollar>
                       </div>
                    </div>
                </div>
                  <div className=" w-full h-screen bg-white mt-8 rounded-lg">
                    <h1 className="text-xl font-bold text-slate-600 m-6 flex  relative left-5">Consultants</h1>
                    <div className="w-full h-96 flex justify-center">
                    <table className="w-11/12 h-96 border-collapse border border-slate-400">
                        <thead>
                            <tr>
                                <th className=" w-1/4 h-14 border text-slate-700 border-slate-300">NAME</th>
                                <th className="w-1/4 border text-slate-700 border-slate-300">PATIENT COUNT</th>
                                <th className="w-1/4 border text-slate-700 border-slate-300">LABS</th>
                                <th className="w-1/4 border text-slate-700 border-slate-300">DIET PLANS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                 <th className="border text-slate-500 font-normal border-slate-300">JohnSmith</th>
                                 <th className="border text-slate-500 font-normal border-slate-300">12</th>
                                 <th className="border text-slate-500 font-normal border-slate-300">3</th>
                                 <th className="border text-slate-500 font-normal border-slate-300">6</th>
                            </tr>
                            <tr>
                               <th className="border text-slate-500 font-normal border-slate-300">Jane Done</th>
                               <th className="border text-slate-500 font-normal border-slate-300">8</th>
                               <th className="border text-slate-500 font-normal border-slate-300">2</th>
                               <th className="border text-slate-500 font-normal border-slate-300">4</th>
                            </tr>
                            <tr>
                              <th className="border text-slate-500 font-normal border-slate-300">Mark Johnson</th>
                              <th className="border text-slate-500 font-normal border-slate-300">6</th>
                              <th className="border text-slate-500 font-normal border-slate-300">1</th>
                              <th className="border text-slate-500 font-normal border-slate-300">2</th>
                            </tr>
                            <tr>
                            <th className="border text-slate-500 font-normal border-slate-300">Mary Lee</th>
                            <th className="border text-slate-500 font-normal border-slate-300">10</th>
                            <th className="border text-slate-500 font-normal border-slate-300">4</th>
                            <th className="border text-slate-500 font-normal border-slate-300">8</th>
                            </tr>
                            <tr>
                            <th className="border text-slate-500 font-normal border-slate-300">David Chen</th> 
                            <th className="border text-slate-500 font-normal border-slate-300">14</th>
                            <th className="border text-slate-500 font-normal border-slate-300">5</th>
                            <th className="border text-slate-500 font-normal border-slate-300">9</th>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                   
                  </div>
             </div>
        </div>
    );
}
export default Main;