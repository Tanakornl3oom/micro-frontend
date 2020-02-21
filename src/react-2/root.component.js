import React from "react";

const App = () => {
  const click = () => {
    let event = new Event("a__click");
    window.dispatchEvent(event);
  };

  return (
    <button onClick={click}>
      <h1>Hello from React-2</h1>
    </button>
  );
};

export default App;
