import React from 'react'
import Stripe from '../../../assets/svg/Partners/Stripe.svg'
import American from '../../../assets/svg/Partners/American.svg'
import Union from '../../../assets/svg/Partners/Union.svg'
import Klarna from '../../../assets/svg/Partners/Klarna.svg'
import Skrill from '../../../assets/svg/Partners/Skrill.svg'

const Partners = () => {
  const partners = [
    { name: "Stripe", logo: Stripe },
    { name: "American Express", logo: American },
    { name: "Western Union", logo: Union },
    { name: "Klarna", logo: Klarna },
    { name: "Skrill", logo: Skrill }
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Partners and Clients
          </h2>
        </div>

        <div className="relative">
          <div className="flex animate-scroll-left mb-8">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`top-${index}`}
                className="flex-shrink-0 w-[280px] h-[139px] mx-4 bg-gray-50 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-[180px] max-h-[139px] object-contain"
                />
              </div>
            ))}
          </div>

          <div className="flex animate-scroll-right">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`bottom-${index}`}
                className="flex-shrink-0 w-[280px] h-[139px] mx-4 bg-gray-50 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-[280px] max-h-[139px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
                }
      `}</style>
    </div>
  )
}

export default Partners
