import PropTypes from 'prop-types'
import styles from './Button.module.css'

const Button = ({ message }) => {
  return (
    <button type="button" className={styles.button}>
      <span className={styles.button__body}>{message}</span>
    </button>
  )
}

export default Button

Button.propTypes = {
  message: PropTypes.string,
}
Button.defaultProps = {
  message: 'Nueva Frase',
}
