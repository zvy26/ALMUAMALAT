import HeroImg from "../../../assets/images/HeroImg.png"
import Date from "../../../assets/images/Date.jpg"
import Banner from "../../../assets/images/Banner.png"

const Hero = () => {
  return (
    <header className="bg-teal-600 min-h-screen lg:min-h-147 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="font-medium max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 lg:py-0">
        <div className="text-white max-w-4xl space-y-6 order-2 lg:order-1">
          <div className="relative">
            <div className="inline-block mb-4 sm:mb-6">
              <span className="bg-white bg-opacity-20 text-sm sm:text-lg lg:text-xl text-gray-800 font-medium leading-normal px-3 py-2 sm:px-4 sm:py-2 rounded-md">
                Seeking Knowledge is an Obligation in Islam
              </span>
            </div>

            <div className="text-white text-2xl sm:text-2xl md:text-2xl lg:text-5xl xl:text-5xl font-bold leading-tight mb-6 sm:mb-8">
              Enhance Your
              <br />
              Understanding of Islamic
              <br />
              Ethics with Al-Muamalat
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-orange-500 text-white w-full sm:w-40 md:w-44 lg:w-48 xl:w-56 h-10 sm:h-11 md:h-12 lg:h-14 rounded-lg hover:bg-orange-600 transition duration-300 cursor-pointer text-xs sm:text-sm md:text-base font-medium">
                STUDENTS' OPINION
              </button>
              <div className="hidden sm:block relative">
                <img
                  src={Banner}
                  className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-44 h-auto"
                  alt="button decoration"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative">
            <img
              src={HeroImg}
              className=" scale-120 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[480px] xl:h-[480px] object-cover rounded-2xl"
              alt="Happy Student"
            />

            <div className="relative  w-36 sm:w-40 md:w-44 h-12 sm:h-14 bg-white rounded-xl sm:rounded-2xl right-4 sm:right-8 md:right-12 lg:right-25  bottom-50 sm:-bottom- md:bottom-100 p-2 shadow-lg">
              <div className="flex items-center space-x-2 sm:space-x-3 h-full">
                <img src={Date || "/placeholder.svg"} className="w-8 h-8 sm:w-10 sm:h-10 rounded" alt="Calendar" />
                <div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">250k</div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-tight">Assisted Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
