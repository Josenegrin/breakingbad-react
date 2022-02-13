import { BrowserRouter } from 'react-router-dom'
import './styles/globalStyles.css'
import Routes from './routes'
import Layout from './components/Layout'
import { ApiWrapper } from './context/apiContext'

const App = () => {
  return (
    <ApiWrapper>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </ApiWrapper>
  )
}

export default App
