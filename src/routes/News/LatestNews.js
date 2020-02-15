import React from "react";

const LatestNews = props => (
  <div className="latest d-flex flex-row align-items-start justify-content-start">
    <div>
      <div className="latest_image">
        <img src={props.image} alt="" />
      </div>
    </div>
    <div className="latest_content">
      <div className="latest_title">
        <a href="#">{props.title}</a>
      </div>
      <div className="latest_date">{props.date}</div>
    </div>
  </div>
);

export default LatestNews;
