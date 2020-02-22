import React from "react";
import { Link } from "react-router-dom";

function Speaker(props) {
  return (
    <>
      {!!(props.order % 2) ? (
        <div className="row row-lg-eq-height">
          <div className="col-lg-6 speaker_col reset_col">
            <div
              className="speaker_image"
              style={{ backgroundImage: `url(${props.image})` }}
            ></div>
          </div>
          <div className="col-lg-6">
            <div className="speaker_content d-flex flex-column align-items-start justify-content-center">
              <div className="speaker_title">{props.name}</div>
              <div className="speaker_subtitle">{props.designation}</div>
              <div className="speaker_text">
                <p>{props.desc}</p>
              </div>
              <div className="button speaker_button">
                <Link to={`/tickets?speaker=${props.id}`}>
                  Buy Tickets Now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row row-lg-eq-height">
          <div className="col-lg-6">
            <div className="speaker_content d-flex flex-column align-items-start justify-content-center">
              <div className="speaker_title">{props.name}</div>
              <div className="speaker_subtitle">{props.designation}</div>
              <div className="speaker_text">
                <p>{props.desc}</p>
              </div>
              <div className="button speaker_button">
                <Link to={`/tickets?speaker=${props.id}`}>
                  Buy Tickets Now!
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 speaker_col reset_col">
            <div
              className="speaker_image"
              style={{ backgroundImage: `url(${props.image})` }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Speaker;
