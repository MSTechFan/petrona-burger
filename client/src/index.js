import React from 'react'
import {createRoot} from 'react-dom/client';
import App from './App';
import * as Popper from "@popperjs/core"
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import './styles/css/app.css';
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.querySelector('#root'))

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)