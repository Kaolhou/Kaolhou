import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import lib from './lib/apollo'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={lib}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
)
