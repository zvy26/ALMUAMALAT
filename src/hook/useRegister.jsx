import { toast } from "react-toastify"
import { request } from "../services/request"

function useRegister() {
  const handleRegister = (submitData) => {
    return request
      .post("/auth/signup", submitData)
      .then((response) => {
        if (response?.data?.status) {
          toast.success("Registration successful")
          localStorage.setItem("testUserToken", response?.data?.data?.tokens?.accessToken)
        } else {
          toast.error("Registration failed")
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message || "Something went wrong!")
      })
  }

  const handleLogin = (submitData) => {
    return request
      .post("/auth/signin", submitData)
      .then((response) => {
        if (response?.data?.status) {
          toast.success("Login successful")
          localStorage.setItem("testUserToken", response?.data?.data?.tokens?.accessToken)
        } else {
          toast.error("Login failed")
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message || "Something went wrong!")
      })
  }

  return { handleRegister, handleLogin }
}

export default useRegister
