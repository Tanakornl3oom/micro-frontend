import React from "react";
import First from "./component/first";
import Second from "./component/second";
import Third from "./component/thrid";
import Manage from "./component/manage";

const routes = {
  "/": () => <Manage />,
  "/1": () => <First />,
  "/2": () => <Second />,
  "/3": () => <Third />
};

export default routes;
