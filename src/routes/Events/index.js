import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getEvent } from "../../redux/actions/events";

import Event from "./Event";

const Events = props => {
  const { events, totalPage, activePage } = props;

  useEffect(() => {
    props.getEvent(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const getEventPage = pageNo => {
    props.getEvent(pageNo);
  };

  const getPageList = () => {
    const list = [];
    for (let i = 1; i <= totalPage; i++) {
      list.push(
        <li key={i} className={activePage === i ? "active" : null}>
          <Link to={`/events`} onClick={getEventPage.bind(this, i)}>
            {i < 10 ? "0" + i : i}.
          </Link>
        </li>
      );
    }

    return list;
  };

  return (
    <>
      <div className="speaker-header">
        <div className="home-image-container">
          <img
            className="parallax_background parallax-window"
            src={`/react/images/events.jpg`}
            alt="events"
          ></img>
          <div className="speaker_content_container">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-row align-items-end justify-content-start">
                    <div className="current_page">Events</div>
                    <div className="breadcrumbs ml-auto">
                      <ul>
                        <li>
                          <Link to={`/`}>Home</Link>
                        </li>
                        <li>Events</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="events">
        <div className="container">
          <div className="row">
            <div className="col">
              {events.map(item => (
                <Event key={item.id} {...item} />
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="pagination">
                <ul>{getPageList().map(item => item)}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = store => ({
  events: store.event.events,
  totalPage: store.event.totalPage,
  activePage: store.event.activePage
});

const mapDispatchToProps = dispatch => ({
  getEvent: pageNo => dispatch(getEvent(pageNo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
