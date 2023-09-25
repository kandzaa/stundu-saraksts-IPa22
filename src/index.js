import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";

//1.iegūt elementu no index.html
const elementsNoHTML = document.getElementById("root");

//parasto elementu pārvērš par react sakni
const sakne = ReactDOM.createRoot(elementsNoHTML);

//3. uz ekrāna parāda pirmo react komponenti
sakne.render(<App />);
