import React from 'react'
import ToggleLanguage from '../../common/Toggle'
import styles from './Header.module.css'

const index = () => {
  return (
    <header className={styles.layout_header}>
      <span>
        <a href="/">Breaking Bad</a>
      </span>
      <ToggleLanguage />
    </header>
  )
}

export default index
