import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import Navbar from '../Navbar'
import Toggle from '../Toggle'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header data-testid="header" className={styles.header}>
      <Link className={styles.header_logo} to="/">
        <img
          className={styles.headear_logo__image}
          src={logo}
          alt="Breaking Bad"
        />
      </Link>
      <Navbar />
      <Toggle />
    </header>
  )
}

export default Header
