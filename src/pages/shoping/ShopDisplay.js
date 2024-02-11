import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showREducerSliceActions } from "../../store/ShowReducer";
const ShopDisplay = ({ mobile }) => {
  const count = useSelector((state) => state.show.count);
  const dispatch = useDispatch();

  const increaseCount = () => {
    dispatch(showREducerSliceActions.increaseCount(mobile.id));
  };
  const decreaseCount = () => {
    dispatch(showREducerSliceActions.decreaseCount(mobile.id));
  };
  return (
    <div className="col m-2" key={mobile.id}>
      <div className="row mb-3">
        {" "}
        <h1>{mobile.name}</h1>
      </div>
      <div className="row">
        <p>{mobile.price}</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>{count}</h1>{" "}
            <span>
              <button onClick={increaseCount}>+</button>
              <button onClick={decreaseCount}>-</button>
            </span>
          </div>
          <div className="col">
            <button className="btn text-center btn-secondary btn-lg text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDisplay;
