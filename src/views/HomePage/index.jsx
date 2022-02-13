import styles from './HomePage.module.css'
import CardsContainer from '../../components/common/Card'

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.homePage_title}>Breaking Bad Api</h1>
      <CardsContainer />
    </div>
  )
}

export default HomePage
