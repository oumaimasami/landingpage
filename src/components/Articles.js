import React from "react";
import "./articles.css";
import Article from "./Article";

export default function Articles() {
  return (
    <div className="row articles justify-content-center mx-3 pt-4 mt-4 ">
      <div className="input-group input-group-lg">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
        <button type="button" className="btn btn-info">
          Search
        </button>
      </div>
      <div className="row py-4">
        <div className=" py-2 check">
          <label className="form-check-label px-2 " for="inlineCheckbox1">
            Unisex
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
        </div>

        <div className="py-2 check">
          <label className="form-check-label px-2" for="inlineCheckbox2">
            For Her
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
        </div>
        <div className="py-2 check">
          <label className="form-check-label px-2" for="inlineCheckbox3">
            For Him
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="option3"
          />
        </div>
      </div>
      <div className="card-deck row ">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
}
