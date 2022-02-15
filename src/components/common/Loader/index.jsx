import styles from './Spinner.module.css'

const Loader = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinner_spin}></div>
    </div>
  )
}

export default Loader
