import { Youtube, Facebook, Twitter, Instagram } from "lucide-react"
import FooterLogo from "../assets/images/FooterLogo.png"

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6 sm:mb-8">
          <img src={FooterLogo || "/placeholder.svg"} alt="Dior Design" className="h-12 sm:h-16 w-auto" />
        </div>

        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10 mb-6 sm:mb-8 lg:mb-10 px-4">
          <a
            href="#home"
            className="text-white hover:text-gray-200 transition-colors duration-200 font-medium text-sm sm:text-base"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-gray-200 transition-colors duration-200 font-medium text-sm sm:text-base"
          >
            About
          </a>
          <a
            href="#service"
            className="text-white hover:text-gray-200 transition-colors duration-200 font-medium text-sm sm:text-base"
          >
            Service
          </a>
          <a
            href="#contact"
            className="text-white hover:text-gray-200 transition-colors duration-200 font-medium text-sm sm:text-base"
          >
            Contact Us
          </a>
        </nav>

        <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
          <a
            href="#youtube"
            className="text-white hover:text-gray-200 transition-colors duration-200 p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="#facebook"
            className="text-white hover:text-gray-200 transition-colors duration-200 p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="#twitter"
            className="text-white hover:text-gray-200 transition-colors duration-200 p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="#instagram"
            className="text-white hover:text-gray-200 transition-colors duration-200 p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>

        <div className="border-t border-white border-opacity-30 mb-4 sm:mb-6"></div>

        <div className="text-center font-medium">
          <p className="text-white/80 text-xs sm:text-sm">Copyright Satyam Studio</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
