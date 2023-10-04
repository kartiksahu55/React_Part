import React, { useState } from "react";
import style from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count+1);
  };

  const decrementHandler=()=>{
    setCount(count-1)
  }

  return (
    <main className={style.counterContainer}>
      <h2>{count}</h2>
      <div className={style.buttonGroup}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </main>
  );
};

export default Counter;
