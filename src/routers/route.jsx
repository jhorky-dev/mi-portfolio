import { Routes, Route} from 'react-router'
import { Layout } from '../components/layouts/layout'
import { Home } from '../pages/home'

export function MyRoutes() {
  return (
    <Routes>
      <Route 
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        } 
      />
    </Routes>
  )
}