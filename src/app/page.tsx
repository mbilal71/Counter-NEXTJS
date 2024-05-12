"use client"
import React from "react";
import { useState } from "react";
import Button1 from "./components/button1/Button1";

const Home = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1 className="text-4xl flex justify-center items-center font-bold text-black">
        Counter
      </h1>
      <div className="flex justify-center items-center">
        <button className="text-9xl font-bold text-black" onClick={decrement}>
          -
        </button>
        <h1 className="text-9xl font-bold text-black">{count}</h1>
        <button className="text-9xl font-bold text-black" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};
export default Home;
