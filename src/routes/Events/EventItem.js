import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getEventItem } from "../../redux/actions/events";

const EventItem = props => {
  useEffect(() => {
    props.getEventItem(props.match.params.id);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.id]);

  return (
    <>
      {props.eventItem && (
        <>
          <div className="speaker-header">
            <div className="home-image-container">
              <img
                className="parallax_background parallax-window"
                src={props.eventItem.image}
                alt="events"
              ></img>
              <div className="speaker_content_container">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="d-flex flex-row align-items-end justify-content-start">
                        <div className="current_page"></div>
                        <div className="breadcrumbs ml-auto">
                          <ul>
                            <li>
                              <Link to="/">Home</Link>
                            </li>
                            <li>
                              <Link to="/events">Events</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="news">
            <div className="container">
              <div className="event_content">
                <h2>{props.eventItem.title}</h2>
                <div className="event_location">{props.eventItem.location}</div>
              </div>
              <div className="event_speakers pb-4">
                {props.eventItem.speaker.map(item => (
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
              <div className="row">{props.eventItem.desc}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = store => ({
  eventItem: store.event.eventItem
});

const mapDispatchToProps = dispatch => ({
  getEventItem: id => dispatch(getEventItem(parseInt(id)))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventItem);
