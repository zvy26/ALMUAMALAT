import DoubleTick from '../../../assets/svg/other/DoubleTick.svg'

export default function InternationalProgram() {
  const whatYoullLearn = [
    "Gain a comprehensive understanding of Islamic finance principles and ethics.",
    "Build a portfolio with 10+ real-world projects in Islamic financial services.",
    "Learn to develop and manage Sharia-compliant financial products.",
    "Master key concepts in Islamic banking, investment, and wealth management.",
    "Understand the fundamentals of risk management in Islamic finance.",
    "Develop skills to work as an Islamic finance consultant.",
  ]

  const whyStudy = [
    "Lifetime access",
    "Video lessons",
    "Tests",
    "Projects",
    "Downloadable resources",
    "Access via mobile device",
  ]

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          International educational programs
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed font-semibold">
          Al Muamalat Education&apos;s international study programs<br/>
          offer an in-depth learning experience at leading Islamic<br/>
          financial institutions around the world.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div className="bg-sky-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">What you&apos;ll learn</h2>
          <ul className="space-y-6">
            {whatYoullLearn.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 p-1 bg-sky-50  rounded-full flex items-center justify-center">
                  <img src={DoubleTick} alt="Double Tick" className="w-5 h-5" />
                </div>
                <p className="text-lg font-semibold text-gray-700 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-sky-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Why should you study at<br/> &quot;AL-MUAMALAT&quot;?</h2>
          <ul className="space-y-6 list-disc pl-5">
            {whyStudy.map((item, index) => (
              <li key={index} className="text-lg font-semibold text-gray-700 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
