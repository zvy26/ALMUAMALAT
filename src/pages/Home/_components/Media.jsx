import React from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Woman from '../../../assets/images/Woman.png';
import Men from '../../../assets/images/Men.png';
import BookMan from '../../../assets/images/BookMan.png';

const Media = () => {
  const cards = [
    {
      id: 1,
      title: 'Why Islamic finance?',
      imageUrl: Woman,
    },
    {
      id: 2,
      title: 'What makes Islamic finance unique?',
      imageUrl: Men,
    },
    {
      id: 3,
      title: 'How is risk managed in Islamic finance?',
      imageUrl: BookMan,
    },
  ];

  return (
    <div className="bg-white  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Media</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our team consists of seasoned professionals with extensive experience<br />
            in Islamic finance and management. Each member brings a unique set of<br />
            skills and expertise.
          </p>
        </div>

        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <h2 className="text-3xl font-bold text-gray-900">Our media showcase</h2>
          <div className="flex space-x-3">
            <button
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#009688] transition bg-[#ECF3F6] hover:text-white text-[#000000] cursor-not-allowed"
              disabled
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#009688] transition bg-[#ECF3F6] hover:text-white text-[#000000] cursor-not-allowed"
              disabled
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-full h-[516px] rounded-[10px] border border-gray-300 overflow-hidden relative cursor-pointer"
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-black/20 z-0" />

              <div className="absolute bottom-5 left-5 pr-55 text-white text-lg font-semibold z-10">
                {card.title}
              </div>

              <button
                className="absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center z-10
                  bg-white hover:bg-[#2198FF] transition-all duration-300 cursor-pointer
                  hover:ring-2 hover:ring-[#2198FF]"
              >
                <Play className="w-5 h-5 text-black hover:text-white transition-colors" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
