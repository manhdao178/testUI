import React from "react";
import imgBitcoin from "../../assets/images/imgBitcoin.png";

const MiniKey = () => {
  return (
    <div className="container m-auto py-[110px]">
      <div className="flex gap-8">
        <div className="flex-[1.5]">
          <div className="w-full bg-stone-950 flex-col justify-start items-center inline-flex">
            <div className="self-stretch p-8 bg-gradient-to-br from-yellow-400 to-orange-500 border border-zinc-700 justify-start items-center gap-2.5 inline-flex">
              <div className="text-white text-[46px] font-bold leading-[44px] tracking-tight">
                Mint Your Keys
              </div>
            </div>
            <div className="self-stretch px-8 py-6 border border-zinc-700 justify-between items-center inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-center gap-3 inline-flex">
                <div className="self-stretch h-[35px] flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="p-1 bg-white bg-opacity-5 rounded justify-center items-center gap-2.5 flex">
                      <div className="text-white text-[11px] font-normal tracking-tight">
                        Tier 0 - SOLD OUT
                      </div>
                    </div>
                    <div className="p-1 bg-white bg-opacity-5 rounded justify-center items-center gap-2.5 flex">
                      <div className="text-white text-[11px] font-normal tracking-tight">
                        Tier 1 - PROCESSING
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-1 pr-[467.25px] bg-stone-700 justify-start items-center inline-flex">
                    <div className="w-[155.75px] h-1 relative bg-red-300" />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch px-8 py-6 border border-zinc-700 justify-between items-center inline-flex">
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="text-white text-2xl font-medium">
                      Sato Entry Key
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div className="w-4 h-4 p-px justify-center items-center inline-flex" />
                  </div>
                </div>
                <div className="w-[294px] text-white text-opacity-70 text-sm font-normal leading-[21px]">
                  The Key to asserting your eligibility for network challenges
                  and incentives.
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-2 inline-flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="text-white text-opacity-70 text-sm font-normal leading-[21px]">
                    QUANTITY
                  </div>
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div className="w-4 h-4 p-px justify-center items-center inline-flex" />
                  </div>
                </div>
                <div className="h-10 p-1 rounded-lg border border-white border-opacity-10 flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch justify-between items-center inline-flex flex gap-6">
                    <div className="w-8 h-8 p-1 bg-white bg-opacity-10 rounded justify-center items-center flex">
                      <IconMinus />
                    </div>
                    <div className="text-white text-base font-normal leading-7">
                      1
                    </div>
                    <div className="w-8 h-8 p-1 bg-white bg-opacity-10 rounded justify-center items-center flex">
                      <IconPlus />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[148px] px-8 py-6 border border-zinc-700 flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch justify-between items-start inline-flex">
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="text-white text-xl font-medium">
                    1 x Sato Entry Key
                  </div>
                  <div className="text-white text-opacity-70 text-xs font-normal leading-[18px]">
                    0.001 BTC per key
                  </div>
                </div>
                <div className="w-[166px] h-14 rounded-tl rounded-tr flex-col justify-start items-start inline-flex">
                  <div className="self-stretch grow shrink basis-0 rounded border border-stone-400 flex-col justify-center items-start gap-2.5 flex">
                    <div className="self-stretch grow shrink basis-0 py-1 rounded-tl rounded-tr justify-start items-center inline-flex">
                      <div className="grow shrink basis-0 h-12 pl-4 justify-start items-center gap-2 flex">
                        <img src={imgBitcoin} />
                        <div className="grow shrink basis-0 h-12 py-1 flex-col justify-center items-start inline-flex">
                          <div className="justify-start items-center inline-flex">
                            <div className="text-stone-300 text-base font-normal leading-normal tracking-wide">
                              Bitcoin
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-12 h-12 flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="rounded-[100px] justify-center items-center gap-2.5 inline-flex">
                          <div className="p-2 justify-center items-center gap-2.5 flex">
                            <div className="w-6 h-6 p-2.5 flex-col justify-center items-center gap-2.5 inline-flex" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-white text-xl font-medium">Pay</div>
                <div className="text-white text-xl font-medium">0.001 BTC</div>
              </div>
            </div>
            <div className="self-stretch h-[104px] border border-zinc-700 flex-col justify-start items-start gap-[27px] flex">
              <div className="self-stretch px-8 py-6 justify-start items-start gap-4 inline-flex">
                <div className="flex w-full gap-4">
                  <div className=" flex-[1] flex flex-col relative">
                    <p className="text-xs text-stone-400 absolute -top-2 left-2 bg-stone-950 px-1">
                      Recipient Address
                    </p>
                    <input
                      type="text"
                      placeholder="Input"
                      className="w-full bg-transparent border border-stone-400 py-1 pl-4 h-12 rounded"
                    />
                  </div>
                  <div className=" flex-[1] flex flex-col relative">
                    <p className="text-xs text-stone-400 absolute -top-2 left-2 bg-stone-950 px-1">
                      Recipient Address
                    </p>
                    <input
                      type="text"
                      placeholder="Input"
                      className="w-full bg-transparent border border-stone-400 py-1 pl-4 h-12 rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[104px] px-6 py-8 border border-zinc-700 flex-col justify-start items-start gap-2.5 flex">
              <div className="self-stretch h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-[100px] flex-col justify-center items-center flex">
                <div className="self-stretch px-6 py-2.5 justify-center items-center gap-2 inline-flex">
                  <div className="text-center text-white text-sm font-semibold leading-tight tracking-tight">
                    Confirm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1]">
          <div className="w-full h-full flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-[151px] px-8 py-6 border border-zinc-700 flex-col justify-center items-start gap-4 flex">
              <div className="self-stretch h-[103px] flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch p-3 bg-white bg-opacity-5 rounded justify-between items-center inline-flex">
                  <div className="text-white text-base font-medium">
                    Key Balance
                  </div>
                  <div className="text-amber-400 text-base font-bold">
                    1 Entry Key
                  </div>
                </div>
                <div className="self-stretch p-3 bg-white bg-opacity-5 rounded justify-between items-center inline-flex">
                  <div className="text-white text-base font-normal leading-normal">
                    My Referral Code (5%):{" "}
                  </div>
                  <div className="justify-start items-center gap-3 flex">
                    <div className="text-white text-opacity-70 text-base font-normal leading-normal">
                      8235a34374
                    </div>
                    <div className="w-5 h-5 pr-[1.25px] pb-[1.25px] justify-center items-center flex" />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch grow shrink basis-0 px-8 py-6 border border-zinc-700 flex-col justify-center items-start gap-5 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-white text-base font-medium">
                  Gas Sharing Reward
                </div>
                <div className="text-white text-opacity-70 text-base font-medium">
                  0.137 sBTC
                </div>
              </div>
            </div>
            <div className="self-stretch grow shrink basis-0 px-8 py-6 border border-zinc-700 flex-col justify-center items-start gap-5 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-white text-base font-medium">
                  Key Incentive Rewards
                </div>
                <div className="text-white text-opacity-70 text-base font-medium">
                  394,600 SATO
                </div>
              </div>
            </div>
            <div className="self-stretch grow shrink basis-0 px-8 py-6 border border-zinc-700 flex-col justify-center items-start gap-5 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-white text-base font-medium">
                  Key Farm Rewards
                </div>
                <div className="text-white text-opacity-70 text-base font-medium">
                  835 SATO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniKey;

const IconMinus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14"
    />
  </svg>
);

const IconPlus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 5v14M5 12h14"
    />
  </svg>
);
