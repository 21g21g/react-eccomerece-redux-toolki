import React from "react";
import { MobileData } from "../../data/Data";
import ShopDisplay from "./ShopDisplay";

const Shoping = () => {
  return (
    <div className="container bg-primary mt-3">
      {MobileData.map((mobile, index) => {
        return <ShopDisplay key={index} mobile={mobile} />;
      })}
    </div>
  );
};

export default Shoping;
