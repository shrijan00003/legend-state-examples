"use client";

import React, { useRef } from "react";
import { useSelector } from "@legendapp/state/react";

import global$ from "./state";
let i = 0;

function NameComponent() {
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

export default NameComponent;
