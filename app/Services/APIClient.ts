import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export default class APIClient {
  public static async call({ method = 'POST', url, headers, data }: AxiosRequestConfig): Promise<AxiosResponse<any>> {
    return new Promise(async (resolve, reject) => {      
      if (headers) {
        headers['Content-Type'] = 'application/json'
      } else {
        headers = { 'Content-Type' : 'application/json'}
      }
     
      const request: AxiosRequestConfig = { method, url, headers, data }
      try {
        const res = await axios(request)
        resolve(res)
      } catch (error) {
        reject(error)
      }
    })
  }

  public static async get({ url, headers, data }: AxiosRequestConfig): Promise<AxiosResponse<any>> {
    return this.call({ url, headers, data, method: 'GET' })
  }

  public static async post({ url, headers, data }: AxiosRequestConfig): Promise<AxiosResponse<any>> {
    return this.call({ url, headers, data, method: 'POST' })
  }

  public static async put({ url, headers, data }: AxiosRequestConfig): Promise<AxiosResponse<any>> {
    return this.call({ url, headers, data, method: 'PUT' })
  }

  public static async delete({ url, headers, data }: AxiosRequestConfig): Promise<AxiosResponse<any>> {
    return this.call({ url, headers, data, method: 'DELETE' })
  }
}
