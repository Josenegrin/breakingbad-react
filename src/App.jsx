import { BrowserRouter } from 'react-router-dom'
import './styles/globalStyles.css'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import Routes from './routes'
import Layout from './components/Layout'
import { ApiWrapper } from './context/apiContext'
import globalEs from './translations/es/global.json'
import globalEn from './translations/en/global.json'

const App = () => {
  i18next.init({
    interpolation: { escapeValue: false },
    lng: 'es',
    resources: {
      es: {
        global: globalEs,
      },
      en: {
        global: globalEn,
      },
    },
  })

  return (
    <ApiWrapper>
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </I18nextProvider>
    </ApiWrapper>
  )
}

export default App
