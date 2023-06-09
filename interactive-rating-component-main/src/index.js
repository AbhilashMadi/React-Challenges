import React,{StrictMode} from "react";
import {createRoot} from "react-dom/client";

import "./scss/css/index.css";
import App from "./App";

const rootNode = document.getElementById("root");
const root = createRoot(rootNode);

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)