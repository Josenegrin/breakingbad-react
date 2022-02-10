import Button from '../Button'
import styles from './Character.module.css'

const character = () => {
  return (
    <section className={styles.character_container}>
      <div className={styles.character_details}>
        <span>Va la imágen</span>
        <ul key="id">
          <li>Nombre</li>
          <li>Nacimiento</li>
          <li>Ocupacion</li>
          <li>Status</li>
          <li>Sobrenombre</li>
        </ul>
      </div>
      <div className={styles.character_phrase}>
        <h3>AQUI VA LA FRASE BRUTAL</h3>
        <Button />
      </div>
    </section>
  )
}

export default character
