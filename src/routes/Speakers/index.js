import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getSpeakers } from "../../redux/actions/speakers";

import Speaker from "./Speaker";

function Speakers(props) {
  useEffect(() => {
    props.getSpeakers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const speakerComponentList = props.speakers.map(item => (
    <Speaker key={item.order} {...item} />
  ));

  return (
    <>
      <div className="speaker-header">
        <div className="home-image-container">
          <img
            className="parallax_background parallax-window"
            src="/images/speakers.jpg"
            alt="speakers"
          ></img>
          <div className="speaker_content_container">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-row align-items-end justify-content-start">
                    <div className="current_page">Speakers</div>
                    <div className="breadcrumbs ml-auto">
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>Speakers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="speakers">
        <div className="container reset_container">{speakerComponentList}</div>
      </div>
    </>
  );
}

const mapStateToProps = store => ({
  speakers: store.speaker.speakers
});

const mapDispatchToProps = dispatch => ({
  getSpeakers: () => dispatch(getSpeakers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Speakers);
