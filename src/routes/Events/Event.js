import React from "react";

const Event = props => (
  <div className="event">
    <div className="row row-lg-eq-height">
      <div className="col-lg-6 event_col">
        <div className="event_image_container">
          <div
            className="background_image"
            style={{ backgroundImage: `url(${props.image})` }}
          ></div>
          <div className="date_container">
            <a href="#">
              <span className="date_content d-flex flex-column align-items-center justify-content-center">
                <div className="date_day">{props.day}</div>
                <div className="date_month">{props.month}</div>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 event_col">
        <div className="event_content">
          <div className="event_title">{props.title}</div>
          <div className="event_location">{props.location}</div>
          <div className="event_text">
            <p>{props.desc}</p>
          </div>
          <div className="event_speakers">
            {props.speaker.map(item => (
              <div
                key={item.name}
                className="event_speaker d-flex flex-row align-items-center justify-content-start"
              >
                <div>
                  <div className="event_speaker_image">
                    <img src={item.image} alt="" />
                  </div>
                </div>
                <div className="event_speaker_content">
                  <div className="event_speaker_name">{item.name}</div>
                  <div className="event_speaker_title">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="event_buttons">
            <div className="button event_button event_button_1">
              <a href="#">Buy Tickets Now!</a>
            </div>
            <div className="button_2 event_button event_button_2">
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Event;
