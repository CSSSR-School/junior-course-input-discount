import React from "react";
import pt from 'prop-types';
import s from "./index.module.css";

const Discount = ({ title, name, value, onChange }) => {
  return (
    <React.Fragment>
      <h3 className={s.title}>{title}</h3>
      <div className={s.wrapper}>
        от <input
          className={s.discountValue}
          name={name}
          value={value}
          onChange={onChange} />%
      </div>
    </React.Fragment>
  );
};

Discount.propTypes = {
  value: pt.number.isRequired,
  onChange: pt.func.isRequired,
  name: pt.string.isRequired,
  title: pt.string.isRequired
};

export default Discount