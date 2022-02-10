import { BrowserRouter } from 'react-router-dom'
import './styles/globalStyles.css'
import Layout from './components/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <h1>Hello World Baby</h1>
      </Layout>
    </BrowserRouter>
  )
}

export default App
