import React from 'react';
import Feedback from "../../../assets/images/Feedback.png";

const Testimonial = () => {
  const testimonialData = [
    {
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.",
      name: "Finlay Kirkk",
      role: "Web Designer",
      image: Feedback
    },
    {
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.",
      name: "Finlay Kirkk",
      role: "Web Designer",
      image: Feedback
    },
    {
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.",
      name: "Finlay Kirkk",
      role: "Web Designer",
      image: Feedback
    },
  ];

  return (
    <div className="bg-white min-h-150 max-w-7xl mx-auto py-10 px-4">
      <div className="px-5 md:px-40 text-center">
        <h2 className="font-bold text-[23px] md:text-[40px] leading-tight mb-6">
          What students say
        </h2>
        <p className="text-[15px] md:text-[17px] leading-snug text-gray-600 mb-10 font-inter">
          Our team consists of seasoned professionals with extensive experience<br/>
          in Islamic finance and management. Each member brings a unique set of<br/>
          skills and expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonialData.map((item, index) => (
          <div
            key={index}
            className="bg-white  rounded-lg shadow-2xl p-6 md:p-8 text-left transition-all duration-300 ease-in-out hover:shadow-2xl hover:bg-white hover:-translate-y-2 hover:scale-105 cursor-pointer group"
          >
            <p className="text-black text-[15px] leading-[24px] font-normal mb-6 group-hover:text-gray-700 transition-colors duration-300">
              {item.text}
            </p>
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full mr-3 transition-transform duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-teal-600"
              />
              <div>
                <p className="font-semibold text-[15px] group-hover:text-teal-600 transition-colors duration-300">{item.name}</p>
                <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
