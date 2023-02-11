import React, { useState } from "react";
import NewsList from "../../components/newsList/NewsList";
import Navbar from "../../components/navbar/Navbar";
import Paginations from "../../components/pagination/Paginations";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Home = ({ filteredNews, setSelectedCategory, products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentPageNews = filteredNews.slice(firstItemIndex, lastItemIndex);

  const handlePaginationClick = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <header>
        <Navbar setSelectedCategory={setSelectedCategory} />
      </header>
      <main className="home">
        <div className="home__container">
          <section className="home__container__swiper">
            <Swiper
              loop={true}
              className="home__container__swiper__slider"
              style={{}}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {products?.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="home__container__swiper__slider__img">
                    <img src={image.urlToImage} alt="" />
                  </div>
                  <div className="home__container__swiper__slider__content">
                    <h3> {image.title} </h3>
                    <p>{image.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
          <section className="home__container__news">
            <ul className="home__container__news__ul">
              {currentPageNews && currentPageNews.length > 0
                ? currentPageNews.map((news, index) => (
                    <NewsList key={index} news={news} />
                  ))
                : "No Results Found"}
            </ul>
          </section>
          <Paginations
            currentPage={currentPage}
            filteredNews={filteredNews}
            handlePaginationClick={handlePaginationClick}
            itemsPerPage={itemsPerPage}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
