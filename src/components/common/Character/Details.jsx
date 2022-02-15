import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import styles from './Details.module.css'

const Details = ({ character }) => {
  const { t } = useTranslation('global')

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
  } = character

  return (
    <div className={styles.details}>
      {character && (
        <>
          <div className={styles.details_figure}>
            <img className={styles.details_image} src={img} alt={`${name}`} />
          </div>
          <ul className={styles.details__list} key={`character-details-${id}`}>
            <li className={styles.details__item}>
              <span className={styles.list__label}>
                {t('character-page.details.name')}:
              </span>
              <p className={styles.list__body}>{name}</p>
            </li>
            <li className={styles.details__item}>
              <span className={styles.list__label}>
                {t('character-page.details.birthday')}
              </span>
              <p name="birthday">{birthday}</p>
            </li>

            <li className={styles.details__item}>
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
            <li className={styles.details__item}>
              <span className={styles.list__label}>
                {t('character-page.details.status')}
              </span>
              <p>{status}</p>
            </li>
            <li className={styles.details__item}>
              <span className={styles.list__label}>
                {t('character-page.details.nickname')}
              </span>
              <p>{nickname}</p>
            </li>
            <li className={styles.details__item}>
              <span className={styles.list__label}>
                {t('character-page.details.category')}
              </span>
              <p>{category}</p>
            </li>
            <li className={styles.details__item}>
              <span className={styles.list__label}>
                {t('character-page.details.portrayed')}
              </span>
              <p>{portrayed}</p>
            </li>
            <li className={styles.details__item}>
              <span className={styles.list__label}>
                {t('character-page.details.appearances')}
              </span>
              <ul className={styles.list__second_appearance}>
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
        </>
      )}
    </div>
  )
}

export default Details

Details.propTypes = {
  character: PropTypes.shape({
    char_id: PropTypes.number,
    appearance: PropTypes.instanceOf(Array),
    birthday: PropTypes.string,
    category: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    nickname: PropTypes.string,
    occupation: PropTypes.instanceOf(Array),
    portrayed: PropTypes.string,
    status: PropTypes.string,
  }),
}

Details.defaultProps = {
  character: PropTypes.shape({
    char_id: '',
    appearance: [],
    birthday: '',
    category: '',
    img: '',
    name: '',
    nickname: '',
    occupation: [],
    portrayed: '',
    status: '',
  }),
}
