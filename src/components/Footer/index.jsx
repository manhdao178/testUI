import React from "react";
import img from "../../assets/images/Frame146.png";
const Footer = () => {
  return (
    <footer className="container h-auto m-auto ">
      <div className="relative">
        <img src={img} alt="" />
        <div className="absolute top-0 w-full h-full flex flex-col items-center px-5">
          <div className="flex-[1] flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Logo />
              <p className="text-[28px] font-bold text-centers">Satochain</p>
            </div>
            <p className="text-[45px] font-black mb-6">
              Make Bitcoin mass adopt
            </p>
            <p>
              Engage, collaborate, and connect with thousands of Satochainer
              globally.
            </p>
            <div className="flex gap-4 justify-center mt-10">
              <div className="bg-opacity-10 rounded-[100px] flex items-center gap-2 bg-white py-1 pr-4 pl-1">
                <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                  <XIcon />
                </div>
                <p className="font-bold">Twitter</p>
              </div>
              <div className="bg-opacity-10 rounded-[100px] flex items-center gap-2 bg-white py-1 pl-4 pr-1">
                <p className="font-bold">Discord</p>
                <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                  <Discord />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-[55px] py-[30px] border-t border-white border-opacity-10 flex-col justify-center items-center gap-2.5 inline-flex ">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-white text-opacity-75 text-sm font-normal font-['Inter'] leading-tight tracking-tight">
                © 2024 Satochain. All right reserved.
              </div>
              <div className="justify-start items-start gap-4 flex">
                <div className="p-2.5 justify-center items-center gap-2.5 flex">
                  <div className="text-stone-100 text-sm font-normal font-['Inter'] leading-tight tracking-tight">
                    Privacy policy
                  </div>
                </div>
                <div className="p-2.5 justify-center items-center gap-2.5 flex">
                  <div className="text-stone-100 text-sm font-normal font-['Inter'] leading-tight tracking-tight">
                    Explorer
                  </div>
                </div>
                <div className="p-2.5 justify-center items-center gap-2.5 flex">
                  <div className="text-stone-100 text-sm font-normal font-['Inter'] leading-tight tracking-tight">
                    Satochain Bounty Program
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={56}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M5.11 26.076.744 21.71a2.488 2.488 0 0 1 0-3.519L17.716 1.217a2.488 2.488 0 0 1 3.52 0L38.207 18.19a2.491 2.491 0 0 1 0 3.52L21.235 38.681a2.487 2.487 0 0 1-3.52 0l-4.35-4.35a.161.161 0 0 1 0-.228l3.676-3.675a.16.16 0 0 1 .227 0l2.148 2.148a.084.084 0 0 0 .12 0l12.567-12.568a.084.084 0 0 0 0-.119L19.535 7.323a.084.084 0 0 0-.119 0L6.85 19.89a.085.085 0 0 0 0 .12l2.164 2.164a.16.16 0 0 1 0 .227l-3.675 3.675a.16.16 0 0 1-.227 0Z"
    />
    <path
      fill="#fff"
      d="m25.648 22.174-4.367-4.367a2.488 2.488 0 0 0-3.52 0L.79 34.779a2.488 2.488 0 0 0 0 3.52L17.762 55.27a2.488 2.488 0 0 0 3.519 0l16.973-16.973a2.49 2.49 0 0 0 0-3.52l-4.35-4.35a.16.16 0 0 0-.228 0L30 34.105a.16.16 0 0 0 0 .227l2.148 2.148a.084.084 0 0 1 0 .12L19.581 49.166a.084.084 0 0 1-.12 0L6.895 36.599a.084.084 0 0 1 0-.12l12.568-12.567a.084.084 0 0 1 .119 0l2.164 2.164a.16.16 0 0 0 .228 0l3.675-3.675a.16.16 0 0 0 0-.227Z"
    />
  </svg>
);

const XIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#F7630C"
      d="M11.862 8.469 19.147 0h-1.726l-6.326 7.353L6.042 0H.215l7.64 11.12L.215 20H1.94l6.68-7.765L13.958 20h5.828L11.86 8.469Zm-2.365 2.748-.774-1.107-6.16-8.81h2.652l4.97 7.11.775 1.107 6.461 9.242H14.77l-5.273-7.541Z"
    />
  </svg>
);

const Discord = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#F7630C"
        d="M16.93 3.642a16.496 16.496 0 0 0-4.07-1.263.062.062 0 0 0-.066.03c-.175.313-.37.721-.506 1.042a15.225 15.225 0 0 0-4.573 0 10.538 10.538 0 0 0-.514-1.041.064.064 0 0 0-.066-.031 16.447 16.447 0 0 0-4.07 1.263.058.058 0 0 0-.028.023C.445 7.538-.266 11.317.083 15.048a.069.069 0 0 0 .026.047 16.584 16.584 0 0 0 4.994 2.524.065.065 0 0 0 .07-.023c.385-.525.728-1.079 1.022-1.661a.063.063 0 0 0-.035-.088 10.918 10.918 0 0 1-1.56-.744.064.064 0 0 1-.007-.107c.106-.078.209-.159.31-.242a.063.063 0 0 1 .065-.01c3.273 1.495 6.817 1.495 10.051 0a.062.062 0 0 1 .066.009c.101.084.205.165.31.243a.064.064 0 0 1-.005.107c-.499.291-1.017.537-1.561.743a.063.063 0 0 0-.041.063c0 .009.003.018.007.026.3.581.643 1.135 1.02 1.66a.063.063 0 0 0 .07.024 16.528 16.528 0 0 0 5.003-2.524.064.064 0 0 0 .026-.046c.417-4.314-.699-8.062-2.957-11.384a.05.05 0 0 0-.026-.023ZM6.684 12.776c-.985 0-1.797-.905-1.797-2.016 0-1.11.796-2.016 1.797-2.016 1.01 0 1.814.913 1.798 2.016 0 1.111-.796 2.016-1.798 2.016Zm6.646 0c-.985 0-1.797-.905-1.797-2.016 0-1.11.796-2.016 1.797-2.016 1.009 0 1.813.913 1.797 2.016 0 1.111-.788 2.016-1.797 2.016Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
