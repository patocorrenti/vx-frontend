import axios from 'axios'

const user = JSON.parse(localStorage.getItem('user'));

export default axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': user && user.access ? 'Bearer ' + user.access : ''
  }
})