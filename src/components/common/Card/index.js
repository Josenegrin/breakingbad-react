import PropTypes from 'prop-types'
import styles from './CardsContainer.module.css'

const CardsContainer = ({ children }) => {
  return <div className={styles.cardsContainer_container}>{children}</div>
}

export default CardsContainer

CardsContainer.propTypes = {
  children: PropTypes.element.isRequired,
}
