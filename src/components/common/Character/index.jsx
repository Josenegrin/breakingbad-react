/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from '../Button'
import styles from './Character.module.css'
import { characters, randomQuote } from '../../../bd'

const Character = () => {
  const character = characters[0]
  const {
    char_id: id,
    appearance,
    // better_call_saul_appearance,
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
    <section key={id} className={styles.character}>
      <h1 className={styles.character_header}>Personaje: {name}</h1>
      <div className={styles.character_details}>
        <div className={styles.character_image_container}>
          <img
            className={styles.character_image__picture}
            src={img}
            alt={`${name}`}
          />
        </div>

        <ul className={styles.character_details__list} key="id">
          <li className={styles.character_details__item}>
            <label className={styles.list__label}>Nombre:</label>
            <p className={styles.list__body}>{name}</p>
          </li>
          <li className={styles.character_details__item}>
            <label className={styles.list__label}>Nacimiento</label>
            <p>{birthday}</p>
          </li>
          <li className={styles.character_details__item}>
            <label className={styles.list__label}>Ocupación</label>
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
            <label className={styles.list__label}>Status</label>
            <p>{status}</p>
          </li>
          <li className={styles.character_details__item}>
            <label className={styles.list__label}>Sobrenombre</label>
            <p>{nickname}</p>
          </li>
          <li className={styles.character_details__item}>
            <label className={styles.list__label}>Categoria</label>
            <p>{category}</p>
          </li>
          <li className={styles.character_details__item}>
            <label className={styles.list__label}>Portrayed</label>
            <p>{portrayed}</p>
          </li>
          <li className={styles.character_details__item}>
            <label className={styles.list__label}>Apariciones</label>
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
        {randomQuote.map((quote) => {
          return (
            <h2
              key={quote.quote_id}
              className={styles.character_phrase__header}
            >
              &#34;{quote.quote}&#34;
            </h2>
          )
        })}
        <Button message="Nueva Frase" />
      </div>
    </section>
  )
}

export default Character
