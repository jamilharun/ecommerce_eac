import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import { Auth0Provider } from '@auth0/auth0-react'
// import config from '../utils/auth0.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <Router> */}
        <App />

      {/* </Router> */}
  </React.StrictMode>,
)
