import React, { useEffect, useState } from "react";
import style from "../styles/DescriptionBitcoin.module.css";
import axios from "axios";

const DescriptionBitcoin = () => {
  const [precio, setPrecio] = useState([]);
  var llamadas = 0;

  //obteniendo datos de la api
  useEffect(() => {
    const obtenerPrecios = async () => {
      try {
        const url = " https://api.blockchain.com/v3/exchange/tickers";
        const result = await axios.get(url);
        const data = result.data;

        setPrecio(data);
      } catch {
        console.error();
      }
    };
    obtenerPrecios();
  }, []);
  //mapeando y obteniendo  un array con todos los datos "price_24h"
  var todo = precio.map((e) => e.price_24h);

  //funcion la cual me actualiza cada dato
  const maxi = () => {
    const numeros = todo;
    const res = numeros[llamadas].toFixed(10);
    const n = document.querySelector("#precioo");
    n.innerHTML = res;
    llamadas++;
  };
  //funcion  setInterval
  setInterval(maxi, 5000);

  return (
    <div>
      <div className={style.centrado}>
        <p className={style.tituloP}>Sneekers for Men</p>

        <article className={style.parrafo} title="parrafo principal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt
        </article>
      </div>
      <div>
        <ul className={style.lista}>
          <li className={style.tit}>Price in BTC</li>
          <li className={style.bit}>
            ₿ <span id="precioo">0.0028162403</span>
          </li>
          <li className={style.prec}>Price in USD</li>
          <li className={style.prec2}>$69</li>
        </ul>
      </div>
    </div>
  );
};

export default DescriptionBitcoin;
