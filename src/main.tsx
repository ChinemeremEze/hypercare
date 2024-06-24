import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { UserProvider } from './contexts/UserContext.tsx'
import Modal  from 'react-modal'
const rootElement = document.getElementById('root');

if (rootElement) {
  Modal.setAppElement(rootElement);
}
ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
)
