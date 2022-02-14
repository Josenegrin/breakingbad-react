import PropTypes from 'prop-types'
import styles from './ErrorMessage.styles.css'

const ErrorMessage = ({ errorMessage }) => {
  return (
    <div className={styles.errorMessage}>
      <h2 className={styles.errorMessage__header}>{errorMessage}</h2>
    </div>
  )
}

export default ErrorMessage

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string,
}
ErrorMessage.defaultProps = {
  errorMessage: 'Ha ocurrido un error :(',
}
