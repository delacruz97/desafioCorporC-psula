import React from "react";
import style from "../styles/Form.module.css";

const Button = () => {
  return (
    <div>
      <form className={style.form}>
        <label>
          <p className={style.descr}>Card Number</p>
          <input
            type="text"
            id="inputNumero"
            maxLength="19"
            autoComplete="off"
            className={style.input}
            placeholder="5399 3524 3653 1424"
          />
        </label>
        <label>
          <p className={style.descr}>MM/YY</p>
          <input type="number" className={style.input} placeholder="12/30" />
        </label>
        <label>
          <p className={style.descr}>CVC Code</p>
          <input type="number" className={style.input} placeholder="539" />
        </label>

        <br />

        <input type="submit" value="PAY NOW" className={style.button} />
      </form>
    </div>
  );
};

export default Button;
