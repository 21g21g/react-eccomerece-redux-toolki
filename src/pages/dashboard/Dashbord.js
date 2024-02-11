import React from "react";
import { CardData } from "../../data/Data";
import DashboardDisplay from "./DashboardDisplay";
const Dashbord = () => {
  return (
    <div className="row">
      {CardData.map((card, index) => {
        return (
          <div className="col">
            <DashboardDisplay key={index} data={card} />
          </div>
        );
      })}
    </div>
  );
};

export default Dashbord;
