import React from "react";
import "./basket.css";

export default function Basket() {
  return (
    <div className="basket">
      <h4 className="mt-5">Fragnance subscriptions</h4>
      <select
        className="form-select form-select-sm my-4"
        aria-label=".form-select-lg example"
      >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <h4 className="mt-5">Selected parfums</h4>
    </div>
  );
}
