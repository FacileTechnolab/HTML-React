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
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <>
    <div className="cta">
      <img
        className="parallax_background parallax-window"
        src={`/react/images/cta_1.jpg`}
        alt="ata_1"
      />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="cta_content text-center">
              <div className="cta_title">Get your tickets now!</div>
              <div className="button cta_button">
                <Link to={`/tickets`}>Find out more</Link>
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
                  <Link to={`/`}>
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
                    <Link to={`/speakers`}>Speakers</Link>
                  </li>
                  <li>
                    <Link to={`/news`}>News</Link>
                  </li>
                  <li>
                    <Link to={`/contact`}>Contact</Link>
                  </li>
                  <li>
                    <Link to={`/speakers`}>Speakers</Link>
                  </li>
                  <li>
                    <Link to={`/contact`}>Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 footer_col">
              <div className="footer_links">
                <ul></ul>
              </div>
            </div>
            <div className="col-lg-2 footer_col">
              <div className="footer_links">
                <ul></ul>
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
                      <a target="_blank" href="https://www.faciletechnolab.com/">
                        <span className="facile-logo"></span>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.pinterest.com/">
                        <FontAwesomeIcon icon={faPinterest} />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.facebook.com/">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://twitter.com/">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://dribbble.com/">
                        <FontAwesomeIcon icon={faDribbble} />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.behance.net/">
                        <FontAwesomeIcon icon={faBehance} />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.linkedin.com/">
                        <FontAwesomeIcon icon={faLinkedin} color="white" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer_extra_right ml-lg-auto text-lg-right">
                  <div className="footer_extra_links">
                    <ul></ul>
                  </div>
                  <div className="copyright">
                    Copyright &copy;
                    {new Date().getFullYear() + " "}
                    All rights reserved | This template is made with
                    <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                    <a target="_blank" href="https://colorlib.com">
                      Colorlib
                    </a>
                  </div>
                  <div className="copyright">
                    This template is converted with{" "}
                    <FontAwesomeIcon icon={faHeart} /> by{" "}
                    <a target="_blank" href="https://www.faciletechnolab.com/">
                      FacileTechnolab
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
