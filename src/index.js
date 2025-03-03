import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextProviders from './context';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
  <ContextProviders>
    <App />
  </ContextProviders>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
