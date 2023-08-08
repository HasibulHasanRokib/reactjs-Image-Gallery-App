import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ImageProvider from './Components/ImageProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ImageProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </ImageProvider>
)
