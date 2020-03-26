import axios from 'axios'

const API_KEY = 'PUBLIC_API_HERE'
const TS = 'timestamp'
const HASH = 'gerar um md5(Timestamp+privateKey+publicKey)'

export default class MarvelAPI {
  constructor () {
    this.api = 'https://gateway.marvel.com:443/v1/public/'
    this.http = axios
  }
  list = async (limit) => {
    try {
      const response = await this.http.get(`${this.api}characters?ts=${TS}&apikey=${API_KEY}&hash=${HASH}&limit=${limit}`)
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }
  show = async (characterID) => {
    try {
      const response = await this.http.get(`${this.api}characters/${characterID}?apikey=${API_KEY}&ts=${TS}&hash=${HASH}`)
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }
  search = async (name) => {
    try {
      const response = await this.http.get(`${this.api}characters?ts=${TS}&apikey=${API_KEY}&hash=${HASH}&name=${name}`)
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }
}

