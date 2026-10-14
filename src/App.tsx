import { createBrowserRouter, type RouteObject } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { Layout } from './components/Layout'
import About from './pages/About'
import Business from './pages/Business'
import Contact from './pages/Contact'
import Home from './pages/Home'
import News from './pages/News'
import NotFound from './pages/NotFound'
import Products from './pages/Products'

// The same pages serve both languages: Korean at the root, English under /en.
const pages = (): RouteObject[] => [
  { index: true, element: <Home /> },
  { path: 'about', element: <About /> },
  { path: 'business', element: <Business /> },
  { path: 'products', element: <Products /> },
  { path: 'news', element: <News /> },
  { path: 'contact', element: <Contact /> },
  { path: '*', element: <NotFound /> },
]

// One shared layout wraps both branches, so switching language keeps the header,
// smooth scrolling and intro state instead of remounting the whole page.
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/en', children: pages() },
      { path: '/', children: pages() },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
