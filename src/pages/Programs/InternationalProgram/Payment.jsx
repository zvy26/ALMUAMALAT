import React from 'react';
import { Star, ArrowUpRight, ChevronLeft, ChevronRight, Check, Circle } from 'lucide-react'

const Payment = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row p-4 md:p-6 xl:p-8 gap-6 md:gap-8">
      <div className="w-full md:w-1/2 bg-teal-600 text-white p-6 xl:p-20 rounded-lg shadow-lg flex flex-col gap-8">
        <h2 className="font-bold text-[36px] leading-[100%] tracking-[-0.02em] mb-4">Our Services</h2>
        <div className="space-y-6">
          <div className='flex items-start'>
            <Check className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
            <div>
              <span className='font-semibold text-[18px] md:text-[20px] xl:text-[22px] leading-[100%] tracking-[-0.02em]'>Space for creative ideas</span>
              <div className="mt-2">
                <span className='font-medium text-[14px] md:text-[14px] xl:text-[16px] leading-[100%] tracking-[-0.02em]'>Cyber Square nourishes young aspiring minds to get a clear vision of their future. We guide them in analyzing and building their vision and ideas into reality.</span>
              </div>
            </div>
          </div>
          <div className='flex items-start'>
            <Check className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
            <div>
              <span className='font-semibold text-[18px] md:text-[20px] xl:text-[22px] leading-[100%] tracking-[-0.02em]'>Engaging and fun curriculum</span>
              <div className="mt-2">
                <span className='font-medium text-[14px] md:text-[14px] xl:text-[16px] leading-[100%] tracking-[-0.02em]'>Our goal is to create an engaging system that provides exciting activities so children can understand the programming concepts on their own. With Cyber Square kids have fun while they learn without frustration.</span>
              </div>
            </div>
          </div>
          <div className='flex items-start'>
            <Check className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
            <div>
              <span className='font-semibold text-[18px] md:text-[20px] xl:text-[22px] leading-[100%] tracking-[-0.02em]'>Professional teaching methods</span>
              <div className="mt-2">
                <span className='font-medium text-[14px] md:text-[14px] xl:text-[16px] leading-[100%] tracking-[-0.02em]'>We are proficient at Cyber Square, have developed an in-depth understanding in how to teach kids and how to code. Moreover, we believe in exposing kids to real programming languages and professional tools.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-white p-8 xl:p-20 mt-6 md:mt-0 flex flex-col gap-8">
        <h2 className="font-bold text-[36px] leading-[100%] tracking-[-0.02em]  mb-4">Payment</h2>
        <div className="space-y-4">
          <div className='flex items-center'>
            <Circle className="w-3 h-3 fill-teal-600 text-teal-600 mr-2" />
            <span className='font-normal text-[15px] md:text-[18px] leading-[100%] tracking-[-0.02em]'>Space for creative ideas</span>
          </div>
          <div className='flex items-center'>
            <Circle className="w-3 h-3 fill-teal-600 text-teal-600 mr-2" />
            <span className='font-normal text-[15px] md:text-[18px] leading-[100%] tracking-[-0.02em]'>Engaging and fun curriculum</span>
          </div>
          <div className='flex items-center'>
            <Circle className="w-3 h-3 fill-teal-600 text-teal-600 mr-2" />
            <span className='font-normal text-[15px] md:text-[18px] leading-[100%] tracking-[-0.02em]'>Professional teaching methods</span>
          </div>
          <div className='flex items-center'>
            <Circle className="w-3 h-3 fill-teal-600 text-teal-600 mr-2" />
            <span className='font-normal text-[15px] md:text-[18px] leading-[100%] tracking-[-0.02em]'>Learn from AI & Data Science experts</span>
          </div>
          <div className='flex items-center'>
            <Circle className="w-3 h-3 fill-teal-600 text-teal-600 mr-2" />
            <span className='font-normal text-[15px] md:text-[18px] leading-[100%] tracking-[-0.02em]'>Courses in IT, NFT, and M alumni</span>
          </div>
          <div className='flex items-center'>
            <Circle className="w-3 h-3 fill-teal-600 text-teal-600 mr-2" />
            <span className='font-normal text-[15px] md:text-[18px] leading-[100%] tracking-[-0.02em]'>UK certification upon completion</span>
          </div>
          <div className='flex items-center'>
            <Circle className="w-3 h-3  mr-2 fill-teal-600 text-teal-600" />
            <span className='font-normal text-[15px] md:text-[18px] leading-[100%] tracking-[-0.02em]'>Personalized one-to-one training</span>
          </div>
        </div>
        <button className="mt-6 w-[222px] h-[64px] cursor-pointer bg-[#009688] text-white py-2 rounded hover:bg-teal-700 transition duration-300 font-bold text-[18px] leading-[100%] tracking-normal">
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
