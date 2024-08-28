'use client'

import { CLOSE_BISH } from "@/constants"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Footer } from "./Footer";
import Modal from "../common/Modal/page";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";


export function Hero() {

    const router = useRouter();
    const [isModalVisible, setModalVisible] = useState(false);
    const [postcode, setPostCode] = useState("");
    const [data, setData] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState({
        number: "",
        street: "",
        posttown: "",
        county: "",
        postcode: "",
        premise: "",
        subbuildingname: "",
        summaryline: "",
    });
    const [bishdata, setBishData] = useState({
        number: "",
        street: "",
        posttown: "",
        county: "",
        postcode: "",
        premise: "",
        subbuildingname: "",
        summaryline: "",
        userFirstname: "",
        userLastname: "",
        userEmail: "",
        userPhone: ""
    })


    const apiKey = process.env.NEXT_PUBLIC_POSTCODER_API_KEY;



    const iconSize = () => {
        if (window.matchMedia('(min-width: 1024px)').matches) {
            return 40; // lg size
        } else if (window.matchMedia('(min-width: 768px)').matches) {
            return 30; // md size
        } else {
            return 20; // sm size or default
        }
    };

    const handleChange = (e) => {
        console.log(e.target.value)
        setPostCode(e.target.value);
        setBishData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
    }
    const handleClick = async () => {
        const url = `https://ws.postcoder.com/pcw/${apiKey}/address/UK/${postcode}`;
        try {
            await axios.get(url).then((response) => {
                let temp = [];
                temp = response.data;
                setData(temp);
                setModalVisible(true);
            })
        }
        catch (error) {
            console.log("Error:", error)

        }
    };

    const sendBishcode = () => {
        // setBishData(prevData => ({
        //     ...prevData,
        //     number: selectedLocation.number,
        //     street: selectedLocation.street,
        //     posttown: selectedLocation.posttown,
        //     county: selectedLocation.county,
        //     postcode: selectedLocation.postcode,
        //     premise: selectedLocation.premise,
        //     subbuildingname: selectedLocation.subbuildingname,
        //     summaryline: selectedLocation.summaryline,
        // }));

        router.push('/signin');


        console.log("BishData", bishdata)
    }
    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <section className="w-full md:bg-[#FFFFFF] bg-[#D9D9D9]">
            <div className="p-14 text-center">
                <div className="p-2">
                    <div className="md:bg-none italic-gradient md:text-[44px] text-[20px] font-raleway p-4 md:p-6 font-[800] rounded-lg ">
                        You're so close to getting your home's 2024 BISH! code.
                    </div>
                </div>
                <div className="flex gap-4 lg:grid-cols-3 grid md:py-12 pt-8">
                    {
                        CLOSE_BISH.map((item) => (
                            <div className="flex items-center p-4 gap-4 bg-[#F5F5F5] rounded-lg">
                                <IoMdCheckmarkCircleOutline size={iconSize()} className="text-pink-50" />
                                <p className="font-raleway md:text-[21px] text-[16px] font-[600] ">
                                    {item}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="p-14 md:p-0 text-center">
                <div className="italic-gradient md:bg-none rounded-lg md:rounded-none md:text-white text-black md:bg-pink-50 md:p-12 p-4 font-raleway">
                    <h1 className=" font-[800] md:text-[40px] text-[19px] md:p-8 p-4">
                        Let's get started so we can get an expert to your door at your home's exclusive BISH! price.
                    </h1>
                    <p className="font-[400] md:font-[600] text-[16px] md:text-[25px]">
                        Please note. BISH! codes are only available in certain areas
                    </p>
                </div>
            </div>
            <div className="py-16">
                <div className="md:px-12">
                    <div className="md:block hidden">
                        <div className="p-8">
                            <div className="md:bg-none italic-gradient text-center p-4 font-raleway rounded-lg">
                                <span className="text-[17px] md:text-[38px] font-[800]">
                                    You told us you live at
                                </span>
                                <p className="text-[14px] md:text-[23px] font-[600]">
                                    15, Smith Street <br />London <br />W2 4EB
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full gap-4 bg-transparent rounded-2xl md:bg-[#F4E1F2] p-6 md:p-12 lg:flex justify-between">
                        <div className="p-8 lg:w-1/2 w-full flex flex-col gap-6">
                            <div className="">
                                <div className="span-4">
                                    Select a town
                                </div>
                                <select className="w-full p-4 rounded-lg">
                                </select>
                            </div>
                            <div className="">
                                <div className="span-4">
                                    Postcode
                                </div>
                                <input
                                    type="text"
                                    className="w-full p-4 rounded-lg"
                                    placeholder="Enter your postcode"
                                    onChange={handleChange}
                                    name="postcode"
                                    value={bishdata.postcode}
                                />
                            </div>
                            <div className="flexCenter md:flexStart">
                                <button className="bg-pink-50 text-white text-[15px] md:text-[22px] p-3 rounded-lg w-2/3" onClick={handleClick}>
                                    Find Address
                                </button>
                            </div>
                            <input type="text" className="w-full p-4 rounded-lg" placeholder="Select Address" value={selectedLocation.summaryline} />

                            <div className="md:hidden">
                                <div className="md:p-20 p-8">
                                    <div className="md:bg-none italic-gradient text-center p-4 font-raleway rounded-lg">
                                        <span className="text-[17px] md:text-[38px] font-[800]">
                                            You told us you live at
                                        </span>
                                        <p className="text-[14px] md:text-[23px] font-[600]">
                                            15, Smith Street <br />London <br />W2 4EB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col lg:w-1/2 w-full gap-1 md:px-12 px-8">
                            <span className="span-4 pt-2">First name</span>
                            <input
                                type="text"
                                className="w-full p-4 rounded-lg"
                                name="userFirstname"
                                value={bishdata.userFirstname}
                                onChange={handleChange}
                            />
                            <span className="span-4 pt-2">Last name</span>
                            <input
                                type="text"
                                className="w-full p-4 rounded-lg"
                                name="userLastname"
                                value={bishdata.userLastname}
                                onChange={handleChange}
                            />
                            <span className="span-4 pt-2">Email</span>
                            <input
                                type="text"
                                className="w-full p-4 rounded-lg"
                                name="userEmail"
                                value={bishdata.userEmail}
                                onChange={handleChange}
                            />
                            <span className="span-4">Mobile phone</span>
                            <input
                                type="text"
                                className="w-full p-4 rounded-lg"
                                name="userPhone"
                                value={bishdata.userPhone}
                                onChange={handleChange}
                            />
                            <div className="flexEnd py-4">
                                <button className="text-center p-3 w-4/5 bg-pink-50 text-white rounded-lg" onClick={sendBishcode}>
                                    Check if BISH! codes are available
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal isVisible={isModalVisible} onClose={handleCloseModal} data={data} setSelectedLocation={setSelectedLocation}>
                <h2 className="text-xl font-bold">Modal Title</h2>
                <p className="mt-4">This is the modal content.</p>
                <button className="mt-4 bg-pink-50 text-white p-2 rounded" onClick={handleCloseModal}>
                    Close
                </button>
            </Modal>

            <div className="md:block hidden">
                <Footer />
            </div>
        </section>
    )
}