import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import './index.css'
  import App from './App.jsx'
  import { BrowserRouter} from 'react-router-dom'
  import { ToastContainer } from 'react-toastify'

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
          <App />
          <ToastContainer/>
    </BrowserRouter>
    </StrictMode>,
  )
