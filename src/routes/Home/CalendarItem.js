import React from "react";

const CalendarItem = props => (
  <div className="calendar_item d-flex flex-row align-items-center justify-content-start">
    <div>
      <div className="calendar_item_image">
        <img src={props.image} alt="" />
      </div>
    </div>
    <div className="calendar_item_time">
      <div>{props.time}</div>
      <div>{props.place}</div>
    </div>
    <div className="calendar_item_text">
      <div>{props.title}</div>
      <div>{props.duration}</div>
      <div>{props.speaker}</div>
    </div>
  </div>
);

export default CalendarItem;
