import React from "react";
import { Link } from "react-router-dom";

const LatestNews = props => (
  <div className="latest d-flex flex-row align-items-start justify-content-start">
    <div>
      <div className="latest_image">
        <img src={props.image} alt="" />
      </div>
    </div>
    <div className="latest_content">
      <div className="latest_title">
        <Link to={`${process.env.PUBLIC_URL}/news/${props.id}`}>{props.title}</Link>
      </div>
      <div className="latest_date">{props.date}</div>
    </div>
  </div>
);

export default LatestNews;
