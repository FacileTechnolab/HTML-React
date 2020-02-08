import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = props => {
  const { pathname } = props.location;

  return (
    <div className="home">
      <header className="header" id="header">
        <div>
          <div className="header_top">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="header_top_content d-flex flex-row align-items-center justify-content-start">
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
                    <div className="header_social ml-auto">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-pinterest"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-dribbble"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-behance" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            ></i>
                          </a>
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
                            <li
                              className={pathname === "/about" ? "active" : ""}
                            >
                              <Link to="/about">About Us</Link>
                            </li>
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
                            <i className="fa fa-search" aria-hidden="true"></i>
                          </div>
                          <div className="button header_button">
                            <a href="#">Buy Tickets Now!</a>
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
                            <i className="fa fa-search" aria-hidden="true"></i>
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
    </div>
  );
};

export default Header;
