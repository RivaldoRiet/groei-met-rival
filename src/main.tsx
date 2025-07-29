import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initGA } from "./lib/analytics";

// Initialize Google Analytics on app start
// Replace 'G-XXXXXXXXXX' with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
  initGA(GA_MEASUREMENT_ID);
}

createRoot(document.getElementById("root")!).render(<App />);
