import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { URL_CHARACTERS, URL_PHRASE } from '../utils/constants'
import { splitAuthorName } from '../utils/splitAuthorName'

export const apiContext = createContext()

export const useApi = () => useContext(apiContext)

export const ApiWrapper = ({ children }) => {
  const [isCharacters, setIsCharacters] = useState(false)
  const [isPhrase, setIsPhrase] = useState(false)
  const [authorPhrase, setAuthorPhrase] = useState('')
  const [phrase, setPhrase] = useState([])
  const [charactersDB, setCharactersDB] = useLocalStorage('characters', [])

  useEffect(() => {
    if (!isCharacters && charactersDB.length === 0) {
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

  useEffect(() => {
    if (authorPhrase) {
      const authorNameAsParams = splitAuthorName(authorPhrase)
      setAuthorPhrase(authorNameAsParams)
    }
  }, [authorPhrase])

  useEffect(() => {
    if (isPhrase) {
      const getRandomPhraseRequest = async (author) => {
        try {
          const request = await axios(`${URL_PHRASE}${author}`)
          const response = request.data
          setIsPhrase(false)
          return setPhrase(response)
        } catch (error) {
          return error
        }
      }
      getRandomPhraseRequest(authorPhrase)
    }
  }, [isPhrase])

  const getNewPhrase = () => {
    setIsPhrase(true)
  }
  return (
    <apiContext.Provider
      value={{
        charactersDB,
        authorPhrase,
        setAuthorPhrase,
        phrase,
        setIsPhrase,
        getNewPhrase,
      }}
    >
      {children}
    </apiContext.Provider>
  )
}

ApiWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]),
}

ApiWrapper.defaultProps = {
  children: PropTypes.oneOfType([PropTypes.node]),
}
