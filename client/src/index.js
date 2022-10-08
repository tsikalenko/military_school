import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import AutoScrollToTop from "./components/AutoScrollToTop";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AutoScrollToTop/>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
