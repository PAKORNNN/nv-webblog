import axios from 'axios'
import store from '@/store'

export default() => {
  return axios.create({
    baseURL : 'http://localhost:8081',
    headers: {
    Authenization: `Bearer ${store.state.token}`
    }
  })
}