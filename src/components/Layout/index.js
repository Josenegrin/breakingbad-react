import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.css'
import Button from '../common/Button'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout_container}>
      <Header />
      <Button />
      <main className={styles.layout_main_container}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}
