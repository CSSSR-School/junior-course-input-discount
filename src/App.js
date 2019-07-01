import React from "react";
import { Discount } from "./components/Discount";
import s from "./App.module.scss";

function App() {
  return (
    <div className={s.wrapper}>
      <Discount />
    </div>
  );
}

export default App;
