import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout_container}>
      <Header />
      <main data-testid="main" className={styles.layout_main_container}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]),
}

Layout.defaultProps = {
  children: PropTypes.oneOfType([PropTypes.node]),
}
