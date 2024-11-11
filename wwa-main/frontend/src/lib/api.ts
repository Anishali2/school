import axios from 'axios'
import cookies from 'cookies-next'
import { paths } from '../types/api-codegen'
import createClient, { Middleware } from 'openapi-fetch'

const apiClient = axios.create({
  baseURL: 'http://localhost:1024/api'
  // baseURL:  'https://school-mangagement-backend.vercel.app/api'
})

apiClient.interceptors.request.use(function (config) {
  const token = cookies.getCookie('token')
  console.log('token--->', token)
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export { apiClient }

const axiosClient = createClient<paths>({
  baseUrl: 'http://localhost:1024/'
})
const myMiddleware: Middleware = {
  async onRequest({ request }) {
    const accessToken = cookies.getCookie('token')
    request.headers.set('Authorization', `Bearer ${accessToken}`)
    return request
  },
  async onResponse({ response }) {
    const { body, ...resOptions } = response
    // change status of response
    return new Response(body, { ...resOptions, status: 200 })
  }
}
axiosClient.use(myMiddleware)
// axiosClient.GET('/')
export { axiosClient }
