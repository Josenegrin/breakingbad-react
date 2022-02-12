import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Toggle from '../../common/Toggle'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.header_logo} to="/">
        <span className={styles.headear_logo__image}>Breaking Bad</span>
      </Link>
      <Navbar />
      <Toggle />
    </header>
  )
}

export default Header
