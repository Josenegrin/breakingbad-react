import CardsContainer from '../../components/common/Card'
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.homePage_title}>Breaking Bad Api</h1>
      <CardsContainer />
    </div>
  )
}

export default HomePage
