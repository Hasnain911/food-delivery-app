import React from "react";
import './card.css'
import greenAvocado from "../../assets/green-avocado.jpg";
const Card = () => {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem" }}>
        <img src={greenAvocado} className="card-img-top card-image" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some important text.</p>
          <div className="container w-100">
            <select
              name="food-quantity"
              id="food-quantity"
              className="m-2 h-100 bg-success rounded"
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              name="food-size"
              id="food-size"
              className="m-2 h-100  rounded"
            >
              <option>Half</option>
              <option>Full</option>
            </select>
            <div className="total-price d-inline fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
