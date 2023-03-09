import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import { BrowserRouter } from "react-router-dom";
import SupportAdmin from "./components/Pages/Home/support_chat/SupportAdmin"

const path = window.location.pathname



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
   {path.indexOf('/support') === -1 ? <App /> : <SupportAdmin /> }
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
