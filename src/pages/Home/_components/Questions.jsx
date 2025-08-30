import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "Will I receive lifetime access to the courses?",
    answer: "Yes, all purchased courses are available for lifetime access.",
  },
  {
    question: "Do you provide downloadable resources?",
    answer: "Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively.",
  },
  {
    question: "Can I use the materials for community teaching?",
    answer: "Materials are for personal use only unless otherwise specified.",
  },
  {
    question: "Is there a free trial for the courses?",
    answer: "Yes, we offer a 7-day free trial for most courses.",
  },
  {
    question: "Who can benefit from these courses?",
    answer: "These courses are designed for educators at all levels.",
  }
];

const AccordionItem = ({ index, active, toggle, question, answer }) => {
  const isOpen = active === index;

  return (
    <div
      className="mb-4 p-6 border-2 border-gray-400  hover:border-teal-600 rounded-[10px] transition-all"
    >
      <button
        onClick={() => toggle(index)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-[13px] md:text-[18px] lg:text-[23px] font-medium font-inter leading-tight tracking-tight">
          {question}
        </span>
        <span className="text-black hover:text-teal-600 ">
          {isOpen ? <X size={15} /> : <Plus size={15} />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600">
          <p className="text-[12px] md:text-[18px] font-normal font-inter leading-[30px] tracking-tight">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const leftColumnItems = FAQ_DATA.slice(0, 2);
  const rightColumnItems = FAQ_DATA.slice(2);

  return (
    <section className="max-w-7xl min-h-130 mx-auto px-4 md:px-6 2xl:px-0">
      <header className="text-center mb-10">
        <h2 className="text-[25px] md:text-[40px] font-bold font-inter mb-3 leading-tight">
          Frequently asked questions
        </h2>
        <p className="text-[15px] md:text-[20px] font-medium font-inter text-[#686868]">
          If you have any further questions, please contact us
        </p>
      </header>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4">
          {leftColumnItems.map((item, idx) => (
            <AccordionItem
              key={idx}
              index={idx}
              active={activeIndex}
              toggle={handleToggle}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>

        <div className="w-full md:w-1/2 px-4">
          {rightColumnItems.map((item, idx) => (
            <AccordionItem
              key={idx + 2} 
              index={idx + 2}
              active={activeIndex}
              toggle={handleToggle}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
