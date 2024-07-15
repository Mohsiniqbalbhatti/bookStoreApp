import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import list from "../../public/data/list.json";
import Cards from "./Cards";
function FreeBooks() {
  const filterData = list.filter((data) => data.price === 0);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-12">
            <h4>Free Offered Courses</h4>
          </div>
          <div className="col-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus amet dolore magni fugit dolores rem tenetur
              corporis magnam. Animi obcaecati sunt magni.
            </p>
          </div>
        </div>

        <Slider {...settings}>
          {filterData.map((book) => (
            <Cards book={book} key={book.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FreeBooks;
