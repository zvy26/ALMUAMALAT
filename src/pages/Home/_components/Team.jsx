import { useState, useEffect } from "react"
import { Mail, Instagram, Facebook, Twitter } from "lucide-react"
import Expert1 from "../../../assets/images/Expert1.png"
import Expert2 from "../../../assets/images/Expert2.png"
import Expert3 from "../../../assets/images/Expert3.png"

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Mezbah Uddin Ahmed",
      image: Expert1,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      social: {
        email: "#",
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "Dr. Sarah Abdullah",
      image: Expert2,
      description:
        "With over 15 years of experience in Islamic banking and finance, Dr. Sarah brings deep expertise in Shariah-compliant investment strategies and ethical financial management.",
      social: {
        email: "#",
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      id: 3,
      name: "Prof. Omar Hassan",
      image: Expert3,
      description:
        "A renowned scholar in Islamic finance with expertise in sukuk markets and Islamic capital market development. He has consulted for major financial institutions worldwide.",
      social: {
        email: "#",
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [teamMembers.length])

  const currentMember = teamMembers[currentIndex]

  return (
    <div className="bg-gray-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            Our team consists of seasoned professionals with extensive experience in Islamic finance and management.
            Each member brings a unique set of skills and expertise.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-20 xl:-left-30 top-4 sm:top-8 w-32 sm:w-40 lg:w-50 h-48 sm:h-56 lg:h-64 xl:h-[350px] bg-[#D2E6E4] rounded-lg hidden xl:block cursor-pointer transition-all duration-300 hover:brightness-110 opacity-40 hover:opacity-80">
            <img
              src={teamMembers[(currentIndex + 2) % teamMembers.length].image || "/placeholder.svg"}
              alt={teamMembers[(currentIndex + 2) % teamMembers.length].name}
              className="w-full h-full object-cover rounded-lg opacity-60 hover:opacity-90 transition-opacity duration-300"
              onClick={() => setCurrentIndex((currentIndex + 2) % teamMembers.length)}
            />
          </div>

          <div className="absolute -right-20 xl:-right-30 top-4 sm:top-8 w-32 sm:w-40 lg:w-50 h-48 sm:h-56 lg:h-64 xl:h-[350px] bg-[#D2E6E4] rounded-lg hidden xl:block cursor-pointer transition-all duration-300 hover:brightness-110 opacity-40 hover:opacity-80">
            <img
              src={teamMembers[(currentIndex + 1) % teamMembers.length].image || "/placeholder.svg"}
              alt={teamMembers[(currentIndex + 1) % teamMembers.length].name}
              className="w-full h-full object-cover rounded-lg opacity-60 hover:opacity-90 transition-opacity duration-300"
              onClick={() => setCurrentIndex((currentIndex + 1) % teamMembers.length)}
            />
          </div>

          <div className="bg-[#D2E6E4] rounded-xl sm:rounded-2xl min-h-[400px] sm:h-[450px] lg:h-[400px] p-4 sm:p-6 lg:p-8 xl:p-12 mx-auto max-w-5xl relative z-10 transition-all duration-500 ease-in-out">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6 lg:gap-8 h-full">
              <div className="flex-shrink-0">
                <img
                  src={currentMember.image || "/placeholder.svg"}
                  alt={currentMember.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-64 xl:w-70 xl:h-75 rounded-lg object-cover transition-opacity duration-500 mx-auto"
                />
              </div>

              <div className="flex-1 text-center lg:text-left lg:pt-4 xl:pt-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 transition-all duration-500">
                  {currentMember.name}
                </h3>

                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 lg:mb-8 transition-all duration-500 px-2 sm:px-0">
                  {currentMember.description}
                </p>

                <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4">
                  <a
                    href={currentMember.social.email}
                    className="p-2 bg-[#D2E6E4] rounded-full hover:bg-white transition-all duration-200 hover:scale-110 hover:shadow-md"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 hover:text-teal-600" />
                  </a>
                  <a
                    href={currentMember.social.instagram}
                    className="p-2 bg-[#D2E6E4] rounded-full hover:bg-white transition-all duration-200 hover:scale-110 hover:shadow-md"
                  >
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 hover:text-teal-600" />
                  </a>
                  <a
                    href={currentMember.social.facebook}
                    className="p-2 bg-[#D2E6E4] rounded-full hover:bg-white transition-all duration-200 hover:scale-110 hover:shadow-md"
                  >
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 hover:text-teal-600" />
                  </a>
                  <a
                    href={currentMember.social.twitter}
                    className="p-2 bg-[#D2E6E4] rounded-full hover:bg-white transition-all duration-200 hover:scale-110 hover:shadow-md"
                  >
                    <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 hover:text-teal-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-teal-600 w-6 sm:w-8" : "bg-gray-300 w-4 sm:w-6 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
