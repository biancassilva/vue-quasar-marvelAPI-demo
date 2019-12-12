import axios from 'axios'

const URL_BASE_MARVEL = 'https://gateway.marvel.com:443/v1/public/'
const API_KEY = 'bbe4460b855f6b8dbba2e8febfc56fea'

export default {
  getAllCharacteres: (limit, callback) => {
    const URL_CHARACTERS = `${URL_BASE_MARVEL}characters?apikey=${API_KEY}&limit=${limit}`
    axios.get(URL_CHARACTERS).then(characters => {
      if (callback) {
        callback(characters)
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
  },
  getAllComics: (limit, callback) => {
    const URL_COMICS = `${URL_BASE_MARVEL}comics?apikey=${API_KEY}&limit=${limit}`
    axios.get(URL_COMICS).then(comics => {
      if (callback) {
        callback(comics)
      }
    })
  }
}
