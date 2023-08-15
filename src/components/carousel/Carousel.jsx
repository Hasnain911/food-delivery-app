import React from "react";
import './carousel.css'
import grilledChicken from "../../assets/grilled-chicken.jpg";
import chickenWings from "../../assets/chicken-wings.jpg";
import butterChicken from "../../assets/butter-chicken.jpg";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{objectFit:'contain !important'}}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{zIndex:'10'}}>
            <form className="d-flex">
              <input
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="form-control me-2"
              />
              <button className="btn btn-outline-success text-white bg-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img src={grilledChicken} className="d-block w-100 carousel-image" alt="..." style={{filter:"brightness(30%)"}}/>
          </div>
          <div className="carousel-item">
            <img src={chickenWings} className="d-block w-100 carousel-image" alt="..." style={{filter:"brightness(30%)"}}/>
          </div>
          <div className="carousel-item">
            <img src={butterChicken} className="d-block w-100 carousel-image" alt="..." style={{filter:"brightness(30%)"}}/>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
