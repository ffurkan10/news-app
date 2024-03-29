import React from "react";
import moment from "moment/moment";

const NewsList = ({ news }) => {
  return (
    <li className="home__container__news__ul__li">
      <div className="home__container__news__ul__li__img">
        <img
          src={
            news.image_url === null
              ? "https://www.messagetech.com/wp-content/themes/ml_mti/images/no-image.jpg"
              : news.image_url
          }
          alt=""
        />
      </div>
      <div className="home__container__news__ul__li__description">
        <h3>{news.title}</h3>
        <p>
          {news.description} <a href={news.url}>Read more</a>{" "}
        </p>
        <span>{moment(news.publishedAt).format("DD/MM/YYYY")}</span>
        <span>{news.author}</span>
      </div>
    </li>
  );
};

export default NewsList;
