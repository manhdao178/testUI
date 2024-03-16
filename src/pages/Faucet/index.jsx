import React from "react";
import imgBg from "../../assets/images/imgBannerFaucet.png";

const Faucet = () => {
  return (
    <div className="relative">
      <div className="container m-auto py-[110px] flex items-center">
        <div className="flex-[1]">
          <div className="max-w-[481px] flex-col justify-start items-start gap-20 inline-flex">
            <div className=" flex-col justify-start items-start gap-12 flex">
              <div className="self-stretch  flex-col justify-start items-start gap-10 flex">
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className="text-white text-[45px] font-black font-['Inter'] leading-[57.15px]">
                    Bootstrap Your
                    <br />
                    Testnet Wallet
                  </div>
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="text-white text-opacity-80 text-xl font-normal font-['Inter'] leading-[30px] tracking-wide">
                      Fund your testnet wallet with
                    </div>
                    <div className="justify-start items-center gap-2 flex">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://via.placeholder.com/32x32"
                      />
                      <div className="text-white text-opacity-80 text-xl font-semibold font-['Inter'] leading-[30px] tracking-wide">
                        sBTC
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col relative">
                  <p className="text-xs text-stone-400 absolute -top-2 left-2 bg-black px-1">
                    Wallet Address *
                  </p>
                  <IconX className="absolute top-0 right-1 cursor-pointer" />
                  <input
                    type="text"
                    placeholder="Fill..."
                    className="w-full bg-transparent border border-stone-400 py-1 pl-4 h-12 rounded"
                  />
                </div>
              </div>
              <button className="self-stretch h-10 bg-orange-600 rounded-[100px] flex-col justify-center items-center flex">
                <div className="self-stretch px-6 py-2.5 justify-center items-center gap-2 inline-flex">
                  <div className="text-center text-white text-sm font-semibold font-['Inter'] leading-tight tracking-tight">
                    Confirm
                  </div>
                </div>
              </button>
            </div>
            <div className="max-w-[481px] text-white text-opacity-80 text-base font-normal font-['Inter'] leading-normal tracking-wide">
              To ensure a sufficient balance for all users, the Faucet is set to
              dispense 0.001 testnet sBTC tokens for each wallet
            </div>
          </div>
        </div>
        <div className="flex-[1]">
          <img src={imgBg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Faucet;

const IconX = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#D8C2BA"
        fillRule="evenodd"
        d="M24 14c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-9.41L27.59 19 29 20.41 25.41 24 29 27.59 27.59 29 24 25.41 20.41 29 19 27.59 22.59 24 19 20.41 20.41 19 24 22.59Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={40} height={40} x={4} y={4} fill="#fff" rx={20} />
      </clipPath>
    </defs>
  </svg>
);
