// import PropTypes from 'prop-types'
import { characters } from '../../../bd'
import Card from './Card'
import styles from './CardsContainer.module.css'

const CardsContainer = () => {
  return (
    <div className={styles.cardsContainer_container}>
      {characters &&
        characters.map((character) => {
          const { char_id: id, name, nickname, img } = character

          return (
            <Card key={id} id={id} img={img} name={name} nickname={nickname} />
          )
        })}
    </div>
  )
}

export default CardsContainer

// CardsContainer.propTypes = {
//   children: PropTypes.element.isRequired,
// }
