import { useTranslation } from 'react-i18next'
import styles from './HomePage.module.css'
import CardsContainer from '../../components/common/Card'

const HomePage = () => {
  const { t } = useTranslation('global')

  return (
    <div className={styles.homePage}>
      <h1 className={styles.homePage_title}>{t('home-page.title')}</h1>
      <CardsContainer />
    </div>
  )
}

export default HomePage
