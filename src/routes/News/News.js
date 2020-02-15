import React from "react";

const News = props => (
  <div className="news_item">
    <div className="news_image_container">
      <div className="news_image">
        <img src={props.image} alt="news_image" />
      </div>
      <div className="date_container">
        <a href="#">
          <span className="date_content d-flex flex-column align-items-center justify-content-center">
            <div className="date_day">{props.day}</div>
            <div className="date_month">{props.month}</div>
          </span>
        </a>
      </div>
    </div>
    <div className="news_body">
      <div className="news_title">
        <a href="#">{props.title}</a>
      </div>
      <div className="news_info">
        <ul>
          <li>
            <div className="news_author_image">
              <img src={props.author.image} alt="news_auther" />
            </div>
            <span>
              by <a href="#">{props.author.name}</a>
            </span>
          </li>

          <li>
            <span>
              in{" "}
              <a href="events.html">
                {props.tags.map(item => item.title).join(", ")}
              </a>
            </span>
          </li>

          <li>
            <a href="#">{props.comments}</a>
          </li>
        </ul>
      </div>
      <div className="news_text">
        <p>{props.desc}</p>
      </div>
      <div className="button news_button">
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
);

export default News;
