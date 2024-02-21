import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import {HashRouter} from "react-router-dom";
import {StoreProvider} from "./StoreProvider";
import {ErrorBoundary} from "./ErrorBoundary";


const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <StoreProvider>
        <HashRouter>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </HashRouter>
    </StoreProvider>
);
