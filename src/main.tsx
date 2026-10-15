import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@sun-typeface/suit/fonts/variable/woff2/SUIT-Variable.css'
import 'lenis/dist/lenis.css'
import './styles/base.css'
import './styles/components.css'
import './styles/layout.css'
import './styles/home.css'
import './styles/pages.css'
import App from './App'

// 새로고침하면 브라우저가 예전 스크롤 위치를 복원하지 않고, 항상 맨 위에서 인트로부터 시작합니다.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
