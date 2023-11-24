import React from 'react'
import ReactDOM from 'react-dom/client'


import {
  
  RouterProvider,
} from "react-router-dom";
import './index.css'

import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './route/Route';

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <QueryClientProvider client={queryClient}>
   <HelmetProvider>
 <div className='mx-auto max-w-screen-xl'>
  <RouterProvider router={router} />
  </div>
 </HelmetProvider>
    </QueryClientProvider>

</AuthProvider>
</React.StrictMode>
)
