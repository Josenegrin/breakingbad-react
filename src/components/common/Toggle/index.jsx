/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from './Toggle.module.css'

const Toggle = () => {
  return (
    <div className={styles.switch_container}>
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.slider}></span>
      </label>
    </div>
  )
}

export default Toggle
