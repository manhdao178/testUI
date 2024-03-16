import React from "react";
import imgBag from "../../../../assets/images/imgBag.png";
import imgCoin from "../../../../assets/images/imgCoin.png";
import imgComputer from "../../../../assets/images/imgComputer.png";

const InfoSection = () => {
  return (
    <div className="flex flex-col gap container m-auto">
      <div className="flex gap-8 items-center">
        <div className="flex-[1] flex justify-center items-center">
          <img src={imgBag} alt="" className="w-[600px] h-[620px]" />
        </div>
        <div className=" flex-[1] ">
          <div
            className="w-full p-10 rounded-[40px] border-2 border-orange-600 border-opacity-20 flex flex-col gap-[72px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(247, 99, 12, 0.10) 0%, rgba(247, 99, 12, 0.00) 100%)",
            }}
          >
            <div className=" text-orange-400 text-[45px] font-black  leading-[57.15px]">
              sBTC: Unlocking Bitcoin by Satochain
            </div>
            <div className=" h-24 flex-col justify-start items-start gap-3 inline-flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <IconTick />
                <div className="text-white text-base font-normal leading-normal tracking-wide">
                  Trust-minimized
                </div>
              </div>
              <div className="justify-start items-center gap-2 inline-flex">
                <IconTick />
                <div className="text-white text-base font-normal leading-normal tracking-wide">
                  Decentralized
                </div>
              </div>
              <div className="justify-start items-center gap-2 inline-flex">
                <IconTick />
                <div className="text-white text-base font-normal leading-normal tracking-wide">
                  Censorship resistant
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <div className=" flex-[1] ">
          <div
            className="w-full p-10 rounded-[40px] border-2 border-orange-600 border-opacity-20"
            style={{
              background:
                "linear-gradient(180deg, rgba(247, 99, 12, 0.10) 0%, rgba(247, 99, 12, 0.00) 100%)",
            }}
          >
            <div className=" text-orange-400 text-[45px] font-black  leading-[57.15px] mb-6">
              Earn BTC by participating as validators
            </div>
            <div className=" h-24 flex-col justify-start items-start gap-3 inline-flex mb-10">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-white text-base font-normal leading-normal tracking-wide">
                  Hold and temporarily secure BTC, Satochain's native currency,
                  to bolster the network's security and consensus. Over 2000
                  bitcoins have been allocated as consensus rewards
                </div>
              </div>
            </div>
            <div className="rounded-[100px] border border-orange-600 flex-col justify-center items-center inline-flex cursor-pointer ">
              <div className="self-stretch px-6 py-2.5 justify-center items-center gap-2 inline-flex">
                <div className="text-center text-orange-600 text-sm font-semibold leading-tight tracking-tight">
                  Mint your key now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1] flex justify-center items-center">
          <img src={imgCoin} alt="" className="w-[600px] h-[620px]" />
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <div className="flex-[1] flex justify-center items-center">
          <img src={imgComputer} alt="" className="w-[600px] h-[620px]" />
        </div>
        <div className=" flex-[1] ">
          <div
            className="w-full p-10 rounded-[40px] border-2 border-orange-600 border-opacity-20 "
            style={{
              background:
                "linear-gradient(180deg, rgba(247, 99, 12, 0.10) 0%, rgba(247, 99, 12, 0.00) 100%)",
            }}
          >
            <div className=" text-orange-400 text-[45px] font-black  leading-[57.15px] mb-6">
              Build powerful apps, secured by Bitcoin
            </div>
            <div className=" h-24 flex-col justify-start items-start gap-3 inline-flex mb-10">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-white text-base font-normal leading-normal tracking-wide">
                  Transactions on the Satochain layer are automatically
                  finalized on Bitcoin, allowing for the creation of apps and
                  digital assets that are integrated with the robust security of
                  Bitcoin.
                </div>
              </div>
            </div>
            <div className="rounded-[100px] border border-orange-600 flex-col justify-center items-center inline-flex cursor-pointer ">
              <div className="self-stretch px-6 py-2.5 justify-center items-center gap-2 inline-flex">
                <div className="text-center text-orange-600 text-sm font-semibold leading-tight tracking-tight">
                  Start Building
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;

const IconTick = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#F7630C"
      d="M25.333 3.033 24.067.5C13.142 3.667 7.6 10.633 7.6 10.633l-5.067-3.8L0 9.367 7.6 19.5C13.458 8.575 25.333 3.033 25.333 3.033Z"
    />
  </svg>
);
