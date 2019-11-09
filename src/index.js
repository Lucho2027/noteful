import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from'./dummy-store';
import { BrowserRouter } from "react-router-dom";
import './index.css';

ReactDOM.render(
<BrowserRouter>
<App store={Store}/>
</BrowserRouter>,
 document.getElementById('root'));