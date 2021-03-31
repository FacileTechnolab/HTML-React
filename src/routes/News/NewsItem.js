import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getNewsItem } from "../../redux/actions/news";

const NewsItem = props => {
  useEffect(() => {
    props.getNewsItem(props.match.params.id);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.id]);

  return (
    <>
      {props.newsItem && (
        <>
          <div className="speaker-header">
            <div className="home-image-container">
              <img
                className="parallax_background parallax-window"
                src={props.newsItem.image}
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
                            <li>
                              <Link to={`/news`}>News</Link>
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
              <div className="row text-dark">
                <h2>{props.newsItem.title}</h2>
              </div>
              <span className="row pb-4">
                in{" "}
                {props.newsItem.tags.map((item, index, array) => (
                  <Fragment key={index}>
                    <Link key={index} to={`/news?category=${item.id}`}>
                      {item.title}
                    </Link>
                    {index < array.length - 1 && ", "}
                  </Fragment>
                ))}
              </span>
              <div className="row">{props.newsItem.desc}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = store => ({
  newsItem: store.news.activeNews
});

const mapDispatchToProps = dispatch => ({
  getNewsItem: id => dispatch(getNewsItem(parseInt(id)))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsItem);
