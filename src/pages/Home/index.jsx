import React, { Fragment } from "react";
import Features from "./Section/Features";
import BuildForBitcoin from "./Section/BuildForBitCoin";
import InfoSection from "./Section/InfoSection";

const Home = () => {
  return (
    <div className="pt-[72px]">
      <BuildForBitcoin />
      <Features />
      <InfoSection />
    </div>
  );
};

export default Home;
