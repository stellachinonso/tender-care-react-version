import React, { useState, useEffect } from "react"
import SideImage from "../../components/auth/SideImage"
import signUpBanner from "../../../src/assets/images/singup_banner.png"
import BackArrowIcon from "../../assets/svg/BackArrowIcon.svg"
import VerifyEmailModal from "../../components/modals/VerifyEmailModal"



const VerifyEmail = () => {
  const [countDown, setCountDown] = useState(10)
  const [otherModal, setOtherModal] = useState('verify-email')

  const padZero = (num) => {
    return num < 10 ? `0${num}` : num;
  }

  useEffect(() => {
    countDown > 0 && setTimeout(() => setCountDown(countDown - 1), 1000);
  }, [countDown])
  const seconds = countDown % 60;


  return (
    <>
      <section>
        <div className=" md:grid grid-cols-2">
          <div>
            <SideImage imageSrc={signUpBanner} />
          </div>
          <div className=" my-[9px] px-6 md:flex md:flex-col md:min-h-dvh justify-between">
            <img src={BackArrowIcon} alt="back-arrow" className=" w-[30px]" />
            <div>
              <h1 className=" my-2 text-[#2C2A2A] font-semibold text-2xl text-center">Verify your email</h1>
              <p className=" text-[#555555] text-sm font-normal  text-center">Please check your mail. A verification link has been sent to <span className=" text-[#C43F76]">*****doe@example.com,</span></p>

              <p className=" text-[#021C5F] text-sm font-normal  text-center my-2">Kindly check your spam folder if you don’t find it in your inbox</p>

              <div className=" flex items-center justify-center gap-x-2">
                <div className=" bg-[#C43F76] h-[1px] w-14 rounded"></div>
                <p className=" text-[#090909] font-normal text-[10px] my-1">or enter details below</p>
                <div className=" bg-[#C43F76] h-[1px] w-14 rounded"></div>
              </div>

              <div className=" ">
                <div className=" w-[80px] h-[80px] bg-[#F5F5F1] mx-auto flex justify-center items-center rounded-full my-3">
                  <p className=" text-[30px] font-semibold text-[#090909] m-auto montserrat">{padZero(seconds)}</p>
                </div>
              </div>

              <div>
                <p className=" text-[#555555] text-sm font-medium text-center">Didn’t get the link? <span className=" text-[#C43F76] font-bold cursor-pointer">Resend link</span></p>
              </div>
            </div>
            <div className="">
              <p className=" text-[10px] font-normal text-[#090909] text-center my-2">By continuing, you agree to TenderCare <span className=" text-[#C43F76]">Conditions of Use</span> and <span className=" text-[#C43F76]">Privacy Policies</span>.</p>
            </div>
          </div>
        </div>

      </section>
      {otherModal === "verify-email" && <VerifyEmailModal onClose={() => setOtherModal("")} header="Email Verified" link="/auth/generate-profile" text="Click here to continue the sign up process" />}
    </>
  )
}

export default VerifyEmail;