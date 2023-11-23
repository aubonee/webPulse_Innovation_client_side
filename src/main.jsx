import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/Route.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
   
   <HelmetProvider>
 <div className='mx-auto max-w-screen-xl'>
  <RouterProvider router={router} />
  </div>
 </HelmetProvider>
    
    </ThemeProvider>
  </React.StrictMode>,

)
