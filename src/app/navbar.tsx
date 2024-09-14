"use client";

import { CircleUser } from "lucide-react";
import React, { useState, useEffect } from "react";

type Props = {};

const profilePic = <CircleUser />;

const Navbar = (props: Props) => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1300);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-[115px] bg-white flex items-center justify-center px-10 border-b-2 border-[#CBCBD5] border-opacity-50">
      <div className="flex flex-row items-center justify-between h-[67px] py-[20px] gap-[20px] w-full">
        <div className="w-[70%] border-2 border-[#CBCBD5] border-opacity-75 h-[67px] flex items-center justify-start gap-[10px] rounded-[5px] pl-[30px] ">
          <div>
            <img src="/search.svg" alt="search" />
          </div>
          <input
            type="text"
            placeholder="Search in Aro"
            className="w-full h-full border-none outline-none text-[#737373] text-[18px]"
          />
        </div>
        {isMobileView ? (
          <CircleUser className="h-[44px] w-[44px] text-[#414172] cursor-pointer" />
        ) : (
          <div
            className="w-[30%] flex flex-row rounded-[5px] items-center justify-center px-[24px] py-[16px] h-[67px] max-w-[272px] gap-[10px]"
            style={{ boxShadow: "0px 0px 4px 0px #CBCBD5 " }}
          >
            <div className="h-[44px] w-[44px] rounded-full bg-[#414172] flex items-center justify-center cursor-pointer">
              <p className="text-white">C</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-[2px]">
              <p className="text-[#737373] text-[14px] font-medium">Cole Gawin</p>
              <p>colegawin@gmail.com</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
