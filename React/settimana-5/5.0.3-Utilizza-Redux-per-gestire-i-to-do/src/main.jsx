import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodosProvider } from "./provider/TodosContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from './store/index.js';

createRoot(document.getElementById('root')).render(
    <ReduxProvider store={store}>
        <BrowserRouter>
            <StrictMode>
                <TodosProvider>
                    <App />
                </TodosProvider>
            </StrictMode>
        </BrowserRouter>
    </ReduxProvider>,
)
