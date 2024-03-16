import React from "react";
import Icons from "../icons";
import ImgConnectUni from "../../assets/images/iconConnectWallet.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const renderExtraMintKey = () => {
    return (
      <div className="px-2 py-[2px]  absolute right-0 -top-1 text-[11px] bg-gradient-to-br from-yellow-400 to-red-600 rounded">
        HOT
      </div>
    );
  };
  const renderExtraExplorer = () => {
    return (
      <div className="px-2 py-[2px] text-[11px] absolute right-0 -top-[2px] ">
        SOON
      </div>
    );
  };
  const listLink = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Mint Key",
      path: "/mint-key",
      extra: renderExtraMintKey,
    },
    {
      name: "Faucet",
      path: "/faucet",
    },
    {
      name: "Swap",
      path: "/",
    },
    {
      name: "Explorer",
      path: "/",
      disable: true,
      extra: renderExtraExplorer,
    },
    {
      name: "Bridge",
      path: "/",
      disable: true,
      extra: renderExtraExplorer,
    },
  ];
  return (
    <header className="fixed z-20 flex justify-center w-full bg-black">
      <div className="container h-[72px] m-auto mt-5 ">
        <div className="flex items-center justify-between">
          <div className="logo flex gap-2 items-center">
            <Icons.LogoIcon />
            <p className="text-[19px] font-bold">Satochain</p>
          </div>
          <div className="link flex items-center">
            {listLink.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={`relative cursor-pointer ${
                    item.disable && "opacity-75"
                  }`}
                  onClick={() => navigate(item.path)}
                >
                  <div className="px-6 py-[10px] text-[15px] font-medium">
                    {item.name}
                  </div>
                  {item?.extra && item.extra()}
                </div>
              );
            })}
          </div>
          <div className="btn-group flex gap-[10px]">
            <button className="flex gap-2 rounded-[100px] py-[10px] pl-4 pr-6 bg-gradient-to-br from-yellow-400 to-red-600 items-center">
              <img src={ImgConnectUni} alt="" />
              <p className="text-[14px] font-semibold">Connect UniSat</p>
            </button>
            <button className="flex gap-2 rounded-[100px] py-[10px] pl-4 pr-6 bg-gradient-to-br from-yellow-400 to-red-600 items-center">
              <IconWallet />
              <p className="text-[14px] font-semibold">Connect UniSat</p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const IconWallet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={19}
    fill="none"
    {...props}
  >
    <g fill="#fff" clipPath="url(#a)">
      <path
        stroke="#fff"
        strokeWidth={0.2}
        d="M16.32 3.61a2.534 2.534 0 0 0-2.516-2.264H2.43A2.534 2.534 0 0 0-.1 3.876v11.247a2.534 2.534 0 0 0 2.53 2.531h13.14a2.534 2.534 0 0 0 2.53-2.53V6.026c0-1.134-.75-2.096-1.78-2.416ZM2.43 2.683h11.374c.525 0 .973.341 1.133.815H2.43c-.431 0-.837.108-1.193.3a1.197 1.197 0 0 1 1.193-1.115Zm13.14 13.637H2.43a1.197 1.197 0 0 1-1.194-1.196V6.027c0-.659.536-1.195 1.195-1.195h13.138c.66 0 1.196.536 1.196 1.195V7.91h-3.521a2.705 2.705 0 0 0-2.702 2.702 2.705 2.705 0 0 0 2.702 2.702h3.52v1.81c0 .66-.536 1.196-1.195 1.196Zm1.194-4.342h-3.52a1.368 1.368 0 0 1-1.366-1.366c0-.754.613-1.367 1.366-1.367h3.52v2.733Z"
      />
      <path d="M13.454 11.245a.591.591 0 1 0 0-1.182.591.591 0 0 0 0 1.182Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
