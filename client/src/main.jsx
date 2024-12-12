import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'preline'
import App from './app/App.jsx'
import 'react-quill/dist/quill.snow.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
