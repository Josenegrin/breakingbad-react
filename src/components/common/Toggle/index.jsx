/* eslint-disable jsx-a11y/label-has-associated-control */
import { useTranslation } from 'react-i18next'
import styles from './Toggle.module.css'

const Toggle = () => {
  const { i18n } = useTranslation('global')

  const handleLanguage = (e) => {
    const value = e.target.checked
    if (value) {
      const englishActivate = () => i18n.changeLanguage('en')
      englishActivate()
    } else {
      i18n.changeLanguage('es')
    }
  }

  return (
    <div className={styles.switch_container}>
      <label className={styles.switch}>
        <input onClick={(e) => handleLanguage(e)} type="checkbox" />
        <span className={styles.slider}></span>
      </label>
    </div>
  )
}

export default Toggle
