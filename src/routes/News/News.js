import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const News = props => (
  <div className="news_item">
    <div className="news_image_container">
      <div className="news_image">
        <img src={props.image} alt="news_image" />
      </div>
      <div className="date_container">
        <span className="date_content d-flex flex-column align-items-center justify-content-center">
          <div className="date_day">{props.day}</div>
          <div className="date_month">{props.month}</div>
        </span>
      </div>
    </div>
    <div className="news_body">
      <div className="news_title">
        <Link to={`/news/${props.id}`}>{props.title}</Link>
      </div>
      <div className="news_info">
        <ul>
          <li>
            <div className="news_author_image">
              <img src={props.author.image} alt="news_auther" />
            </div>
            <span>
              by{" "}
              <Link to={`/news?author=${props.author.id}`}>
                {props.author.name}
              </Link>
            </span>
          </li>

          <li>
            <span>
              in{" "}
              {props.tags.map((item, index, array) => (
                <Fragment key={index}>
                  <Link key={index} to={`/news?category=${item.id}`}>
                    {item.title}
                  </Link>
                  {index < array.length - 1 && ", "}
                </Fragment>
              ))}
            </span>
          </li>

          <li>{props.comments}</li>
        </ul>
      </div>
      <div className="news_text">
        <p>{props.desc}</p>
      </div>
      <div className="button news_button">
        <Link to={`/news/${props.id}`}>Read More</Link>
      </div>
    </div>
  </div>
);

export default News;
