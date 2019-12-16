import axios from 'axios'

const URL_BASE_MARVEL = 'https://gateway.marvel.com:443/v1/public/'
const API_KEY = 'YOUR-API-KEY'

export default {
  getAllCharacteres: (limit, callback) => {
    const URL_CHARACTERS = `${URL_BASE_MARVEL}characters?apikey=${API_KEY}&limit=${limit}`
    axios.get(URL_CHARACTERS).then(characters => {
      if (callback) {
        callback(characters)
      }
    })
  },
  getCharacterByID: (characterID, callback) => {
    const URL_CHARACTER_BY_ID = `${URL_BASE_MARVEL}characters/${characterID}?apikey=${API_KEY}`
    axios.get(URL_CHARACTER_BY_ID).then(character => {
      if (callback) {
        callback(character)
      }
    })
  },
  searchCharacter: (name, callback) => {
    const URL_SEARCH_CHARACTER = `${URL_BASE_MARVEL}characters?apikey=${API_KEY}&name=${name}`
    axios.get(URL_SEARCH_CHARACTER).then(character => {
      if (callback) {
        callback(character)
      }
    })
  }
}
