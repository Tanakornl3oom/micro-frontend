import { registerApplication, start } from "single-spa";

registerApplication(
  "react-1",
  () => import("./src/react-1/main.app.js"),
  () => (location.pathname === "/vue" ? false : true)
);

registerApplication(
  "react-2",
  () => import("./src/react-2/main.app.js"),
  () => (location.pathname === "/react-2" ? false : true)
);

start();
