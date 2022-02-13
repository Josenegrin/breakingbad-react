import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Character.module.css'
import { useApi } from '../../../context/apiContext'
import Phrase from '../phrase'

const Character = () => {
  const { t } = useTranslation('global')

  const params = useParams()
  const {
    charactersDB: charactersList,
    setAuthorPhrase,
    setIsPhrase,
    authorPhrase,
  } = useApi()

  const characterSelected = charactersList.find((character) => {
    return Number(params.id) === character.char_id
  })

  const {
    char_id: id,
    appearance,
    birthday,
    category,
    img,
    name,
    nickname,
    occupation,
    portrayed,
    status,
  } = characterSelected

  useEffect(() => {
    if (!authorPhrase) {
      setAuthorPhrase(name)
      setIsPhrase(true)
    }
  }, [characterSelected, authorPhrase])

  return (
    <section key="key" className={styles.character}>
      {characterSelected && (
        <>
          <h1 className={styles.character_header}>
            {t('character-page.title')}: {name}
          </h1>
          <div className={styles.character_details}>
            <div className={styles.character_image_container}>
              <img
                className={styles.character_image__picture}
                src={img}
                alt={`${name}`}
              />
            </div>

            <ul className={styles.character_details__list} key={`${id}`}>
              <li className={styles.character_details__item}>
                <span className={styles.list__label}>
                  {t('character-page.details.name')}:
                </span>
                <p className={styles.list__body}>{name}</p>
              </li>

              <li className={styles.character_details__item}>
                <span className={styles.list__label}>
                  {t('character-page.details.birthday')}
                </span>
                <p name="birthday">{birthday}</p>
              </li>

              <li className={styles.character_details__item}>
                <span className={styles.list__label}>
                  {t('character-page.details.occupation')}
                </span>
                <ul className={styles.list__second}>
                  {occupation.map((occu) => {
                    return (
                      <li className={styles.list__item} key={`${occu}`}>
                        {occu}
                      </li>
                    )
                  })}
                </ul>
              </li>

              <li className={styles.character_details__item}>
                <span className={styles.list__label}>
                  {t('character-page.details.status')}
                </span>
                <p>{status}</p>
              </li>

              <li className={styles.character_details__item}>
                <span className={styles.list__label}>
                  {t('character-page.details.nickname')}
                </span>
                <p>{nickname}</p>
              </li>

              <li className={styles.character_details__item}>
                <span className={styles.list__label}>
                  {t('character-page.details.category')}
                </span>
                <p>{category}</p>
              </li>

              <li className={styles.character_details__item}>
                <span className={styles.list__label}>
                  {t('character-page.details.portrayed')}
                </span>
                <p>{portrayed}</p>
              </li>

              <li className={styles.character_details__item}>
                <span className={styles.list__label}>
                  {t('character-page.details.appearances')}
                </span>
                <ul className={styles.list__second}>
                  {appearance.map((apear) => {
                    return (
                      <li className={styles.list__item} key={apear}>
                        {apear}
                      </li>
                    )
                  })}
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.character_phrase}>
            <Phrase />
          </div>
        </>
      )}
    </section>
  )
}

export default Character
