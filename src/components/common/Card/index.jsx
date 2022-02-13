import Card from './Card'
import styles from './CardsContainer.module.css'
import { useApi } from '../../../context/apiContext'

const CardsContainer = () => {
  const { charactersDB: charactersList } = useApi()

  return (
    <div
      data-testid="cards-container"
      className={styles.cardsContainer_container}
    >
      {charactersList.length > 0 &&
        charactersList.map((character) => {
          const { char_id: id } = character

          return <Card key={id} character={character} />
        })}
    </div>
  )
}

export default CardsContainer
