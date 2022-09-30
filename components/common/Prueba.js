import React from "react";
//para llamarlo desde mi json
import data from "../../utils/data.json";
const Prueba = () => {
  const noti = data;
  const precioA = noti[1]["symbol"];

  /* const N = noti.map((user) => user.price_24h);
  console.log(N); */

  return (
    <>
      <div>hello</div>
    </>
  );
};
export default Prueba;

/*  setInterval(function () {
            const N = noti.map((user) => (
              <div>{user.symbol}</div>
            )); 
            console.log(N);
          }, 1000)

           */
