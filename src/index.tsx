import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
// import { StoreProvider } from "./providers/StoreProvider";
import { BrowserRouter } from "react-router-dom";
// import { ErrorBoundary } from "./providers/ErrorBoundary";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    // <StoreProvider>
        <BrowserRouter>
            {/*<ErrorBoundary>*/}
                <App />
            {/*</ErrorBoundary>*/}
        </BrowserRouter>
    // </StoreProvider>
);
