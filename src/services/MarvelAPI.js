import axios from 'axios'

const URL_BASE_MARVEL = 'https://gateway.marvel.com/v1/public/'
const API_KEY = 'sua chave publica aqui'
const TS = 'timestamp'
const HASH = 'gerar um md5(Timestamp+privateKey+publicKey)'

export default {
  getAllCharacteres: (limit, callback) => {
    const URL_CHARACTERS = `${URL_BASE_MARVEL}characters?ts=${TS}&apikey=${API_KEY}&hash=${HASH}&limit=${limit}`
    axios.get(URL_CHARACTERS).then(characters => {
      if (callback) {
        callback(characters)
      }
    })
  },
  getCharacterByID: (characterID, callback) => {
    const URL_CHARACTER_BY_ID = `${URL_BASE_MARVEL}characters/${characterID}?apikey=${API_KEY}&ts=${TS}&hash=${HASH}`
    axios.get(URL_CHARACTER_BY_ID).then(character => {
      if (callback) {
        callback(character)
      }
    })
  },
  searchCharacter: (name, callback) => {
    const URL_SEARCH_CHARACTER = `${URL_BASE_MARVEL}characters?ts=${TS}&apikey=${API_KEY}&hash=${HASH}&name=${name}`
    axios.get(URL_SEARCH_CHARACTER).then(character => {
      if (callback) {
        callback(character)
      }
    })
  }
}

