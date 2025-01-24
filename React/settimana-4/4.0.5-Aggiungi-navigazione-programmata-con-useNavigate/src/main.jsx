import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodosProvider } from "./provider/TodosContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StrictMode>
            <TodosProvider>
                <App />
            </TodosProvider>
        </StrictMode>
    </BrowserRouter>,
)
