import { useTranslation } from 'react-i18next'
import styles from './Footer.module.css'

const Footer = () => {
  const { t } = useTranslation('global')
  return (
    <footer className={styles.layout_footer}>
      <span>{t('footer.title')}</span>
    </footer>
  )
}

export default Footer
