import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'https://s.bdyoo.com/mobile',
    timeout: 5000
  })

  return instance(config)
}