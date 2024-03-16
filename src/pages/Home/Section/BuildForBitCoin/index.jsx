import React from "react";
import img from "../../../../assets/images/imgBanner.png";
import imgBg from "../../../../assets/images/imgBg1.png";
import imgBg2 from "../../../../assets/images/imgBg2.png";

const BuildForBitcoin = () => {
  return (
    <div className="relative pt-10">
      <img src={imgBg2} alt="" className="absolute top-0 left-0 -z-10" />
      <img src={imgBg} alt="" className="absolute top-0 right-0 -z-10" />
      <div className="container m-auto -mb-[550px] ">
        <div className="flex ">
          <div className="flex-[1] py-[127px]">
            <h1 className="text-[64px] font-black mb-7">Build for Bitcoin</h1>
            <p className="opacity-[0.82] mb-10">
              Enhance Bitcoin's economy using secure, Bitcoin-based apps and
              smart contracts.
            </p>
            <div className="w-[212px] h-14 pl-6 pr-4 py-4 bg-orange-600 rounded-[32px] justify-center items-center gap-6 inline-flex cursor-pointer">
              <div className="text-center  font-bold ">Mint Entry Key</div>
              <div className="w-8 h-8 relative">
                <div className="w-8 h-8 left-0 top-0 absolute bg-white rounded-full flex items-center justify-center">
                  <ChevonIcon />
                </div>
                {/* <div className="w-6 h-6 pt-[6.98px] pb-[7px] left-[4px] top-[4px] absolute justify-center items-center inline-flex" /> */}
              </div>
            </div>
          </div>
          <div className="flex-[1] ">
            <img src={img} alt="" />

            {/* <div
            className="bg-cover h-full absolute top-0 right-0"
            style={{ backgroundImage: `url(${imgBg})` }}
          ></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildForBitcoin;

const ChevonIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#F7630C"
      d="M10.5 17a.999.999 0 0 1-.71-1.71L13.1 12 9.92 8.69a1 1 0 1 1 1.42-1.41l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32Z"
    />
  </svg>
);
