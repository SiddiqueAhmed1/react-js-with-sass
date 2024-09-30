import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import MsgProvider from './Provider/MsgProvider.jsx'

createRoot(document.getElementById('root')).render(
    <MsgProvider>
      <App />
    </MsgProvider>
    

)
