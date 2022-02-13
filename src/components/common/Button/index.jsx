import PropTypes from 'prop-types'
import styles from './Button.module.css'

const Button = ({ onClick, message }) => {
  return (
    <button onClick={onClick} type="button" className={styles.button}>
      <span className={styles.button__body}>{message}</span>
    </button>
  )
}

export default Button

Button.propTypes = {
  message: PropTypes.string,
  onClick: PropTypes.bool,
}
Button.defaultProps = {
  message: 'Nueva Frase',
  onClick: false,
}
