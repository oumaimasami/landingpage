import React, { useState } from "react";
import "./article.css";
import photo from "../images/R.png";
import logo from "../images/chanel.png";

export default function Article() {
  const [count, setCount] = useState(0);

  function AddProduct() {
    setCount(count + 1);
  }
  function RemoveProduct() {
    if (count === 0) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  }
  return (
    <div className="card col-3 pr-3 mx-4 mt-3">
      <img className="productLogo py-3" src={logo} alt="logo" />
      <img className="card-img-top" src={photo} alt="parfum" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <button className="details-button btn btn-secondary py-2 my-2">
          Details
        </button>
        <div className="input-group my-2 py-1">
          <div className="input-group-prepend" onClick={RemoveProduct}>
            <span
              className="input-group-text Productnumbermodif"
              id="inputGroup-sizing-default"
            >
              -
            </span>
          </div>
          <input
            type="text"
            className="form-control Productnumber"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={count}
          />

          <div className="input-group-prepend" onClick={AddProduct}>
            <span
              className="input-group-text Productnumbermodif"
              id="inputGroup-sizing-default"
            >
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
