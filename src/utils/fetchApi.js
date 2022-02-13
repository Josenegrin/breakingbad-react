import axios from 'axios'
import { URL_CHARACTERS, URL_PHRASE } from './constants'

export const getCharactersRequest = async () => {
  try {
    const req = await axios(URL_CHARACTERS)
    const res = req.data
    return res
  } catch (error) {
    return error
  }
}

export const getRandomPhraseRequest = async (author) => {
  try {
    const request = await axios(`${URL_PHRASE}${author}`)
    const response = request.data
    return response
  } catch (error) {
    return error
  }
}
