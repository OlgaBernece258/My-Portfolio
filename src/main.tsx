import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <App />
      </ThemeProvider>
    
  </StrictMode>,
)
