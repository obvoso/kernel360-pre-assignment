import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from '@/layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Settings } from 'lucide-react'
import { OrderHistory, Messages, Statistics, Products, NotFound } from '@/pages'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import '@/styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/products" element={<Products />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
