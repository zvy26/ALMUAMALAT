import axios from "axios"

const request = axios.create({
  baseURL: "https://api.al-muamalat.uz/api",
  headers: {
    "Content-Type": "application/json",
  },
})

request.interceptors.request.use(
  (Response) => {
    const token = localStorage.getItem("testUserToken")
    if (token) {
      Response.headers.Authorization = `Bearer ${token}`
    }
    return Response
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  (Response) => {
    return Response
  },
  (error) => {
    const status = error.response?.status
    if (status === 401) {
      localStorage.clear()
    }
    return Promise.reject(error)
  },
)

export { request }
