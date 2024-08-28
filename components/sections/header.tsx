'use client';

import Image from "next/image"
import { BiMenu } from "react-icons/bi";

const Header = () => {
    return (
        <header>
            <nav className=" w-full z-30 bg-pink-50 p-4 flex text-white gap-6">
                <BiMenu size={50} className="md:block hidden" />
                <div className="flexCenter">

                    <Image
                        src='/Vector (2).png'
                        alt="icon"
                        width={10} // Define width for the lg breakpoint
                        height={0} // Define height proportionally for the lg breakpoint
                        className="bg-transparent w-[28px] h-[34px] "
                    />
                </div>
                <h1 className="text-[30px] font-gilroy font-[900] italic px-6">
                    BISH!
                </h1>
            </nav>
        </header>
    )
}

export default Header