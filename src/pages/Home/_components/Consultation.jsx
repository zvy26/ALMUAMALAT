import { useReducer, useState } from "react"
import { User, Phone, Check, Send, ChevronDown } from "lucide-react"
import Uzb from "../../../assets/images/Uzb.png"
import UnitedKingdom from "../../../assets/svg/Navbar/UnitedKingdom.svg"

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      }
    case "RESET":
      return {
        name: "",
        phone: "",
        agreed: false,
      }
    default:
      return state
  }
}

const initialFormState = {
  name: "",
  phone: "",
  agreed: false,
}

const countries = [
  {
    code: "+998",
    flag: Uzb,
    name: "Uzbekistan",
  },
  {
    code: "+44",
    flag: UnitedKingdom,
    name: "United Kingdom",
  },
]

const Workshop = () => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const updateField = (e) => {
    const { name, type, value, checked } = e.target
    dispatch({
      type: "SET_FIELD",
      field: name,
      value: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form data submitted:", formState)
    dispatch({ type: "RESET" })
  }

  const handleCountrySelect = (country) => {
    setSelectedCountry(country)
    setIsDropdownOpen(false)
  }

  return (
    <section className="max-w-7xl min-h-135  mx-auto mt-12 flex flex-col overflow-hidden rounded-lg bg-white ">
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-3/5 bg-[#F5E6D3] p-8 md:p-12 flex flex-col justify-between">
          <header>
            <h1 className="text-[#D2691E] font-bold text-[28px] md:text-[36px] lg:text-[37  px] leading-[1.2] mb-6">
              Workshops and Spiritual Development
            </h1>
            <p className="text-[#D2691E] text-[16px] md:text-[18px] lg:text-[25px] font-medium leading-[1.6] max-w-none">
              Participate in our weekly workshops focused on Islamic<br/>
              studies and spiritual growth. These sessions are designed<br/>
              to help you strengthen your connection with faith and<br/>
              acquire essential skills for daily life.
            </p>
          </header>
          <nav className="mt-8 flex justify-center space-x-3">
            <span className="w-10 h-2.5 bg-teal-600 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
          </nav>
        </aside>

        <div className="w-full md:w-2/5 bg-[#F9F7F3] p-8 md:p-10">
          <h2 className="text-[#152032] font-bold text-[22px] md:text-[24px] leading-snug mb-4">Free consultation</h2>
          <p className="mb-8 text-[#152032] text-[16px] leading-[1.4] font-medium">
               Leave your phone number, and we will reach out<br/>
               to provide you with complete information about<br/>  
               our courses.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formState.name}
                onChange={updateField}
                required
                className="w-full border border-gray-300 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009688] focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="flex">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-32 h-12 border border-gray-300 rounded-l-md bg-white px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#009688] flex items-center justify-between transition-all duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <img
                      src={selectedCountry.flag || "/placeholder.svg"}
                      alt={selectedCountry.name}
                      className="w-5 h-4 object-cover rounded-sm"
                    />
                    <span className="text-sm font-medium">{selectedCountry.code}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 mt-1">
                    {countries.map((country) => (
                      <button
                        key={country.code}
                        type="button"
                        onClick={() => handleCountrySelect(country)}
                        className="w-full px-3 py-3 text-left hover:bg-gray-50 flex items-center space-x-2 first:rounded-t-md last:rounded-b-md transition-colors duration-200"
                      >
                        <img
                          src={country.flag || "/placeholder.svg"}
                          alt={country.name}
                          className="w-5 h-4 object-cover rounded-sm"
                        />
                        <span className="text-sm font-medium">{country.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative flex-1">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formState.phone}
                  onChange={updateField}
                  required
                  className="w-full border-t border-r border-b border-gray-300 rounded-r-md pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009688] focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <label className="flex items-start space-x-3 cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formState.agreed}
                  onChange={updateField}
                  required
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 mt-0.5 border-2 rounded flex items-center justify-center transition-all duration-200 ${
                    formState.agreed ? "bg-teal-600 border-teal-600" : "border-gray-300 bg-white hover:border-gray-400"
                  }`}
                >
                  {formState.agreed && <Check className="w-3 h-3 text-white" />}
                </div>
              </div>
              <span className="text-sm text-gray-700 font-medium leading-[1.4]">
                I agree to the use of my personal information for consultation purposes.
              </span>
            </label>

            <button
              type="submit"
              disabled={!formState.name || !formState.phone || !formState.agreed}
              className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-md transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Workshop
