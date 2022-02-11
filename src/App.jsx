import './styles/globalStyles.css'
import { BrowserRouter } from 'react-router-dom'
import Rutas from './routes'
import Layout from './components/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Rutas />
      </Layout>
    </BrowserRouter>
  )
}

export default App
