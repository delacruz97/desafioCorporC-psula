import React, { useState } from "react";
import style from "../styles/Form.module.css";
import Visa from "../assets/logo/visa.svg";
import MasterCard from "../assets/logo/mastercard.svg";
import Diners from "../assets/logo/diners.svg";
import American from "../assets/logo/amex.svg";

const Form = () => {
  const [tarjeta, setTarjeta] = useState(false);
  const [visa, setVisa] = useState(false);
  const [masterCard, setmasterCard] = useState(false);
  const [diners, setDiners] = useState(false);
  const [american, setaAmerican] = useState(false);
  const [errTarjeta, setErrorTarj] = useState(false);

  const [mesA, setMesA] = useState(false);

  //expreciones regulares

  const visaRegex = /^4[0-9]{6,}$/;
  const masterCardRegex =
    /^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/;
  const dinersRegex = /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/;
  const americanRegex = /^3[47][0-9]{5,}$/;
  //controlar error
  let regExp = /[A-z]/g;

  /*   const errorTarjeta = (tarjetaE) => {
    if (regExp.test(tarjetaE)) {
      setErrorTarj(true);
    } else {
      setErrorTarj(false);
    }
  }; */

  const valorTarjeta = (tarjetaValidar) => {
    //me aseguro que el  campo tarjeta no sea vacio
    if (tarjetaValidar.trim()) {
      //valido la tarjeta con la expresion regular
      if (visaRegex.test(tarjetaValidar)) {
        setTarjeta(true);
        setVisa(true);
        console.log("visa");
      } else {
        setVisa(false);
      }
      if (masterCardRegex.test(tarjetaValidar)) {
        setTarjeta(true);
        setmasterCard(true);
        console.log("masterCard");
      } else {
        setmasterCard(false);
      }
      if (dinersRegex.test(tarjetaValidar)) {
        setTarjeta(true);
        setDiners(true);
        console.log("diners");
      } else {
        setDiners(false);
      }
      if (americanRegex.test(tarjetaValidar)) {
        setTarjeta(true);
        setaAmerican(true);
        console.log("american");
      } else {
        setaAmerican(false);
      }
    }
    if (regExp.test(tarjetaValidar)) {
      // esto me verifica que el campo del input contenga letras, si las contiene me salta un error
      setErrorTarj(true);
    } else {
      setErrorTarj(false);
    }
  };

  function fotoVisa() {
    return <img src={Visa} alt="Visa" className={style.imgTarjeta} />;
  }
  function fotoMasterCard() {
    return (
      <img src={MasterCard} alt="MasterCard" className={style.imgTarjeta} />
    );
  }
  function fotoDiners() {
    return <img src={Diners} alt="Diners" className={style.imgTarjeta} />;
  }
  function fotoAmerican() {
    return <img src={American} alt="American" className={style.imgTarjeta} />;
  }

  function mensajeErr() {
    return <p>Tarjeta invalida</p>;
  }

  function valorMes(mesValue) {
    if (parseInt(mesValue.value) > 0 || parseInt(mesValue.value) <= 12) {
      console.log("correcto");
    } else {
      console.log("valor mal");
    }
  }
  return (
    <div>
      <form className={style.form}>
        <label>
          <p className={style.descr}>Card Number</p>

          <div className={style.flexs}>
            <input
              type="text"
              id="inputNumero"
              maxLength="16"
              autoComplete="off"
              className={style.input}
              placeholder="5399 3524 3653 1424"
              onChange={(e) => valorTarjeta(e.target.value)}
            />
            <div id="inputFoto">
              {tarjeta === true && visa === true
                ? fotoVisa()
                : tarjeta === true && masterCard === true
                ? fotoMasterCard()
                : tarjeta === true && diners === true
                ? fotoDiners()
                : tarjeta === true && american === true
                ? fotoAmerican()
                : null}
            </div>
          </div>
          <div className={style.NumeroERR}>
            {errTarjeta === true ? mensajeErr() : null}
          </div>
        </label>
        <label>
          <p className={style.descr}>MM/YY</p>
          <div className={style.displayFecha}>
            <input
              type="text"
              maxLength="2"
              className={style.inputMes}
              name="inputMonth"
              id="inputMonth"
              placeholder="12 /"
              onChange={(e) => valorMes(e.target.value)}
            />

            <input
              type="text"
              maxLength="2"
              className={style.inputAno}
              name="inputYear"
              id="inputYear"
              placeholder="30"
            />
          </div>
          <div className={style.NumeroERR}>
            {errTarjeta === true ? mensajeErr() : null}
          </div>
        </label>
        <label>
          <p className={style.descr}>CVC Code</p>
          <input
            type="text"
            maxLength="3"
            className={style.input}
            placeholder="539"
          />
        </label>

        <br />

        <input type="submit" value="PAY NOW" className={style.button} />
      </form>
    </div>
    /* pruebaaaaa */
  );
};

export default Form;
