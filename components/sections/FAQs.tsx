"use client";

import React from 'react';
import { useState } from 'react';
import { FAQs_LISTS1 } from "@/constants";
import { FaChevronDown } from 'react-icons/fa';

interface FaqsProps {
    question: string;
}
export const Faqs: React.FC<FaqsProps> = ({ question }) => {
    console.log("question:", question);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={`w-full font-raleway sm:font-gilroy p-8 md:p-32 ${question === "1" ? 'md:bg-pink-50 md:text-white bg-[#F5F5F5] md:mb-28' : ''}`}>

            <h1 className="md:text-[43.46px] text-[24px] border-b sm:border-none border-[#737373] font-[800]  py-2 text-center">
                FAQ
            </h1>
            <div className="flex flex-col md:gap-8 gap-2 mt-8">
                {FAQs_LISTS1.map((item, index) => (
                    <div
                        className={`flex flex-col mb-1 text-left cursor-pointer border-b border-b-gray-20 ${activeIndex === index ? 'md:border-none' : ''}`}
                        key={index}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex justify-between items-center py-4  ">
                            <h3 className="font-[800] flex items-center md:text-[34px] text-[22px] pr-16 sm:p-0">
                                {item.label}
                                <FaChevronDown
                                    className={`ml-2 transform transition-transform duration-300  sm:md:block hidden ${activeIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </h3>
                        </div>
                        <p
                            className={`text-[19px] transition-all duration-200 ease-in-out pb-8 md:pb-0 overflow-hidden ${activeIndex === index
                                ? 'max-h-screen opacity-100' // Set a large enough max-height to accommodate expanded content
                                : 'max-h-0 opacity-0 overflow-hidden'
                                }`}
                        >
                            {item.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

