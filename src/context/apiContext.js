/* eslint-disable react/forbid-prop-types */
import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { URL_CHARACTERS } from '../utils/constants'

export const apiContext = createContext()

export const useApi = () => useContext(apiContext)

export const ApiWrapper = ({ children }) => {
  const [isCharacters, setIsCharacters] = useState(false)
  // const [isPhrase, setIsPhrase] = useState(false)
  const [charactersDB, setCharactersDB] = useLocalStorage('characters', [])

  useEffect(() => {
    if ((!isCharacters && !charactersDB) || charactersDB.lengt === 0) {
      const getCharactersRequest = async () => {
        try {
          const req = await axios(URL_CHARACTERS)
          const res = req.data
          setIsCharacters(true)
          return setCharactersDB(res)
        } catch (error) {
          return error
        }
      }
      getCharactersRequest()
    }
  }, [isCharacters, charactersDB])

  const characters = useMemo(() => ({ charactersDB }), [])

  return (
    <apiContext.Provider
      value={{
        characters,
      }}
    >
      {children}
    </apiContext.Provider>
  )
}

ApiWrapper.propTypes = {
  children: PropTypes.any,
}

ApiWrapper.defaultProps = {
  children: <h1>Hello</h1>,
}
