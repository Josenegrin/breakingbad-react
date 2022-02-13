import PropTypes from 'prop-types'
import styles from './Button.module.css'

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} type="button" className={styles.button}>
      <span className={styles.button__body}>{children}</span>
    </button>
  )
}

export default Button

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.bool,
}
Button.defaultProps = {
  children: 'Nueva Frase',
  onClick: false,
}
