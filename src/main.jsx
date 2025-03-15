import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'animate.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router'
import AuthProvider from './providers/AuthProvider'
import { ThemeProvider } from 'next-themes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={Router}></RouterProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)
