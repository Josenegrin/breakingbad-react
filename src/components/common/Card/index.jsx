import Card from './Card'
import styles from './CardsContainer.module.css'
import Loader from '../Loader'
import ErrorMessage from '../ErrorMessage'
import { useApi } from '../../../context/apiContext'

const CardsContainer = () => {
  const { charactersDB: charactersList, isInfoApi } = useApi()
  const { character: characterInfo } = isInfoApi
  return (
    <div
      data-testid="cards-container"
      className={styles.cardsContainer_container}
    >
      {characterInfo.errorMessage && (
        <ErrorMessage errorMessage={characterInfo.errorMessage} />
      )}
      {charactersList.length === 0 && !characterInfo.errorMessage ? (
        <div className={styles.cardsContainer_container_loader}>
          <Loader />
        </div>
      ) : (
        charactersList.length > 0 &&
        !characterInfo.errorMessage &&
        charactersList.map((character) => {
          const { char_id: id } = character

          return <Card key={id} character={character} />
        })
      )}
    </div>
  )
}

export default CardsContainer
