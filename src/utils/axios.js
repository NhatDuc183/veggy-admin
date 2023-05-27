import axios from 'axios'
const BASE_URL = 'http://127.0.0.1:8080/veggy-service/'
// const BASE_URL = process.env.REACT_APP_API_URL
const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})
instance.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem('token')
  if (accessToken) {
    const { headers } = config
    return {
      ...config,
      headers: {
        ...headers,
        'Access-Token': `Token ${accessToken}`,
      },
    }
  }
  return config
})

export default instance
