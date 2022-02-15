import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Character.module.css'
import { useApi } from '../../../context/apiContext'
import Details from './Details'
import Phrase from '../Phrase'

const Character = () => {
  const { t } = useTranslation('global')

  const params = useParams()
  const {
    charactersDB: charactersList,
    setAuthorPhrase,
    isInfoApi,
    setInfoApi,
    authorPhrase,
  } = useApi()

  const characterSelected = charactersList.find((character) => {
    return Number(params.id) === character.char_id
  })

  const { char_id: id, name } = characterSelected

  useEffect(() => {
    if (!authorPhrase) {
      const loadingPhrase = { ...isInfoApi }
      loadingPhrase.phrase.loading = true
      setInfoApi(loadingPhrase)
      setAuthorPhrase(name)
    }
  }, [characterSelected, authorPhrase])

  return (
    <section key={`characer-${id}`} className={styles.character}>
      {characterSelected && (
        <>
          <h1 className={styles.character_header}>
            {t('character-page.title')}: {name}
          </h1>
          <Details character={characterSelected} />
          <div className={styles.character_phrase}>
            <Phrase />
          </div>
        </>
      )}
    </section>
  )
}

export default Character
