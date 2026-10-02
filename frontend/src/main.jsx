import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Provider } from 'react-redux';
import { store } from "./redux/store.js";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
       <ToastContainer
    position="top-right"
    autoClose={3000}
    theme="dark"
  />
         </Provider>
    </BrowserRouter>
  </StrictMode>
);