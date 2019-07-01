import React from "react";
import s from "./Discount.module.scss";

export const Discount = () => {
  return (
    <>
      <h3 className={s.title}>Скидка</h3>
      <div className={s.wrapper}>
        от <input className={s.discountValue} placeholder="30" />%
      </div>
    </>
  );
};
