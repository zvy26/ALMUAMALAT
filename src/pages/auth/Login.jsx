import { useState } from "react"
import { Phone, Eye, EyeOff, Lock } from "lucide-react"
import LoginImage from "../../assets/images/LoginImage.png"
import LoginLogo from "../../assets/images/LoginLogo.png"
import LoginAva from "../../assets/images/LoginAva.png"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import useRegister from "../../hook/useRegister"
import { toast } from "react-toastify"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { handleLogin } = useRegister()

  const onSubmit = async (data) => {
    try {
      await handleLogin(data)
    } catch (error) {
      toast.error("Login failed. Please check your credentials.")
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16">
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4 sm:gap-0">
              <div className="flex items-center">
                <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-teal-500 rounded">
                  <img
                    src={LoginLogo}
                    alt="Al Muamalat Logo"
                    className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto hover:opacity-90 transition-opacity"
                  />
                </Link>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-gray-600 self-end sm:self-auto">
                <div className="text-right">
                  <span className="block text-xs sm:text-sm">Questions?</span>
                  <span className="block  text-xs sm:text-sm font-bold text-teal-600">Ask Diyor</span>
                </div>
                <img
                  src={LoginAva}
                  alt="Diyor's Avatar"
                  className="flex w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover"
                />
              </div>
            </header>

            <main className="mx-auto w-full max-w-sm sm:max-w-md space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                  Get started
                </h1>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    {...register("phone_number", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^\+?[1-9]\d{1,14}$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                    className="w-full rounded-lg border border-gray-300 px-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors bg-gray-50"
                  />
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>

                <div className="relative">
                  <input
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                    className="w-full rounded-lg border border-gray-300 px-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors bg-gray-50"
                  />
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600 transition-colors focus:outline-none"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-teal-600 px-4 py-3 text-sm font-semibold text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Sign in
                </button>
              </form>

              <div className="text-center text-sm text-gray-600">
                <Link
                  to="/register"
                  className="font-semibold text-teal-600 hover:text-teal-700 transition-colors focus:outline-none focus:underline"
                >
                  Create a new account !
                </Link>
              </div>
            </main>
          </div>

          {/* Right side - Image */}
          <div className="hidden lg:flex items-center justify-center bg-teal-600 p-8 xl:p-12">
            <div className="text-center text-white space-y-6 max-w-lg xl:max-w-xl">
              <div className="relative">
                <img
                  src={LoginImage || "/placeholder.svg"}
                  alt="Illustration of a person interacting with a mobile app, representing Islamic Finance"
                  className="w-full h-auto max-w-md xl:max-w-lg mx-auto"
                />
              </div>
              <h2 className="text-2xl xl:text-2xl 2xl:text-2xl font-bold leading-tight text-balance">
                Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}