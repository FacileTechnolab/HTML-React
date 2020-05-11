import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faPinterest,
  faTwitter,
  faDribbble,
  faBehance,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import DownloadModal from "./DownloadModal";

const Header = (props) => {
  const { pathname } = props.location;

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [showDownloadBar, setShowDownloadBar] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
  };

  const hideDownloadBar = () => {
    setShowDownloadBar(false);
    setShowModal(false);
    setModalType("");
    localStorage.setItem("code_download", "true");
  };

  const openModal = (type) => {
    setShowModal(true);
    setModalType(type);
  };

  useEffect(() => {
    const data = localStorage.getItem("code_download");
    if (!data) {
      setShowDownloadBar(true);
    }
  }, []);

  return (
    <div className="home">
      {showDownloadBar && (
        <div
          className="alert alert-info download-header text-center"
          role="alert"
        >
          Like what you see? You can receive react app source code for this app
          free
          <button
            type="button"
            className="ml-2 btn btn-danger btn-sm"
            onClick={() => openModal("download")}
          >
            Download
          </button>
          <button
            type="button"
            className="ml-2 btn btn-danger btn-sm"
            onClick={() => openModal("hireus")}
          >
            Hire Us
          </button>
        </div>
      )}
      <header
        className="header"
        id="header"
        style={{ top: showDownloadBar ? "55px" : "0px" }}
      >
        <div>
          <div className="header_top">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="header_top_content d-flex flex-row align-items-center justify-content-start">
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
                    <div className="header_social ml-auto">
                      <ul>
                        <li>
                          <Link
                            to={{
                              pathname: "https://www.faciletechnolab.com/",
                            }}
                            target="_blank"
                          >
                            <span className="facile-logo"></span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={{
                              pathname: "https://www.pinterest.com/",
                            }}
                            target="_blank"
                          >
                            <FontAwesomeIcon icon={faPinterest} />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={{
                              pathname: "https://www.facebook.com/",
                            }}
                            target="_blank"
                          >
                            <FontAwesomeIcon icon={faFacebook} />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={{
                              pathname: "https://twitter.com/",
                            }}
                            target="_blank"
                          >
                            <FontAwesomeIcon icon={faTwitter} />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={{
                              pathname: "https://dribbble.com/",
                            }}
                            target="_blank"
                          >
                            <FontAwesomeIcon icon={faDribbble} />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={{
                              pathname: "https://www.behance.net/",
                            }}
                            target="_blank"
                          >
                            <FontAwesomeIcon icon={faBehance} />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={{
                              pathname: "https://www.linkedin.com/",
                            }}
                            target="_blank"
                          >
                            <FontAwesomeIcon icon={faLinkedin} />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="hamburger ml-auto">
                      <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header_nav" id="header_nav_pin">
            <div className="header_nav_inner">
              <div className="header_nav_container">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="header_nav_content d-flex flex-row align-items-center justify-content-start">
                        <nav className="main_nav">
                          <ul>
                            <li className={pathname === "/" ? "active" : ""}>
                              <Link to="/">Home</Link>
                            </li>
                            {/* <li
                              className={pathname === "/about" ? "active" : ""}
                            >
                              <Link to="/about">About Us</Link>
                            </li> */}
                            <li
                              className={
                                pathname === "/speakers" ? "active" : ""
                              }
                            >
                              <Link to="/speakers">Speakers</Link>
                            </li>
                            <li
                              className={pathname === "/events" ? "active" : ""}
                            >
                              <Link to="/events">Events</Link>
                            </li>
                            <li
                              className={pathname === "/news" ? "active" : ""}
                            >
                              <Link to="/news">News</Link>
                            </li>
                            <li
                              className={
                                pathname === "/contact" ? "active" : ""
                              }
                            >
                              <Link to="/contact">Contact</Link>
                            </li>
                          </ul>
                        </nav>
                        <div className="header_extra ml-auto">
                          <div className="header_search">
                            <FontAwesomeIcon icon={faSearch} />
                          </div>
                          <div className="button header_button">
                            <Link to="/tickets">Buy Tickets Now!</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="search_container">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="search_content d-flex flex-row align-items-center justify-content-end">
                        <form
                          action="#"
                          id="search_container_form"
                          className="search_container_form"
                        >
                          <input
                            type="text"
                            className="search_container_input"
                            placeholder="Search"
                            required="required"
                          />
                          <button className="search_container_button">
                            <FontAwesomeIcon icon={faSearch} />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <DownloadModal
        showModal={showModal}
        modalType={modalType}
        closeModal={closeModal}
        hideDownloadBar={hideDownloadBar}
      />
    </div>
  );
};

export default Header;
