import { useTranslation } from 'react-i18next'
import Button from '../Button'
import styles from './Phrase.module.css'
import { useApi } from '../../../context/apiContext'
import ErrorMessage from '../ErrorMessage'
import Loader from '../Loader'

const Phrase = () => {
  const { t } = useTranslation('global')
  const { phrase, getNewPhrase, isInfoApi } = useApi()
  const { phrase: phraseInfo } = isInfoApi
  return (
    <div data-testid="phrase" className={styles.phrase}>
      {phraseInfo.errorMessage && (
        <ErrorMessage errorMessage={phraseInfo.errorMessage} />
      )}
      {phraseInfo.loading && !phraseInfo.errorMessage ? (
        <div className={styles.phrase__header}>
          <Loader />
        </div>
      ) : (
        phrase?.length > 0 &&
        !phraseInfo.errorMessage &&
        phrase.map((quote) => {
          const { quote: message, quote_id: id } = quote
          return (
            <h2 key={id} className={styles.phrase__header}>
              `&#34;{message}&#34;`
            </h2>
          )
        })
      )}
      <Button onClick={getNewPhrase}>
        {t('character-page.phrase.button-text')}
      </Button>
    </div>
  )
}

export default Phrase
