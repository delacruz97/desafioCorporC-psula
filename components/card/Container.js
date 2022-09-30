import React from "react";
import style from "../../styles/Container.module.css";
import BotonX from "../BotonX";
import Carousel from "../Carousel";
import DescriptionBitcoin from "../DescriptionBitcoin";
import Form from "../Form";

const Container = () => {
  return (
    <div className={style.containerPrincipal}>
      <div className={style.container}>
        <BotonX />
        <div className={style.franja}></div>
        <div className={style.images}>
          <Carousel />
        </div>
        <div className={style.description}>
          <DescriptionBitcoin />
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Container;
