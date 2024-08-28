import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export function TopBar() {
    return (
        <div className="relative  flexBetween z-50 lg:text-[16px] text-[12px] font-[600] p-2 md:px-12">
            <div className="flexCenter md:gap-2  text-pink-50 px-4 md:px-12">
                <FaPhone />
                <span className="font-raleway">0123456789</span>
                <span> | </span>  {/* This is the vertical bar separator */}
                <IoIosMail />
                <span className="font-raleway">bish01@gmail.com</span>
            </div>
            <div className="flexBetween lg:gap-4 gap-1 md:text-white text-pink-50 px-4 md:px-12">
                <FaFacebookF />
                <FaInstagram />
                <BiLogoLinkedin />
                <BsYoutube />
            </div>
        </div>
    )
}