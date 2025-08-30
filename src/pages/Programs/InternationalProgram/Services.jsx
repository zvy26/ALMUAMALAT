import React from 'react';
import ImageService from '../../../assets/images/ImageService.png'
import Ava from '../../../assets/images/Ava.png'

const services = Array(6).fill({
  title: "Islamic Fund Management",
  description:
    "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
  price: "$250",
  originalPrice: "$300",
  students: "+40 students",
  startDate: "21 December 2024",
  imgSrc: ImageService,
});

export default function Services() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Our services</h2>
        <p className="text-gray-600 font-semibold mt-2 max-w-xl mx-auto">
          Expert guidance for managing funds in alignment with Islamic<br/>
          principles, helping you make informed, halal investment<br/>
          decisions.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-0 2xl:p-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg w-full max-w-sm mx-auto"
          >
          <div className="relative">
  <img
    src={service.imgSrc}
    alt="Service"
    className="w-full h-[230px] object-cover"
  />

  <div className="absolute inset-x-0 bottom-0 flex justify-center translate-y-1/2">
    <div className="bg-white px-3 py-1 text-sm rounded-full flex items-center gap-2 shadow">
      <img
        src={Ava}
        alt="Avatar"
        className="w-[80px] h-[40px] rounded-full object-cover"
      />
      {service.students}
    </div>
  </div>
</div>


<div className="p-5 pt-10"> 


              <p className="font-sans font-normal text-[12px] leading-[100%] tracking-normal text-[#686868] mb-3">Start date: {service.startDate}</p>
              <h3 className=" font-bold text-[22px] md:text-[24px] leading-[100%] tracking-normal text-[#009688] mb-2">
                {service.title}
              </h3>
              <p className="text-[#686868] font-sans font-normal text-[17px]  tracking-normal mb-5 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-[#FD661F] font-sans font-bold text-[30px] leading-[100%] tracking-normal">
                  {service.price}
                  <span className="font-sans font-normal text-[22px] leading-[100%] tracking-normal line-through text-[#686868] ml-2">
                    {service.originalPrice}
                  </span>
                </div>
                <button className="bg-[#009688]  w-[137px] h-[43px] md:w-[157px] md:h-[43px] cursor-pointer text-white  rounded-lg text-sm hover:bg-teal-700">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
