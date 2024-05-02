import facebookIcon from "../../assets/svg/facebookIcon.svg"
import twitterIcon from "../../assets/svg/twitterIcon.svg"
import instagramIcon from "../../assets/svg/instagramIcon.svg"
import linkedInIcon from "../../assets/svg/linkedInIcon.svg"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <section className=" border-t border-t-[#B4B4B4] mt-6">
        <div className=" grid grid-cols-4 px-12 my-4 gap-x-1">
          <div className=" flex items-center gap-x-4">
            <div>
              <div className=" bg-[#C43F76] w-[43px] py-2 px-3 rounded-lg my-1">
                <img src={facebookIcon} alt="facebook" />
              </div>

              <div className=" bg-[#C43F76] w-[43px] py-2 px-3 rounded-lg my-1">
                <img src={twitterIcon} alt="twitter" />
              </div>

              <div className=" bg-[#C43F76] w-[43px] py-2 px-3 rounded-lg my-1">
                <img src={instagramIcon} alt="instagram" />
              </div>

              <div className=" bg-[#C43F76] w-[43px] py-2 px-3 rounded-lg my-1">
                <img src={linkedInIcon} alt="linkedin" />
              </div>
            </div>
            <div>
              <p className=" text-[#555555]">Call us at   12345709876</p>
              <p className=" text-[#C43F76] underline">See all ways to contact us</p>
            </div>
          </div>
          <div>
            <Link to={"/"} className=" text-[#114F8A] font-medium text-base block my-2">Home</Link>
            <Link to={"/"} className=" text-[#114F8A] font-medium text-base block my-2">Development Tracker</Link>
            <Link to={"/"} className=" text-[#114F8A] font-medium text-base block my-2">Hospital Connect</Link>
            <Link to={"/"} className=" text-[#114F8A] font-medium text-base block my-2">Resources</Link>
            <Link to={"/"} className=" text-[#114F8A] font-medium text-base block my-2">About Us</Link>
            <Link to={"/"} className=" text-[#114F8A] font-medium text-base block my-2">Contact Us</Link>
          </div>
          <div>
            <Link to={"/"} className=" text-[#114F8A] font-medium text-base block my-2">Home</Link>
            <Link to={"/"} className=" text-[#114F8A] font-medium text-base block my-2">Development Tracker</Link>
            <Link to={"/"} className=" text-[#114F8A] font-medium text-base block my-2">Hospital Connect</Link>
            <Link to={"/"} className=" text-[#114F8A] font-medium text-base block my-2">Resources</Link>
            <Link to={"/"} className=" text-[#114F8A] font-medium text-base block my-2">About Us</Link>
            <Link to={"/"} className=" text-[#114F8A] font-medium text-base block my-2">Contact Us</Link>
          </div>
          <div>
            <Link to={"/"} className=" text-[#114F8A] font-medium text-base block my-2">Home</Link>
            <Link to={"/"} className=" text-[#114F8A] font-medium text-base block my-2">Development Tracker</Link>
            <Link to={"/"} className=" text-[#114F8A] font-medium text-base block my-2">Hospital Connect</Link>
            <Link to={"/"} className=" text-[#114F8A] font-medium text-base block my-2">Resources</Link>
            <Link to={"/"} className=" text-[#114F8A] font-medium text-base block my-2">About Us</Link>
            <Link to={"/"} className=" text-[#114F8A] font-medium text-base block my-2">Contact Us</Link>
          </div>
        </div>

        <div className=" bg-[#C43F76]">
          <p className=" text-white text-center py-3">© Copyright 2024 TenderCare. All rights reserved.</p>
        </div>
      </section>
    </>
  )
}

export default Footer;