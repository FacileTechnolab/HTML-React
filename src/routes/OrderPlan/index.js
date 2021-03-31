import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";

import { getUrlParameter } from "../../utils";
import { getPricing } from "../../redux/actions/home";

const OrderPlan = props => {
  const [planId, setPlanId] = useState(null);
  const [isModelOpen, setIsModelOpen] = useState(false);

  useEffect(() => {
    props.getPricing();

    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const queryPlanId = parseInt(
      getUrlParameter(props.location.search, "plan")
    );

    if (!isNaN(queryPlanId)) setPlanId(queryPlanId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location.search]);

  const handlePlanChange = value => {
    setPlanId(value);
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
            src={`/react/images/speakers.jpg`}
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
                          <Link to={`/`}>Home</Link>
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
          <h2>Buy Plan</h2>
        </div>
        <div className="row w-75 pb-3 d-flex">
          <h3 className="pr-3 text-dark">Plan : </h3>
          {props.pricing &&
            (planId || !props.location.search.includes("plan")) && (
              <Select
                className="w-75 ml-auto"
                label="Single select"
                options={props.pricing.map(item => ({
                  label: `${item.level} - ${item.price}`,
                  value: item.id
                }))}
                defaultValue={
                  planId &&
                  props.pricing
                    .map(item => ({
                      label: `${item.level} - ${item.price}`,
                      value: item.id
                    }))
                    .find(item => item.value === planId)
                }
                onChange={handlePlanChange}
              />
            )}
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
              Thanks, You bought{" "}
              {planId &&
                (planId.label ||
                  props.pricing.find(item => item.id === planId).level)}{" "}
              Plan.
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
  pricing: store.home.pricing
});

const mapDispatchToProps = dispatch => ({
  getPricing: () => dispatch(getPricing())
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderPlan);
