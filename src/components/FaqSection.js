import React, { useState } from "react";
import DropdownIcon from "../icons/DropdownIcon";

const faqData = [
  {
    question: "How it works?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Where can I enter the voucher I have received on Mega?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Can I backup databases like Microsoft sql server?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white py-10 px-4 md:px-10">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Do you have any questions?
      </h2>
      <div className="max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-4 px-5 bg-gray-800 rounded-md focus:outline-none flex justify-between items-center"
            >
              <span className="text-lg font-semibold">{item.question}</span>
              <DropdownIcon />
            </button>
            {activeIndex === index && (
              <div className="p-5 bg-gray-700 rounded-md mt-2">
                <p className="text-gray-300">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
