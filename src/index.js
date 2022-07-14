import React, {StrictMode} from 'react'
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root')
const root =  createRoot(container);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
    
)

// ReactDOM.render(<App />, document.querySelector("#root"));