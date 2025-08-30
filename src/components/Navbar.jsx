"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import MainIcon from "../assets/svg/Navbar/MainIcon.svg"
import UnitedKingdom from "../assets/svg/Navbar/UnitedKingdom.svg"
import Uzb from "../assets/images/Uzb.png"
import Russian from "../assets/images/Russian.png"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProgramsOpen, setIsProgramsOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState({ code: "ENG", flag: UnitedKingdom })

  const languages = [
    { code: "ENG", flag: UnitedKingdom, name: "English" },
    { code: "UZB", flag: Uzb, name: "Uzbek" },
    { code: "RUS", flag: Russian, name: "Russian" },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const togglePrograms = () => setIsProgramsOpen(!isProgramsOpen)
  const toggleLanguage = () => setIsLanguageOpen(!isLanguageOpen)

  const selectLanguage = (language) => {
    setSelectedLanguage(language)
    setIsLanguageOpen(false)
  }

  return (
    <div>
      <nav className="bg-white shadow-lg font-open-sans md:fixed md:top-0 md:left-0 md:right-0 md:z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img src={MainIcon || "/placeholder.svg"} alt="AL MUAMALAT Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
              <div className="text-lg sm:text-xl font-bold text-teal-600">AL MUAMALAT</div>
            </div>

            {/* Center menu */}
            <div className="hidden lg:flex flex-1 justify-center space-x-8 xl:space-x-12">
              <Link to="/" className="text-gray-700 hover:text-teal-600 transition-colors text-sm xl:text-base">
                Home
              </Link>

              <div className="relative">
                <button
                  onClick={togglePrograms}
                  className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 transition-colors text-sm xl:text-base"
                >
                  <span>Programs</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isProgramsOpen ? "rotate-180" : ""}`} />
                </button>

                {isProgramsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-60 xl:w-64 bg-white rounded-md shadow-lg border border-gray-500 z-50">
                    <div className="divide-y divide-gray-400">
                      <Link
                        to="/InternationalPrograms"
                        className="block px-4 py-3 text-sm text-gray-700 hover:text-teal-600 hover:bg-gray-50 whitespace-nowrap transition-colors"
                      >
                        International educational programs
                      </Link>
                      <Link
                        to="/SpecializedCourses"
                        className="block px-4 py-3 text-sm text-gray-700 hover:text-teal-600 hover:bg-gray-50 whitespace-nowrap transition-colors"
                      >
                        Specialized courses
                      </Link>
                      <Link
                        to="/IslamicFinance"
                        className="block px-4 py-3 text-sm text-gray-700 hover:text-teal-600 hover:bg-gray-50 whitespace-nowrap transition-colors"
                      >
                        Islamic Finance Literacy Course
                      </Link>
                      <Link
                        to="/Certification"
                        className="block px-4 py-3 text-sm text-gray-700 hover:text-teal-600 hover:bg-gray-50 whitespace-nowrap transition-colors"
                      >
                        Certification program
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="#" className="text-gray-700 hover:text-teal-600 transition-colors text-sm xl:text-base">
                Finance tools
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-teal-600 transition-colors text-sm xl:text-base">
                Contact
              </Link>
            </div>

            {/* Right menu */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 text-gray-700 hover:text-teal-600 transition-colors"
                >
                  <img
                    src={selectedLanguage.flag || "/placeholder.svg"}
                    alt={`${selectedLanguage.name} Flag`}
                    className="w-4 h-3 sm:w-5 sm:h-4 object-cover"
                  />
                  <span className="text-xs sm:text-sm font-medium">{selectedLanguage.code}</span>
                  <ChevronDown
                    className={`w-3 h-3 text-black transition-transform ${isLanguageOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isLanguageOpen && (
                  <div className="absolute top-full right-0 mt-2 w-20 sm:w-24 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-1">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => selectLanguage(language)}
                          className={`w-full flex items-center space-x-2 px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                            selectedLanguage.code === language.code ? "bg-blue-50 text-teal-600" : "text-gray-700"
                          }`}
                        >
                          <img
                            src={language.flag || "/placeholder.svg"}
                            alt={`${language.name} Flag`}
                            className="w-4 h-3 sm:w-5 sm:h-4 object-cover"
                          />
                          <span className="font-medium text-xs sm:text-sm">{language.code}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <span className="text-gray-400 hidden lg:inline">|</span>

              <button
                onClick={() => navigate("/login")}
                className="bg-teal-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md hover:bg-teal-700 transition-colors focus:outline-none text-xs sm:text-sm font-medium"
              >
                Sign in
              </button>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex items-center space-x-2 md:hidden">
              <button
                onClick={() => navigate("/login")}
                className="bg-teal-600 text-white px-3 py-1.5 rounded-md hover:bg-teal-700 transition-colors focus:outline-none text-xs font-medium"
              >
                Sign in
              </button>
              <button onClick={toggleMenu} className="text-black hover:text-teal-600 transition-colors p-1">
                {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t bg-white shadow-lg">
              <div className="py-2 space-y-1 max-h-96 overflow-y-auto">
                <Link
                  to="/"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-teal-600 transition-colors"
                >
                  Home
                </Link>

                <div className="border-t border-gray-100">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Programs</div>
                  <Link
                    to="/InternationalPrograms"
                    className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600 transition-colors"
                  >
                    International Programs
                  </Link>
                  <Link
                    to="/SpecializedCourses"
                    className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600 transition-colors"
                  >
                    Specialized Courses
                  </Link>
                  <Link
                    to="/IslamicFinance"
                    className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600 transition-colors"
                  >
                    Islamic Finance
                  </Link>
                  <Link
                    to="/Certification"
                    className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600 transition-colors"
                  >
                    Certification
                  </Link>
                </div>

                <Link
                  to="#"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-teal-600 transition-colors"
                >
                  Finance tools
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-teal-600 transition-colors"
                >
                  Contact
                </Link>

                <div className="border-t border-gray-100 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Language:</span>
                    <div className="flex items-center space-x-2">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => selectLanguage(language)}
                          className={`flex items-center space-x-1 px-2 py-1 rounded text-xs transition-colors ${
                            selectedLanguage.code === language.code
                              ? "bg-teal-100 text-teal-600"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <img
                            src={language.flag || "/placeholder.svg"}
                            alt={`${language.name} Flag`}
                            className="w-4 h-3 object-cover"
                          />
                          <span>{language.code}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
