import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Sem from './Sem.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App  name={'Kavya Chaudhary'} email={'mailing2kavya@gmail.com'} mob={7505669314}/>
    <Sem m1={87} m2={89} m3={90}/>
    <Sem m1={89} m2={87} m3={97}/>
  </StrictMode>
)
