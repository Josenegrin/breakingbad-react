import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'

const Card = ({ id, img, name, nickname }) => {
  return (
    <div key={id} className={styles.card_container}>
      <Link className={styles.card_container__link} to={`/character/${id}`}>
        <div className={styles.card__figure}>
          <img className={styles.card__image} src={img} alt={`${name}`} />
        </div>
        <span className={styles.card_name}>{name}</span>
        <p className={styles.card_nickname}>{nickname}</p>
      </Link>
    </div>
  )
}

export default Card

Card.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
}
