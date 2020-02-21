import React, { useEffect, useState } from "react";

const App = () => {
  const [useA, setA] = useState("Default");

  useEffect(() => {
    window.addEventListener("a__click", () => setA("Clicked"));
  }, []);

  return (
    <button onClick={() => {}}>
      <h1>{useA}</h1>
    </button>
  );
};

export default App;
