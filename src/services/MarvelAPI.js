import axios from 'axios'

const API_KEY = 'bbe4460b855f6b8dbba2e8febfc56fea'

export default class MarvelAPI {
  constructor () {
    this.api = 'https://gateway.marvel.com:443/v1/public/'
    this.http = axios
  }
  list = async (limit) => {
    try {
      const response = await this.http.get(`${this.api}characters?apikey=${API_KEY}&limit=${limit}`)
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }
  show = async (characterID) => {
    try {
      const response = await this.http.get(`${this.api}characters/${characterID}?apikey=${API_KEY}`)
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }
  search = async (name) => {
    try {
      const response = await this.http.get(`${this.api}characters?apikey=${API_KEY}&name=${name}`)
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }
}
