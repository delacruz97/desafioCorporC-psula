import React from "react";
import style from "../styles/Carousel.module.css";
import img0 from "../assets/logo/nike_0.svg";
import img1 from "../assets/nike_1.jpg";
import img2 from "../assets/nike_2.jpg";
const Carousel = () => {
  return (
    <div className={style.containerPrincipal}>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img0} className={style.foto} alt="fot" />
          </div>
          <div className="carousel-item">
            <img src={img1} className={style.foto} alt="fot" />
          </div>
          <div className="carousel-item">
            <img src={img2} className={style.foto} alt="fot" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
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
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className={style.contenedor}>
        <div className={style.circulo}></div>
        <div className={style.circulo}></div>
        <div className={style.circulo3}></div>
      </div>
    </div>
  );
};

export default Carousel;

/* item */
