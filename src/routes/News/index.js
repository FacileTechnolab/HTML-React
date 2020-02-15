import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getNews, getCategory, getLatestNews } from "../../redux/actions/news";

import News from "./News";
import LatestNews from "./LatestNews";

const NewsPage = props => {
  const {
    news,
    totalPage,
    activePage,
    categories,
    activeCategory,
    latestNews
  } = props;

  useEffect(() => {
    props.getNews(1);
    props.getCategory();
    props.getLatestNews();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage, activeCategory]);

  const getNewsPage = (pageNo, category) => {
    props.getNews(pageNo, category);
  };

  const getPageList = () => {
    const list = [];
    for (let i = 1; i <= totalPage; i++) {
      list.push(
        <li key={i} className={activePage === i ? "active" : null}>
          <Link to="/news" onClick={getNewsPage.bind(this, i, activeCategory)}>
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
      <div className="news">
        <div className="container">
          {activeCategory && (
            <h4 style={{ marginTop: "-10px" }}>
              Category >{" "}
              {categories.find(item => item.id === activeCategory).title}
            </h4>
          )}
          <div className="row">
            <div className="col-lg-8">
              <div className="news_items">
                {news.map(item => (
                  <News key={item.id} {...item} />
                ))}
                <div className="pagination">
                  <ul>{getPageList().map(item => item)}</ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="tickets">
                  <div
                    className="background_image"
                    style={{ backgroundImage: "url(images/tickets.jpg)" }}
                  ></div>
                  <div className="tickets_inner text-center">
                    <div className="tickets_title">Buy Tickets</div>
                    <div className="tickets_text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Perferendis id expl icabo. Esum dolor sit amet, consect
                      etur adipisi cing elit. Perferendis id explica bo.
                    </div>
                    <div className="tickets_next">
                      <a href="#">See Next Event</a>
                    </div>
                    <div className="button tickets_button">
                      <a href="#">Buy Tickets Now!</a>
                    </div>
                  </div>
                </div>
                <div className="sidebar_categories">
                  <div className="sidebar_categories_title">Categories</div>
                  <ul className="categories_list">
                    {categories.map(item => (
                      <li key={item.id}>
                        <Link
                          key={item.id}
                          onClick={getNewsPage.bind(this, 1, item.id)}
                          to="/news"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="latest_posts">
                  <div className="latest_posts_title">Latest Posts</div>
                  <div className="latest_container">
                    {latestNews.map(item => (
                      <LatestNews key={item.id} {...item} />
                    ))}
                  </div>
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
  news: store.news.news,
  activeCategory: store.news.activeCategory,
  totalPage: store.news.totalPage,
  activePage: store.news.activePage,
  categories: store.news.categories,
  latestNews: store.news.latestNews
});

const mapDispatchToProps = dispatch => ({
  getCategory: () => dispatch(getCategory()),
  getNews: (pageNo, category) => dispatch(getNews(pageNo, category)),
  getLatestNews: () => dispatch(getLatestNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
