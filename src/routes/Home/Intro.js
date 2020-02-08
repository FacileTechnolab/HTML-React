import React from "react";

function Intro(props) {
  return (
    <div className="intro_item">
      <div className="intro_image">
        <img src={props.image} alt="" />
      </div>
      <div className="intro_body">
        <div className="intro_title">
          <a href="#">{props.title}</a>
        </div>
        <div className="intro_subtitle">{props.subtitle}</div>
      </div>
    </div>
  );
}

export default Intro;
