import {createRoot} from 'react-dom/client';
import App from './App';

// Import all of Bootstrap's JS
import './styles/css/app.css';
import { BrowserRouter } from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux';

const root = createRoot(document.querySelector('#root'))

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    
)