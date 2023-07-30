"use client";
import React, { useRef } from "react";
import global$ from "./state";

function Counter() {
  const counterRender = ++useRef(0).current;

  function incrementCount() {
    global$.count.set((prev) => prev + 1);
  }

  return (
    <div className="bg-gray-400 p-4 container">
      <h1>
        Count {global$.count.use()} : Render : <strong>{counterRender}</strong>
      </h1>

      <button
        onClick={incrementCount}
        className="p-2 border bg-sky-400 rounded hover:bg-sky-600"
      >
        Add count
      </button>
    </div>
  );
}

export default Counter;
