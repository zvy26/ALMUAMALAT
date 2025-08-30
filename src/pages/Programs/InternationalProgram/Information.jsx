import { ChevronDown } from 'lucide-react'

export default function Information() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Brief information about the course
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-teal-600">
            Videodarslar <ChevronDown className="w-6 h-6" />
          </h2>
          <p className="text-lg font-semibold text-gray-700 leading-relaxed">
            Lessons are posted on the platform in the form of videos, which can be viewed anytime
            and anywhere. Video lessons are updated.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-teal-600">
            Tasks <ChevronDown className="w-6 h-6" />
          </h2>
          <p className="text-lg font-semibold text-gray-700 leading-relaxed">
            Test tasks are given at the end of the module. Only students who successfully pass the test
            will be able to access the lessons in the next module.
          </p>
        </div>
      </div>
    </section>
  )
}
