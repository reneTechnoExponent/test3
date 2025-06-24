import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Initialize development tools in dev mode for tagging
if (import.meta.env.DEV) {
  import('/src/utils/dev-helper.ts').then(({ initializeCodegenDevTools }) => {
    initializeCodegenDevTools();
  }).catch(err => console.error('Failed to load dev-helper for tagging:', err));
}

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)