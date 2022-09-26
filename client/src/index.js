import {createRoot} from 'react-dom/client';
import App from './App';
import * as Popper from "@popperjs/core"
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.querySelector('#root'))

root.render(
    <App />
)