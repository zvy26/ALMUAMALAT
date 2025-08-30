import { Star, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
// Reverting to original image imports as requested
import Course1 from '../../../assets/images/Course1.png'
import Course2 from '../../../assets/images/Course2.png'
import Course3 from '../../../assets/images/Course3.png'

export default function PopularCourse() {
  const courses = [
    {
      image: Course1, 
      category: 'Design',
      description: 'Various versions have  evolve . . .',
      rating: 5,
      reviews: 342,
      price: 500,
    },
    {
      image: Course2,
      category: 'Business',
      description: 'Various versions have  evolve . . .',
      rating: 5,
      reviews: 189,
      price: 500,
    },
    {
      image: Course3,
      category: 'Business',
      description: 'Various versions have  evolve . . .',
      rating: 4,
      reviews: 256,
      price: 500,
    },
    {
      image: Course1, 
      category: 'Marketing',
      description: 'Various versions have  evolve . . .',
      rating: 5,
      reviews: 423,
      price: 500,
    },
    {
      image: Course2, 
      category: 'Finance',
      description: 'Various versions have  evolve . . .',
      rating: 4,
      reviews: 167,
      price: 500,
    },
    {
      image: Course3,
      category: 'Technology',
      description: 'Various versions have  evolve',
      rating: 5,
      reviews: 578,
      price: 500,
    }
  ]

  const [currentPage, setCurrentPage] = useState(0)
  const coursesPerPage = 3
  const totalPages = Math.ceil(courses.length / coursesPerPage)

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  const handleDotClick = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const startIndex = currentPage * coursesPerPage
  const displayedCourses = courses.slice(startIndex, startIndex + coursesPerPage)

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Design': 'bg-orange-50 text-orange-600 border border-orange-200',
      'Business': 'bg-purple-50 text-purple-600 border border-purple-200',
      'Marketing': 'bg-green-50 text-green-600 border border-green-200',
      'Finance': 'bg-blue-50 text-blue-600 border border-blue-200',
      'Technology': 'bg-red-50 text-red-600 border border-red-200'
    }
    return colors[category] || 'bg-gray-50 text-gray-600 border border-gray-200'
  }

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
          Most Popular Course
        </h1>
        <p className="text-lg md:text-xl font-semibold text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Expert guidance for managing funds in alignment with Islamic<br/>
          principles, helping you make informed, halal investment<br/>
          decisions.
        </p>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-teal-600 text-white shadow-lg hover:bg-teal-700 transition-all duration-200 hover:scale-105 hidden md:flex items-center justify-center"
          aria-label="Previous courses"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-teal-600 text-white shadow-lg hover:bg-teal-700 transition-all duration-200 hover:scale-105 hidden md:flex items-center justify-center"
          aria-label="Next courses"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="mx-8 md:mx-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayedCourses.map((course, index) => (
              <div
                 key={startIndex + index}
                 className="group bg-white rounded-2xl overflow-hidden shadow-2xl hover:group-only:"
              >
                <div className="relative overflow-hidden">
                  <img
                     src={course.image}
                     alt={course.title}
                    className="w-full h-48 object-cover  transition-transform duration-300"
                    width={400}
                    height={300}
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-md text-sm font-medium shadow-sm ${getCategoryColor(course.category)}`}> 
                    {course.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {renderStars(course.rating)}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">
                      ({course.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        ${course.price}
                      </span>
                    </div>
                    <button className="bg-teal-600 text-white p-3 rounded-full hover:bg-teal-700 transition-all duration-200 hover:scale-105 shadow-md group">
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-8 md:hidden">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-teal-600 text-white shadow-md hover:bg-teal-700 transition-colors"
          aria-label="Previous courses"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-teal-600 text-white shadow-md hover:bg-teal-700 transition-colors"
          aria-label="Next courses"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="flex justify-center gap-3 mt-8">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              i === currentPage
                ? 'bg-teal-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
