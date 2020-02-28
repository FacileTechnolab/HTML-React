import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";

const ContactPage = props => {
  return (
    <>
      <div className="speaker-header">
        <div className="home-image-container">
          <img
            className="parallax_background parallax-window"
            src="/images/news.jpg"
            alt="events"
          ></img>
          <div className="speaker_content_container">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-row align-items-end justify-content-start">
                    <div className="current_page">News</div>
                    <div className="breadcrumbs ml-auto">
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>News</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="contact_map_background">
          <div className="contact_map">
            <div className="map">
              <div id="google_map" className="google_map">
                <div className="map_container">
                  <div id="map"></div>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyChPExYa_WzSVL66RhlDFzJz5XDVN0wX8k"
                    }}
                    defaultCenter={{
                      lat: 34.043238,
                      long: -118.258338
                    }}
                    defaultZoom={13}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact_form_container">
                <div className="contact_form_title">Get in touch</div>
                <form action="#" className="contact_form" id="contact_form">
                  <input
                    type="text"
                    className="contact_input"
                    placeholder="Name"
                    required="required"
                  />
                  <input
                    type="email"
                    className="contact_input"
                    placeholder="E-mail"
                    required="required"
                  />
                  <input
                    type="text"
                    className="contact_input"
                    placeholder="Subject"
                    required="required"
                  />
                  <textarea
                    name="contact_textarea"
                    id="contact_textarea"
                    className="contact_textarea contact_input"
                    placeholder="Message"
                    required="required"
                  ></textarea>
                  <button className="button contact_button">
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="contact_info_container">
                <div>
                  <Link to="/">
                    <div className="logo_container d-flex flex-row align-items-start justify-content-start">
                      <div className="logo_image">
                        <div>
                          <img src="images/logo.png" alt="" />
                        </div>
                      </div>
                      <div className="logo_content">
                        <div
                          id="logo_text"
                          className="logo_text logo_text_not_ie"
                        >
                          The Conference
                        </div>
                        <div className="logo_sub">
                          August 25, 2018 - Miami Marina Bay
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="contact_info_list_container">
                  <ul className="contact_info_list">
                    <li className="d-flex flex-row align-items-start justify-content-start">
                      <div>
                        <div className="contact_info_icon text-center">
                          <img src="images/contact_1.png" alt="" />
                        </div>
                      </div>
                      <div className="contact_info_text">
                        Blvd Libertad, 34 m05200 Los Angeles, CA
                      </div>
                    </li>
                    <li className="d-flex flex-row align-items-start justify-content-start">
                      <div>
                        <div className="contact_info_icon text-center">
                          <img src="images/contact_2.png" alt="" />
                        </div>
                      </div>
                      <div className="contact_info_text">
                        0034 37483 2445 322
                      </div>
                    </li>
                    <li className="d-flex flex-row align-items-start justify-content-start">
                      <div>
                        <div className="contact_info_icon text-center">
                          <img src="images/contact_3.png" alt="" />
                        </div>
                      </div>
                      <div className="contact_info_text">hello@company.com</div>
                    </li>
                  </ul>
                </div>
                <div className="contact_info_pin">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);