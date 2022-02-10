import styles from './Toggle.module.css'

const ToggleLanguage = () => {
  return (
    <span className={styles.switch}>
      <input type="checkbox" />
      <span className={styles.slider} />
    </span>
  )
}

export default ToggleLanguage
