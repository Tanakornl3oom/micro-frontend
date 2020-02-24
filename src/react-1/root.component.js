import React from "react";
import Button from "./button";

const App = () => {
  const click = path => {
    let event = new CustomEvent("href__", { detail: { path } });
    console.log(path);
    window.dispatchEvent(event);
  };

  const buttons = ["1", "2", "3"];

  return (
    <React.Fragment>
      {buttons.map(button => {
        return (
          <Button
            key={button}
            click={() => {
              click(button);
            }}
            text={button}
          />
        );
      })}
    </React.Fragment>
  );
};

export default App;
