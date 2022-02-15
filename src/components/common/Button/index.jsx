import PropTypes from 'prop-types'
import styles from './Button.module.css'

const Button = ({ onClick, children }) => {
  return (
    <button
      data-testid="button"
      onClick={onClick}
      type="button"
      className={styles.button}
    >
      <span className={styles.button__body}>{children}</span>
    </button>
  )
}

export default Button

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
}
Button.defaultProps = {
  children: '',
  onClick: PropTypes.func,
}
