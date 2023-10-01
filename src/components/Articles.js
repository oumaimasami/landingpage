import React from "react";
import "./articles.css";

export default function Articles() {
  return (
    <div className="row justify-content-center articles pt-4 mt-4 ">
      <div className="col-10">
        <div class="input-group input-group-lg">
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
      </div>
      <button type="button" className="btn btn-info">
        Search
      </button>
      <div className="col-10">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
          <label className="form-check-label" for="inlineCheckbox1">
            For Kids
          </label>
        </div>
        <div className="col-10">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label className="form-check-label" for="inlineCheckbox2">
              For Females
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="option3"
            />
            <label className="form-check-label" for="inlineCheckbox3">
              For Man
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
