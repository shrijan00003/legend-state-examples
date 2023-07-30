"use client";

import React, { useRef } from "react";
import { useSelector } from "@legendapp/state/react";
import global$ from "./state";

function Combined() {
  return (
    <div className="bg-blue-200 p-4 border-2 border-t-red-900">
      <Name />
      <Counter />
    </div>
  );
}

export default Combined;

let i = 0;

function Name() {
  const count = ++useRef(0).current;

  const name = useSelector(() => global$.profile.name.get());

  function handleNameChange() {
    global$.profile.name.set("Shrijan " + ++i);
  }

  return (
    <div className="border border-pink-400 p-4 rounded">
      <span>
        Name: {name} <strong>{count}</strong>
      </span>
      <button
        className="ml-4 border border-yellow-400 bg-yellow-300 p-2 rounded"
        onClick={handleNameChange}
      >
        Change
      </button>
    </div>
  );
}

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
