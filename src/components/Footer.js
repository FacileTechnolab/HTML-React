import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faPinterest,
  faTwitter,
  faDribbble,
  faBehance,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Footer = props => (
  <>
    <div className="cta">
      <img
        className="parallax_background parallax-window"
        src="/images/cta_1.jpg"
        alt="ata_1"
      />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="cta_content text-center">
              <div className="cta_title">Get your tickets now!</div>
              <div className="button cta_button">
                <a href="#">Find out more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="footer_content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 footer_col">
              <div className="footer_about">
                <div>
                  <a href="#">
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
                  </a>
                </div>
                <div className="footer_about_text">
                  <p>
                    Donec quis metus ac arcu luctus accumsan. Nunc in justo
                    tincidunt, sodales nunc id, finibus nibh. Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 footer_col">
              <div className="footer_links">
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Speakers</a>
                  </li>
                  <li>
                    <a href="#">Event Dates</a>
                  </li>
                  <li>
                    <a href="#">Information</a>
                  </li>
                  <li>
                    <a href="#">Calendar</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 footer_col">
              <div className="footer_links">
                <ul>
                  <li>
                    <a href="#">Logistics</a>
                  </li>
                  <li>
                    <a href="#">Our Partners</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Price Plans</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 footer_col">
              <div className="footer_links">
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Speakers</a>
                  </li>
                  <li>
                    <a href="#">Event Dates</a>
                  </li>
                  <li>
                    <a href="#">Information</a>
                  </li>
                  <li>
                    <a href="#">Calendar</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_extra">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="footer_extra_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-start justify-content-center">
                <div className="footer_social">
                  <div className="footer_social_title">
                    Follow us on Social Media
                  </div>
                  <ul className="footer_social_list">
                    <li>
                      <Link
                        to={{
                          pathname: "https://www.pinterest.com/"
                        }}
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faPinterest} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: "https://www.facebook.com/"
                        }}
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faFacebook} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: "https://twitter.com/"
                        }}
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: "https://dribbble.com/"
                        }}
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faDribbble} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: "https://www.behance.net/"
                        }}
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faBehance} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={{
                          pathname: "https://www.linkedin.com/"
                        }}
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer_extra_right ml-lg-auto text-lg-right">
                  <div className="footer_extra_links">
                    <ul>
                      <li>
                        <a href="contact.html">Contact us</a>
                      </li>
                      <li>
                        <a href="#">Sitemap</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                    </ul>
                  </div>
                  <div className="copyright">
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
