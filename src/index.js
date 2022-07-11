import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import PageLoader from "./components/Preloader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PageLoader />);

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    root.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }, 10000);
});
