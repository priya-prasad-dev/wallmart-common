import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { store } from "./redux/store";s
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);