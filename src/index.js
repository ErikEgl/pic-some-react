import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"
import {AppContextProvider} from "./utils/useContext";


ReactDOM.render(  
<AppContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</AppContextProvider>
, document.getElementById("root"));
