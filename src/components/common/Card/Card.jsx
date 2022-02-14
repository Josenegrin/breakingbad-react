import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'

const Card = ({ character }) => {
  const { char_id: id, img, name, nickname } = character

  return (
    <div data-testid="card" key={id} className={styles.card_container}>
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
  character: PropTypes.shape({
    char_id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    nickname: PropTypes.string,
  }),
}

Card.defaultProps = {
  character: PropTypes.shape({
    car_id: '',
    img: '',
    name: '',
    nickname: '',
  }),
}
