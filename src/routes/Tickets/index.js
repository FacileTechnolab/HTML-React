import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";

import { getUrlParameter, getTicketOptions } from "../../utils";
import { getEvents, getSpeakers } from "../../redux/actions/tickets";

const BuyTicket = props => {
  const [speakerId, setSpeakerId] = useState(null);
  const [eventId, setEventId] = useState(null);
  const [ticketCount, setTicketCount] = useState({ label: 1, value: 1 });
  const [isModelOpen, setIsModelOpen] = useState(false);
  const ticketOptions = getTicketOptions();

  useEffect(() => {
    props.getSpeakers();
    props.getEvents();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const querySpeakerid = parseInt(
      getUrlParameter(props.location.search, "speaker")
    );

    if (!isNaN(querySpeakerid)) setSpeakerId(querySpeakerid);

    const queryEventid = parseInt(
      getUrlParameter(props.location.search, "event")
    );

    if (!isNaN(queryEventid)) setEventId(queryEventid);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location.search]);

  const handleSpeakerChange = value => {
    setSpeakerId(value);
  };

  const handleEventChange = value => {
    setEventId(value);
  };

  const handleTicketChange = value => {
    setTicketCount(value);
  };

  const handleModelOpen = () => {
    setIsModelOpen(true);
  };

  const handleModelClose = () => {
    setIsModelOpen(false);
  };

  return (
    <>
      <div className="speaker-header">
        <div className="home-image-container">
          <img
            className="parallax_background parallax-window"
            src={`${process.env.PUBLIC_URL}/react/images/speakers.jpg`}
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
                          <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                        </li>
                        <li>Tickets</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row text-dark pt-5 pb-5">
          <h2>Buy Tickets</h2>
        </div>
        <div className="row w-75 pb-3 d-flex">
          <h3 className="pr-3 text-dark">Author : </h3>
          {props.speakers &&
            (speakerId || !props.location.search.includes("speaker")) && (
              <Select
                className="w-75 ml-auto"
                label="Single select"
                options={props.speakers}
                defaultValue={
                  speakerId &&
                  props.speakers.find(item => item.value === speakerId)
                }
                onChange={handleSpeakerChange}
              />
            )}
        </div>
        <div className="row w-75 pb-3 d-flex">
          <h3 className="pr-3 text-dark">Event : </h3>
          {props.events &&
            (eventId || !props.location.search.includes("event")) && (
              <Select
                className="w-75 ml-auto"
                options={props.events}
                onChange={handleEventChange}
                defaultValue={
                  eventId && props.events.find(item => item.value === eventId)
                }
              />
            )}
        </div>
        <div className="row w-75 pb-3 d-flex">
          <h3 className="pr-3 text-dark">No Of Tickets : </h3>
          <Select
            className="w-75 ml-auto"
            options={ticketOptions}
            onChange={handleTicketChange}
            defaultValue={ticketCount}
          />
        </div>
        <div className="row mb-5 d-flex flex-row-reverse w-75">
          <button className="btn btn-primary" onClick={handleModelOpen}>
            Buy Tickes
          </button>
        </div>
      </div>
      <div
        className={`modal fade ${isModelOpen ? "show" : ""}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        style={{ display: isModelOpen ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-primary">Checkout</h5>
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={handleModelClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-dark">
              Thanks, You bought {ticketCount.label} tickets for{" "}
              {eventId &&
                (eventId.label ||
                  props.events.find(item => item.value === eventId).label)}{" "}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleModelClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = store => ({
  speakers: store.ticket.speakers,
  events: store.ticket.events
});

const mapDispatchToProps = dispatch => ({
  getSpeakers: () => dispatch(getSpeakers()),
  getEvents: () => dispatch(getEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(BuyTicket);
