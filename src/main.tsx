import { createRoot } from 'react-dom/client'
import { AppProvider } from './app/ui/components/AppProvider/AppProvider'
import './index.css'

 globalThis.ymaps = window.ymaps;


createRoot(document.getElementById('root')!).render(
    <AppProvider />
)

