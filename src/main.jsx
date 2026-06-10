import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Tell Vite to explicitly bundle Bootstrap into the app
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Your custom CSS comes last so it overrides Bootstrap
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
