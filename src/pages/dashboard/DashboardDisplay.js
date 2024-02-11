import React from "react";

const DashboardDisplay = ({ data }) => {
  return (
    <div className="card bg-dark m-4 " style={{ width: "15rem" }}>
      <div className="card-body">
        <h1 className="card-title text-white">{data.name}</h1>

        <p className=" card-text text-white">{data.price}</p>
      </div>
    </div>
  );
};

export default DashboardDisplay;
