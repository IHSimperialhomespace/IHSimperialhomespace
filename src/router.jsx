// Lightweight hash router — no extra packages needed
import { useState, useEffect, createContext, useContext } from 'react'

const RouterContext = createContext({ page: 'home', navigate: () => {} })

export const useRouter = () => useContext(RouterContext)

export const Router = ({ children }) => {
  const getPage = () => {
    const hash = window.location.hash.replace('#/', '').replace('#', '') || 'home'
    return hash
  }

  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const handler = () => setPage(getPage())
    window.addEventListener('hashchange', handler)
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  const navigate = (p) => {
    window.location.hash = `/${p}`
  }

  return (
    <RouterContext.Provider value={{ page, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}
