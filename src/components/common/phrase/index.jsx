import { useTranslation } from 'react-i18next'
import Button from '../Button'
import styles from './Phrase.module.css'
import { useApi } from '../../../context/apiContext'

const Phrase = () => {
  const { t } = useTranslation('global')
  const { phrase, getNewPhrase } = useApi()

  return (
    <div className={styles.phrase}>
      {phrase?.length > 0 &&
        phrase.map((quote) => {
          const { quote: message, quote_id: id } = quote
          return (
            <h2 key={id} className={styles.phrase__header}>
              `&#34;{message}&#34;`
            </h2>
          )
        })}
      <Button onClick={getNewPhrase}>
        {t('character-page.phrase.button-text')}
      </Button>
    </div>
  )
}

export default Phrase
