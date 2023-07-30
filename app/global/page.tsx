import React from "react";
import Counter from "./counter";
import NameComponent from "./name";
import Combined from "./combined";

function GlobalStateExamplePage() {
  return (
    <div className="container">
      <NameComponent />
      <Counter />
      <Combined />
    </div>
  );
}

export default GlobalStateExamplePage;
