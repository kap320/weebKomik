import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./assets/css/stuff.min.css";
import "./assets/css/custom.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='container'>
      <App />
    </div>
  </React.StrictMode>,
)
