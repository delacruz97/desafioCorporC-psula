import React, { useState, useEffect } from "react";
import axios from "axios";

const Axios = () => {
  const [dat, setDatos] = useState([]);

  useEffect(() => {
    const Datos = async () => {
      const res = await axios("https://api.blockchain.com/v3/exchange/tickers");
      console.log(res.data);
      setDatos(res.data);
    };
    Datos();
  }, []);

  const precio = dat;

  const total = precio.map((res) => res.price_24h);
  /*  console.log(total); */
  var index = 0;
  const Intervalo = setInterval(function () {
    return console.log(total[index++ % total.length]);
  }, 5000);
  return () => clearInterval(Intervalo);
};

export default Axios;
