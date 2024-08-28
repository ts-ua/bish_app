'use client'

import { Faqs } from '@/components/sections/FAQs';
import { Footer } from '@/components/sections/Footer';
import Header from '@/components/sections/header';
import React, { useEffect, useState } from 'react';
import { RiMessage2Fill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { MdAccountBalanceWallet } from "react-icons/md";
import SuccessModal from '@/components/common/Modal/successModal';
import { sendCode } from '../api/api';
const SignIn: React.FC = () => {
    const [isModalVisible, setModalVisible] = useState(true);

    const sendcode = () => {
        sendCode('+18177788385')
    }
    const handleCloseModal = () => {
        setModalVisible(false);
    };
    const iconsize = () => {
        if (window.matchMedia('(min-width: 1024px)').matches) {
            return 35; // lg size
        } else if (window.matchMedia('(min-width: 768px)').matches) {
            return 25; // md size
        } else {
            return 15; // sm size or default
        }
    }

    const [iconSize, setIconSize] = useState(20);

    useEffect(() => {
        const getIconSize = () => {
            if (typeof window !== 'undefined') {
                if (window.matchMedia('(min-width: 1024px)').matches) {
                    return 45; // lg size
                } else if (window.matchMedia('(min-width: 768px)').matches) {
                    return 30; // md size
                }
            }
            return 20; // Default size (sm)
        };

        setIconSize(getIconSize());

        // Optionally, you can add an event listener to handle resizing
        const handleResize = () => setIconSize(getIconSize());
        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='bg-[#D9D9D9] md:bg-white'>
            <Header />
            <div className='bg-none md:italic-gradient p-12 font-sans flexCenter'>
                <div className='bg-pink-50 md:bg-transparent rounded-lg text-white w-full lg:w-1/2 md:text-black-50 text-center'>
                    <p className='text-[15px] md:text-[45px] font-[800] p-8  '>
                        Awesome! a BISH! code is available at 15, Smith Street, London,
                        W2:4EB
                    </p>
                </div>
            </div>
            <div className='lg:flex-row flex  flex-col md:bg-white bg-none font-sans md:p-12 p-4'>
                <div className=' gap-4 flex-col p-2 flexCenter'>
                    <div className='text-center rounded-xl md:bg-none italic-gradient font-sans w-full'>
                        <p className='text-[16px] md:text-[30px]  font-[800]'>
                            We'll send your home's BISH! code by SMS.Your number is.
                        </p>
                        <p className='p-4 text-[13px] md:text-[25px] font-[800] '>
                            0784665434<br /> Edit number
                        </p>
                    </div>
                    <div className='flexCenter p-4 '>
                        <button
                            className='bg-pink-50 text-white p-3 md:px-12 rounded-lg' onClick={sendcode}>
                            Send BISH! code
                        </button>
                    </div>
                </div>
                <div className='p-8 md:p-12 flexCenter'>
                    <div className='bg-[#F5F5F5] p-2 md:p-8 rounded-xl'>
                        <p className='font-[800] p-4 text-[15px] md:text-[33px] '>
                            What next?
                        </p>
                        <div className='flex items-center  '>
                            <div className="text-pink-50 md:p-8 p-4">
                                <RiMessage2Fill size={iconSize} />
                            </div>
                            <p className='md:text-[22px] text-[10px]'>
                                We'll send your home's BISH!
                            </p>
                        </div>
                        <div className='flex items-center '>
                            <div className='text-pink-50 md:p-8 p-4'>
                                <FaPhone size={iconSize} />
                            </div>
                            <p className='md:text-[22px] text-[10px]'>
                                Call your local BISH! team to find
                                out your exclusive BISH! price.
                                Or keep the code safe until you
                                need a tradesperson
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <div className='text-pink-50 md:p-8 p-4'>
                                <MdAccountBalanceWallet size={iconSize} />
                            </div>
                            <p className='md:text-[22px] text-[10px]'>
                                Book the job and pay on completion
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <SuccessModal isVisible={isModalVisible} onClose={handleCloseModal}>
                <p className="text-[34px] p-4">Great All Done</p>
                <p className='text-[15px] p-1'>
                    We've sent your home's 2024 BANG!code to your SMS inbox.The team are ready to confirm your BANG! price once you have a job to quote on.
                </p>
            </SuccessModal>
            <Faqs question="1" />
            <Footer />
        </div>
    );
};

export default SignIn;