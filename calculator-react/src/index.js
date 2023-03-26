import React,{StrictMode} from "react";
import {createRoot} from "react-dom/client";

import App from "./App";
import "./styles.css";

const node = document.getElementById("root");
const root = createRoot(node);

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)