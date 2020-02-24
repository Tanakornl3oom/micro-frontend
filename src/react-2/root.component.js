import React, { useEffect } from "react";
import { useRoutes } from "hookrouter";
import Routes from "./router";
import Manage from "./component/manage";
import { throws } from "assert";

const App = () => {
  const changePage = path => {
    switch (path) {
      case "1":
        return (window.location.href = "/1");
      case "2":
        return (window.location.href = "/2");
      case "3":
        return (window.location.href = "/3");
      default:
        return;
    }
  };

  useEffect(() => {
    window.addEventListener("href__", ({ detail }) => {
      changePage(detail.path);
    });
  }, []);

  const routeResult = useRoutes(Routes);
  return routeResult;
};

export default App;
