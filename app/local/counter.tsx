"use client";

import React, { useRef } from "react";
import { ObservableObject } from "@legendapp/state";
import { useObservable } from "@legendapp/state/react";

interface IProfile {
  profile: {
    count: number;
    name: string;
  };
}

const Counter = () => {
  const render = ++useRef(0).current;
  const store$ = useObservable<IProfile>({
    profile: { name: "Shrijan", count: 0 },
  });

  return (
    <div className="border p-4 my-3 bg-gray-300 w-full">
      <h1>
        Counter Application (Parent Component)
        <button className="bg-red-300 p-2 m-2 rounded">R:{render}</button>
      </h1>
      <button
        className="p-2 bg-blue-600 hover:bg-blue-400 rounded"
        onClick={() => {
          store$.profile.count.set((prev) => prev + 1);
        }}
      >
        +1
      </button>
      <Profile profile$={store$.profile} />
    </div>
  );
};

export default Counter;

interface IProfileProps {
  profile$: ObservableObject<{
    name: string;
    count: number;
  }>;
}

function Profile({ profile$ }: IProfileProps) {
  const render = ++useRef(0).current;
  const name = profile$.name.use();
  const count = profile$.count.use();

  return (
    <div className="border-t-4 mt-3 border-slate-500 py-4">
      <h1>Profile (Child Component)</h1>
      Name: {name} count: <strong>{count}</strong>
      <button className="bg-red-300 p-2 m-2 rounded">R:{render}</button>
    </div>
  );
}
