import axios, { AxiosInstance } from 'axios'

export abstract class AxiosHttpClient {
  protected readonly instance: AxiosInstance

  constructor() {
    const baseURL = process.env.NEXT_PUBLIC_API_URL ?? ''
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY ?? ''
    }

    this.instance = axios.create({ baseURL, headers })
  }
}
