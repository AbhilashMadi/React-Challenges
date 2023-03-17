import React,{StrictMode} from "react";
import {createRoot} from "react-dom/client";

import "./css/index.css";
import App from "./App";

const node = document.getElementById("root");
const root = createRoot(node);

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);