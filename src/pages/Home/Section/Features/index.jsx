import React from "react";
import img1 from "../../../../assets/images/imgFeature1.png";
import img2 from "../../../../assets/images/imgFeature2.png";
import img3 from "../../../../assets/images/imgFeature3.png";
import imgCircle from "../../../../assets/images/imgCircle.png";

const Features = () => {
  return (
    <div
      className="flex gap-8 flex-col justify-center items-center bg-cover relative -mb-20"
      // style={{ backgroundImage: `url(${imgCircle})` }}
    >
      <img src={imgCircle} alt="" className="w-full -z-10" />
      <div className="w-full flex justify-center absolute left-0">
        <div className="container flex gap-8 flex-col justify-center items-center ">
          {/* <div style={{ backgroundImage: `url(${imgCircle})`}}></div> */}
          <h2 className="text-[45px] font-black">Features</h2>
          <div className="flex gap-8 ">
            <div className="flex-[1] px-8 py-7 flex-col justify-start items-center gap-5 inline-flex">
              <div className="w-[230px] h-[230px]">
                <img src={img1} alt="" />
              </div>
              <div className="self-stretch  flex-col justify-start items-center gap-8 flex">
                <div className="self-stretch  flex-col justify-start items-center gap-6 flex">
                  <div className="self-stretch  flex-col justify-start items-center gap-6 flex">
                    <div className="self-stretch text-center text-orange-400 text-[28px] font-extrabold leading-9">
                      Smart Contract
                    </div>
                    <div className="self-stretch text-center text-white text-opacity-80 text-base font-normal leading-normal tracking-wide">
                      The consensus mechanism linking Satochain with Bitcoin,
                      enabling applications to utilize Bitcoin's security.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[1] px-8 py-7 flex-col justify-start items-center gap-5 inline-flex">
              <div className="w-[230px] h-[230px]">
                <img src={img2} alt="" />
              </div>
              <div className="self-stretch  flex-col justify-start items-center gap-8 flex">
                <div className="self-stretch  flex-col justify-start items-center gap-6 flex">
                  <div className="self-stretch  flex-col justify-start items-center gap-6 flex">
                    <div className="self-stretch text-center text-orange-400 text-[28px] font-extrabold leading-9">
                      Bitcoin DeFi
                    </div>
                    <div className="self-stretch text-center text-white text-opacity-80 text-base font-normal leading-normal tracking-wide">
                      Satochain brings DeFi to Bitcoin, unlocking over $300
                      billion in capital and setting the stage for activation of
                      the Bitcoin economy.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[1] px-8 py-7 flex-col justify-start items-center gap-5 inline-flex">
              <div className="w-[230px] h-[230px]">
                <img src={img3} alt="" />
              </div>
              <div className="self-stretch  flex-col justify-start items-center gap-8 flex">
                <div className="self-stretch  flex-col justify-start items-center gap-6 flex">
                  <div className="self-stretch  flex-col justify-start items-center gap-6 flex">
                    <div className="self-stretch text-center text-orange-400 text-[28px] font-extrabold leading-9">
                      Smart Contract
                    </div>
                    <div className="self-stretch text-center text-white text-opacity-80 text-base font-normal leading-normal tracking-wide">
                      Satochain launches DeFi on Bitcoin, releasing over $300
                      billion in funds and catalyzing the Bitcoin economy's
                      growth
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
