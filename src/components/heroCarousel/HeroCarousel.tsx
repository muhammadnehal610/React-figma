import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import slide4 from "../../assets/product8.jpg";
import type { Slide } from "../../types/slide.interface";
import Slider from "../slider/Slider";
import "./HeroCarousel.css";

const slides: Slide[] = [
  {
    id: 1,
    image: slide1,
    title: "01 — Bed Room",
    subtitle: "Inner Peace",
  },
  {
    id: 2,
    image: slide2,
    title: "02 — Dining Room",
    subtitle: "Minimal Luxury",
  },
  {
    id: 3,
    image: slide3,
    title: "03 — Living Room",
    subtitle: "Cozy and Calm",
  },
  {
    id: 4,
    image: slide4,
    title: "03 — Living Room",
    subtitle: "Cozy and Calm",
  },
];

const HeroCarousel = () => {
  return (
    <section className="hero-carousel-section">
      <div className="hero-carousel-container flex align-center gap-2">
        <div className="left-text col-40 flex flex-col gap-1 justify-center box-1">
          <h1 className="m-0 fs-40 font-weight-700 lh-1-2">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="m-0 fs-base font-weight-500 lh-1-5 description-text">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <div>
            <button className="explore-btn font-md font-weight-600 px-3 py-1 text-white">
              Explore More
            </button>
          </div>
        </div>
        <div className="carousel-container col-60 flex align-center">
          <Slider slideData={slides} />
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
