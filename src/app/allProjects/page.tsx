"use client"
import { Card } from '@/components/ui/card';
import { AlignJustify } from 'lucide-react'
import React, { useState } from "react";

type Props = {}

const AllProjects = (props: Props) => {
  const [activeView, setActiveView] = useState<string>("square")

  const handleActiveView = (view: string) => {
    setActiveView(view)
  }

  const projects = [
    {name: "Assignment 1", time: "44m ago"},
    {name: "Lab 3", time: "40m ago"},
    {name: "Workbook Ch. 3", time:"2 hrs ago"},
    {name: "worksheet 2", time: "Apr 25, 2024"},
    {name: "Resume", time: "March 27, 2023"},
    {name: "Assignment 3", time: "Feb 20, 2023"},
  ]

  return (
    <div className="flex flex-col px-10 gap-[28px] mt-10">
        <div className="flex flex-row justify-between items-center">
            <p className="text-[24px] font-bold">All Projects</p>
            <div className="flex flex-row gap-[12px] justify-center items-center">
                <div 
                  onClick={() => handleActiveView("square")} 
                  className={`w-[34px] h-[34px] flex justify-center items-center rounded ${activeView === "square" ? "bg-[#EBEBEB]" : ""}`}
                >
                    <img 
                      src="/square.svg" 
                      alt="square" 
                      className="cursor-pointer"
                    />
                </div>
                <div 
                  onClick={() => handleActiveView("list")} 
                  className={`w-[34px] h-[34px] flex justify-center items-center rounded ${activeView === "list" ? "bg-[#EBEBEB]" : ""}`}
                >
                    <AlignJustify 
                      size={28} 
                      className="cursor-pointer text-[#434343]"
                    />
                </div>
            </div>
        </div>
        <div className="flex flex-wrap gap-[24px]">
            {activeView === "square" ? (
                projects.map((project, index) => (
                    <div 
                      key={index} 
                      className="w-[323px] h-[297px] p-[24px] rounded-[8px] border-t-[2px] border-[2px] flex flex-col justify-between items-center border-[#CACACA] transition-transform transform hover:scale-105"
                    >
                        <div className="w-[275px] h-[175px] rounded-[8px] bg-[#D9D9D9] flex justify-center items-center">
                            <img src="/file.svg" alt="file" className="w-[85px] h-[85px]" />
                        </div>
                        <div className="flex flex-col justify-start items-start w-[100%]">
                            <p className="text-[18px] font-bold">{project.name}</p>
                            <p className="text-[18px] text-[#000000]">{project.time}</p>
                        </div>
                    </div>
                ))
            ) : (
                <table className="w-full">
                    <tbody>
                        {projects.map((project, index) => (
                            <tr key={index} className="border-b border-[#CACACA] hover:bg-[#C1C1D08C] transition-colors cursor-pointer">
                                <td className="p-[12px]">
                                    <img src="/file.svg" alt="file" className="w-[34px] h-[34px]" />
                                </td>
                                <td className="p-[12px] text-[18px] font-bold">{project.name}</td>
                                <td className="p-[12px] text-[18px] text-[#000000]">{project.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    </div>
  )
}

export default AllProjects