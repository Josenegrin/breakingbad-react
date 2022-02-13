import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  const { t } = useTranslation('global')
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
            {t('header.nav.home')}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
