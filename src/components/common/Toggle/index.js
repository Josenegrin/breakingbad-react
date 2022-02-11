/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
import styles from './Toggle.module.css'

const ToggleLanguage = () => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" />
      <span className={styles.slider}></span>
    </label>
  )
}

export default ToggleLanguage
