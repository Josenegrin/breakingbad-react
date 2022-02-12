/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-body-style */
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.main_nav}>
      <ul className={styles.main_nav__list}>
        <li className={styles.main_nav__item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.main_nav__link__active : styles.main__nav__link
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
