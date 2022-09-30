import React from "react";
import style from "../styles/DescriptionBitcoin.module.css";

const DescriptionBitcoin = () => {
  return (
    <div>
      <div className={style.centrado}>
        <span className={style.tituloP}>Sneekers for Men</span>

        <p className={style.parrafo}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>
      <div>
        <ul className={style.lista}>
          <li className={style.tit}>Price in BTC</li>
          <li className={style.bit}>₿ 0.0028162403</li>
          <li className={style.prec}>Price in USD</li>
          <li className={style.prec2}>$69</li>
        </ul>
      </div>
    </div>
  );
};

export default DescriptionBitcoin;
