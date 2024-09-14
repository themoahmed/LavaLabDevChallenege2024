import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full h-[115px] bg-white flex items-center justify-center px-10 border-b-2 border-[#CBCBD5] border-opacity-50">
      <div className="flex flex-row items-center justify-between h-[67px] py-[20px] gap-[20px] w-[100%]">
        <div className="w-[70%] border-2 border-[#CBCBD5] border-opacity-75 h-[67px] flex items-center justify-start gap-[10px] rounded-[5px] pl-[30px] max-w-[760px]">
          <div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 0.5C8.22391 0.5 9.87721 1.18482 11.0962 2.40381C12.3152 3.62279 13 5.27609 13 7C13 8.61 12.41 10.09 11.44 11.23L11.71 11.5H12.5L17.5 16.5L16 18L11 13V12.21L10.73 11.94C9.59 12.91 8.11 13.5 6.5 13.5C4.77609 13.5 3.12279 12.8152 1.90381 11.5962C0.684819 10.3772 0 8.72391 0 7C0 5.27609 0.684819 3.62279 1.90381 2.40381C3.12279 1.18482 4.77609 0.5 6.5 0.5ZM6.5 2.5C4 2.5 2 4.5 2 7C2 9.5 4 11.5 6.5 11.5C9 11.5 11 9.5 11 7C11 4.5 9 2.5 6.5 2.5Z"
                fill="#737373"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search in Aro"
            className="w-full h-full border-none outline-none text-[#737373] text-[18px]"
          />
        </div>
        <div
          className="w-[30%] flex flex-row rounded-[5px] items-center justify-center px-[24px] py-[16px] h-[67px] max-w-[272px] gap-[10px]"
          style={{ boxShadow: "0px 0px 4px 0px #CBCBD5 " }}
        >
          <div className="h-[44px] w-[44px] rounded-full bg-[#414172] flex items-center justify-center">
            <p className="text-white">
                C
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-[2px]">
            <p className="text-[#737373] text-[14px] font-medium">Cole Gawin</p>
            <p>colegawin@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
