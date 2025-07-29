import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initGA } from "./lib/analytics";

// Initialize Google Analytics on app start
const GA_MEASUREMENT_ID = 'G-04HEZWP0S1';
initGA(GA_MEASUREMENT_ID);

createRoot(document.getElementById("root")!).render(<App />);
