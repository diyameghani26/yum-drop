
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FavouriteProvider } from "./context/FavouriteContext";

createRoot(document.getElementById('root')).render(
 
  <FavouriteProvider>
   <App />
</FavouriteProvider>
  
)
