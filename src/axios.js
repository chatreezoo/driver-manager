import axios from 'axios'

const instance = axios.create({
baseURL:'https://driver-manager-backend.vercel.app'
})

export default instance