import React from 'react'
import Finance from '../../../assets/svg/Services/Finance.svg'
import Relations from '../../../assets/svg/Services/Relations.svg'
import Education from '../../../assets/svg/Services/Education.svg'
import Banks from '../../../assets/svg/Services/Banks.svg'
import Market from '../../../assets/svg/Services/Market.svg'
import Audit from '../../../assets/svg/Services/Audit.svg'

const Services = () => {
  const services = [
    {
      title: "Islamic Fund Management",
      description: "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
      link: "Learn more",
      bgColor: "bg-blue-100",
      icon: Finance
    },
    {
      title: "International Relations",
      description: "We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.",
      link: "Learn more",
      bgColor: "bg-green-100",
      icon: Relations
    },
    {
      title: "Education and Training",
      description: "We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.",
      link: "Learn more",
      bgColor: "bg-pink-100",
      icon: Education
    },
    {
      title: "For Islamic Banks",
      description: "We provide experienced consulting on the establishment and management of Islamic banks and branches. We support the development of competitive financial products and services based on Shariah principles.",
      link: "Learn more",
      bgColor: "bg-purple-100",
      icon: Banks
    },
    {
      title: "Islamic Capital Market",
      description: "We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.",
      link: "Learn more",
      bgColor: "bg-gray-100",
      icon: Market
    },
    {
      title: "Shariah Compliance Audit",
      description: "We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.",
      link: "Learn more",
      bgColor: "bg-yellow-100",
      icon: Audit
    }
  ];

  return (
    <div className="bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 lg:text-4xl">
            Our services
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Expert guidance for managing funds in alignment with Islamic<br/> principles, helping you make informed, halal investment<br/> decisions.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col h-full ${service.bgColor} p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="flex items-start mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex-shrink-0 flex items-center justify-center mr-3 sm:mr-4 shadow-sm">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl leading-tight tracking-normal self-center font-bold">
                  {service.title}
                </h3>
              </div>
              
              <p className="font-normal text-sm sm:text-base lg:text-base leading-relaxed tracking-normal mb-4 sm:mb-6 flex-grow text-gray-600">
                {service.description}
              </p>
              
              <div className="mt-auto">
                <button className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 border border-transparent font-semibold text-sm sm:text-base leading-none tracking-normal rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-300 w-full justify-center shadow-sm">
                  {service.link}
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services
