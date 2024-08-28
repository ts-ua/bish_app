"use client";
import React from "react";
import { MANAGEMENT_LISTS1, MANAGEMENT_LISTS2, PROFIT_LIST, REASON_LISTS } from "@/constants";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { TopBar } from "@/components/sections/topBar";
import { Footer } from "@/components/sections/Footer";
import { Faqs } from "@/components/sections/FAQs";
import { useRouter } from 'next/navigation';
export function BishHome() {

    const router = useRouter();

    const iconSize = () => {
        if (window.matchMedia('(min-width: 1024px)').matches) {
            return 35; // lg size
        } else if (window.matchMedia('(min-width: 768px)').matches) {
            return 25; // md size
        } else {
            return 15; // sm size or default
        }
    };

    const handleClick = () => {
        router.push('../dashboard'); // Navigate to the dashboard page
    };
    return (
        <div className="w-full bg-[#F5F5F5]">
            <TopBar />
            <div className="w-full flex flex-col md:flex-row ">
                <div className=" flex flex-col w-full z-30 p-4 md:px-20 gap-8">
                    <div className="flex gap-4 py-4 items-center">
                        <Image
                            src='/Group.png'
                            alt="group"
                            width={50} // Define width for the lg breakpoint
                            height={0} // Define height proportionally for the lg breakpoint
                            className="bg-transparent w-[58px] h-[71px]"
                        />
                        <h1 className="md:text-[55px] sm:text-[38px] font-[900] text-[24px] font-gilroy text-pink-50 italic">
                            BISH!
                        </h1>
                    </div>
                    <h1 className="md:text-[38px] text-[20px] font-[800]  text-left font-raleway leading-custom ">
                        Plumber prices are
                        crazy. your home’s BISH!
                        code fixes that
                    </h1>
                    <div className="lg:pr-8 pr-0">
                        <div className="rounded-[20px] bg-custom-gradient p-8">
                            <p className="sm:text-2xl text-[20px] text-left pb-4" >
                                Get your home’s 2024 BISH! code by SMS and save BIG on your next tradesperson
                            </p>
                            <div className="flex items-center relative ">
                                <LuMapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-50 w-5 h-5" />
                                <input
                                    type="text"
                                    className="w-full rounded-lg pl-12 p-4 font-gilroy focus:outline-none sm:text-[20px] text-[14px]"
                                    placeholder="Enter your postcode to start"
                                />
                            </div>

                        </div>
                    </div>


                    <p className="text-[15px] text-left md:pr-16 pr-0">
                        Need a tradesperson and already got your home’s BISH! code? Great! Get your home’s exclusive BISH! price now.
                    </p>
                    <div className="pb-12 md:w-2/3 w-full">

                        <button className="rounded-lg bg-[#FB2A63] text-white p-4 w-full text-[12px] sm:text-[15px]" onClick={handleClick}>
                            Get  my BISH! Price
                        </button>
                    </div>
                </div>
                <div className="relative w-full block lg:flexCenter py-0 lg:py-20">
                    <div className="flex-1 w-full  flex sm:mb-0 md:flexCenter md:static relative ">
                        <Image
                            src="/design.png"
                            alt="Design"
                            width={818} // Adjust width based on the aspect ratio of your image
                            height={0} // Adjust height based on the aspect ratio of your image
                            className="md:absolute static md:-top-[45px] md:-right-[95px] right-0 top-0  md:max-w-[200%]"
                        />
                        <Image
                            src="/Group 416.png"
                            alt="client"
                            width={446} // Default width for all breakpoints
                            height={0} // Adjust height proportionally
                            className="md:static absolute z-30 max-w-[70%] top-6 left-12  md:w-[446px] pb-24 left-0 " // Tailwind classes for responsive width
                        />
                    </div>
                </div>
            </div>
            <div className=" flex flex-col lg:px-[100px] md:px-8 px-2 py-10 w-full bg-pink-50 text-white text-center">
                <div className="flex flex-col w-full ">
                    <h1 className="font-[700] md:text-3xl sm:text-[26px] font-sans">
                        Use your BISH! Code on big jobs and small jobs
                    </h1>

                    <p className=" mt-6 md:text-[21px] font-raleway text-[16px]">
                        Whether it’s a shower fix or big boiler job your home’s BISH! code will save your money.
                    </p>
                </div>

                <div className="py-8 pl-4 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-0 justify-center ">
                        {
                            REASON_LISTS.map((item, index) => (
                                <div className="flex items-center font-raleway p-4" key={index}>
                                    <div className="gap-6 flex">
                                        <div className="flexCenter">
                                            <FaCheckCircle size={iconSize()} />
                                        </div>
                                        <h3 className="text-left text-[16px] md:text-[23px] font-[600]">
                                            {item.label}
                                        </h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
            <div className="p-4 md:p-12 flex flex-col w-full">
                <h1 className=" md:text-[32px] text-[22px]  font-[800] text-center font-sans p-4">
                    How to get your home’s BISH! code
                </h1>
                <div className="flex grid lg:grid-cols-3 grid-cols-1  pt-8 pb-20">
                    {
                        MANAGEMENT_LISTS1.map((item, index) => {
                            return (
                                <div className="flex flex-col p-4" key={index}>
                                    <div className="flexCenter flex flex-col gap-4">
                                        <div className="bg-[#FB2A63] rounded-[20px] p-5 sm:w-[8rem] sm:h-[8rem]  h-[80px] w-[80px] flexCenter">
                                            <Image src={item.url} alt={item.label} width={50} height={0} className=" h-auto" />
                                        </div>
                                        <span className="px-12 xl:bold-30 text-[18px] font-[600] text-center">
                                            {
                                                item.label
                                            }
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row bg-white">
                <div className="relative w-full">
                    <div className=" flex-1 w-full  flex sm:mb-0 flexCenter">
                        <Image
                            src="/design1.png"
                            alt="Design"
                            width={1000} // Adjust width based on the aspect ratio of your image
                            height={0} // Adjust height based on the aspect ratio of your image
                            className=" w-full md:w-[800px] lg:w-[940px] xl:w-[1000px]"
                        />
                        <Image
                            src="/Group 416.png"
                            alt="client"
                            width={500} // Default width for all breakpoints
                            height={0} // Adjust height proportionally
                            className="absolute w-3/5" // Tailwind classes for responsive width
                        />
                    </div>
                </div>
                <div className=" flex flex-col w-full z-30 text-center md:text-left justify-center">
                    <h1 className="md:text-[25px] lg:text-[32px] text-[20px] font-[800] sm:w-full font-raleway p-4">
                        Experts to your door at your home’s exclusive  price for 2024. That’s BISH!
                    </h1>
                    <p className="sm:text-lg text-[15px] font-[600] p-4">
                        Use your home’s BISH! code to save money on all kinds of plumber jobs
                    </p>
                </div>
            </div>
            <div className=" flex flex-col p-8 bg-white">
                <h1 className="py-6 md:text-[32px] text-[20px] font-[800] sm:w-full text-center font-raleway ">
                    BISH! Tradespeople get the job done
                </h1>
                <div className="flex flex-wrap justify-around z-40 w-full">
                    {
                        MANAGEMENT_LISTS2.map((item, index) => {
                            return (
                                <div className="flexCenter flex flex-col gap-2 m-6" key={index}>
                                    <div className="bg-[#FB2A63] rounded-[20px] p-5 md:w-[6rem] md:h-[6rem] w-[65px] h-[65px] flexCenter text-white">
                                        <FaCheckCircle size={iconSize()} />
                                    </div>
                                    <h3 className="text-[18px] md:text-[26px] font-[600] font-raleway text-center ">
                                        {
                                            item.label
                                        }
                                    </h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className=" flex flex-col bg-pink-50 text-white text-center md:p-16 p-6">
                <div className="flex flex-col  ">
                    <h1 className="font-[800] lg:text-3xl text-[20px] font-raleway p-2">
                        Need a tradesperson? Your home's BISH! code has got your back.
                    </h1>

                    <p className="md:text-[20px] md:px-12 font-raleway text-[14px]">
                        The next time you need a tradesperson the first price you check should really be your home's 2024 BISH! price. Here's why.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-12 md:p-14 p-6 ">
                {
                    PROFIT_LIST.map((item, index) => {
                        return (
                            <div className="relative flex flex-col w-full bg-pink-50 md:rounded-[20px] py-16 md:py-12  rounded-lg p-8 ">
                                <div className="absolute flexCenter top-0 right-0 w-[78px] h-[68px] rounded-tr-lg rounded-bl-lg md:rounded-tr-[20px] md:rounded-bl-[20px] bg-white text-pink-50">
                                    <FaCircleCheck size={30} />
                                </div>
                                <h1 className="font-[800] lg:text-3xl text-[28.44px] text-white md:text-[#272727] font-raleway leading-[34px] py-2">
                                    {item.title}
                                </h1>

                                <p className=" md:text-[22px] font-raleway text-[19px] text-white">
                                    {item.content}
                                </p>
                            </div>
                        )
                    })
                }
            </div>

            <div className="p-4 md:p-0">
                <div className=" flex flex-col lg:px-[100px] md:px-12 px-4 py-10 w-full bg-pink-50 text-white text-center">
                    <div className="flex flex-col w-full md:font-gilroy font-raleway ">
                        <h1 className="font-[800] lg:text-3xl text-[20px]  px-4">
                            Already got your home`s tradesperson BANG! code?
                        </h1>

                        <p className=" mt-6 md:text-2xl text-[14px]">
                            Call your local BANG! team now and tell us about the job and we`ll confirm your BANG! price.
                        </p>

                        <h1 className="font-[800] lg:text-3xl text-[33px]  px-2">
                            0800 367 3993
                        </h1>
                    </div>
                </div>
            </div>
            <Faqs question="0" />
            <Footer />

        </div>
    )
} 