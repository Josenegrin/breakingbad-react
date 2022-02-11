import PropTypes from 'prop-types'
import styles from './Card.module.css'

const Card = ({ image, name, nickname }) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_img}>
        <image>{image}</image>
      </div>
      <span className={styles.card_name}>{name}</span>
      <p className={styles.card_nickname}>{nickname}</p>
    </div>
  )
}

export default Card

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
}
