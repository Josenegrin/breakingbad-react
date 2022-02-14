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
  const [authorPhrase, setAuthorPhrase] = useState('')
  const [phrase, setPhrase] = useState([])
  const [charactersDB, setCharactersDB] = useLocalStorage('characters', [])
  const [isInfoApi, setInfoApi] = useState({
    character: { loading: false, error: false, errorMessage: '' },
    phrase: { loading: false, error: false, errorMessage: '' },
  })

  useEffect(() => {
    if (!isCharacters && charactersDB.length === 0) {
      const getCharactersRequest = async () => {
        try {
          const req = await axios(URL_CHARACTERS)
          const res = req.data
          if (
            res &&
            isInfoApi?.character?.error &&
            isInfoApi?.character?.errorMessage
          ) {
            const cleanError = { ...isInfoApi }
            cleanError.character.error = false
            cleanError.character.errorMessage = ''
            setInfoApi(cleanError)
          }
          setIsCharacters(true)
          return setCharactersDB(res)
        } catch (error) {
          const throwError = { ...isInfoApi }
          throwError.character.error = true
          throwError.character.errorMessage =
            'Ha ocurrido un error, por favor recarga la página'
          return setInfoApi(throwError)
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
    if (isInfoApi.phrase?.loading) {
      const getRandomPhraseRequest = async (author) => {
        try {
          const req = await axios(`${URL_PHRASE}${author}`)
          const res = req.data

          if (res && isInfoApi.phrase?.loading) {
            const clearLoading = { ...isInfoApi }
            clearLoading.phrase.loading = false
            setInfoApi(clearLoading)
          }

          if (
            res &&
            isInfoApi.phrase?.error &&
            isInfoApi.phrase?.errorMessage
          ) {
            const cleanError = { ...isInfoApi }
            cleanError.phrase.error = false
            cleanError.phrase.errorMessage = ''
            setInfoApi(cleanError)
          }
          return setPhrase(res)
        } catch (error) {
          const throwError = { ...isInfoApi }
          throwError.phrase.error = true
          throwError.phrase.errorMessage =
            'Ha ocurrido un error, por favor dale click al botón para obtener una nueva frase'
          return setInfoApi(throwError)
        }
      }
      getRandomPhraseRequest(authorPhrase)
    }
  }, [isInfoApi.phrase?.loading])

  const getNewPhrase = () => {
    const loadingPhrase = { ...isInfoApi }
    loadingPhrase.phrase.loading = true
    setInfoApi(loadingPhrase)
  }
  return (
    <apiContext.Provider
      value={{
        charactersDB,
        authorPhrase,
        setAuthorPhrase,
        phrase,
        getNewPhrase,
        isInfoApi,
        setInfoApi,
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
