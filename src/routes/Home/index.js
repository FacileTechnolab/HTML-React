import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getEvent, getPricing, getIntro } from "../../redux/actions/home";
import Intro from "./Intro";
import PricingItem from "./PricingItem";
import CalendarItem from "./CalendarItem";

import indexImage from "../../assets/images/index.jpg";
import pricingImage from "../../assets/images/pricing.jpg";

const Home = props => {
  const { events, pricing, intros } = props;

  useEffect(() => {
    props.getEvent();
    props.getPricing();
    props.getIntro();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="home-image-container">
        <img
          className="parallax_background parallax-window"
          src={indexImage}
          alt="conference"
        ></img>
        <div className="home-image-content-container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="home_content">
                  <div className="home_date">August 25, 2018</div>
                  <div className="home_title">
                    2018 Public Policy Conference
                  </div>
                  <div className="home_location">Miami Marina Bay, FL</div>
                  <div className="home_text">
                    Donec quis metus ac arcu luctus accumsan. Nunc in justo
                    tincidunt, sodales nunc id, finibus nibh. className aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos.
                  </div>
                  <div className="home_buttons">
                    <div className="button home_button">
                      <Link to={`/tickets`}>Buy Tickets Now!</Link>
                    </div>
                    <div className="button home_button">
                      <Link to={`/events/1`}>Find out more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="intro">
        <div className="intro_content d-flex flex-row flex-wrap align-items-start justify-content-between">
          {intros.map(item => (
            <Intro key={item.order} {...item} />
          ))}
        </div>
      </div>

      <div className="pricing">
        <img
          className="parallax_background parallax-window"
          src={pricingImage}
          alt="speakers"
        ></img>

        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="pricing_section_title">Choose a plan</div>
            </div>
          </div>
          <div className="row pricing_row">
            {pricing.map(item => (
              <PricingItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>

      <div className="calendar">
        <div className="container reset_container">
          <div className="row">
            <div className="col-xl-6 calendar_col">
              <div className="calendar_container">
                <div className="calendar_title_bar d-flex flex-row align-items-center justify-content-start">
                  <div>
                    <div className="calendar_icon">
                      <img src="images/calendar.svg" alt="" />
                    </div>
                  </div>
                  <div className="calendar_title">22 april events calendar</div>
                </div>
                <div className="calendar_items">
                  {events
                    .filter(item => item.date === 22)
                    .map(item => (
                      <CalendarItem key={item.id} {...item} />
                    ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6 calendar_col">
              <div className="calendar_container">
                <div className="calendar_title_bar d-flex flex-row align-items-center justify-content-start">
                  <div>
                    <div className="calendar_icon">
                      <img src="images/calendar.svg" alt="" />
                    </div>
                  </div>
                  <div className="calendar_title">23 april events calendar</div>
                </div>
                <div className="calendar_items">
                  {events
                    .filter(item => item.date === 23)
                    .map(item => (
                      <CalendarItem key={item.id} {...item} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = store => ({
  events: store.home.events,
  pricing: store.home.pricing,
  intros: store.home.intros
});

const mapDispatchToProps = dispatch => ({
  getEvent: () => dispatch(getEvent()),
  getPricing: () => dispatch(getPricing()),
  getIntro: () => dispatch(getIntro())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
