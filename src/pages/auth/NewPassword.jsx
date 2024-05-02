import React, { useState } from "react";
import loginBanner from "../../../src/assets/images/login_banner.png"
import BackArrowIcon from "../../assets/svg/BackArrowIcon.svg"
import eyeIcon from "../../assets/svg/eyeIcon.svg"
import { AuthInput } from "../../components/auth/AuthInput";
import { SubmitButton } from "../../components/auth/SubmitButton";
import SideImage from "../../components/auth/SideImage";
import { Link, useNavigate } from "react-router-dom";
import VerifyEmailModal from "../../components/modals/VerifyEmailModal";
const NewPassword = () => {
  const navigate = useNavigate();
  const [otherModal, setOtherModal] = useState('password-changed')
  const [errMessage, setErrMessage] = useState({
    email: '',
    password: '',
  })

  const handleInput = (input) => {
    const { name, value } = input.target;
    const addColour = (elem) => {
      elem.target.classList.add('border-cs-error-500');
      elem.target.classList.add('placeholder:text-cs-error-500')
      elem.target.classList.remove('bg-cs-grey-55')
      setErrMessage(prevState => ({
        ...prevState,
        [name]: `Invalid ${name}`
      }));
    }
    const removeColour = (elem) => {
      elem.target.classList.remove('border-cs-error-500');
      elem.target.classList.remove('placeholder:text-cs-error-500')
      elem.target.classList.add('bg-cs-grey-55')
      setErrMessage(prevState => ({
        ...prevState,
        [name]: ''
      }));
    }
    if (name === "email") {
      if ((!ValidateEmail(value))) {
        addColour(input)
      } else {
        removeColour(input)
      }
    } else if (name === "password") {
      if ((!ValidatePassword(value))) {
        addColour(input)
      } else {
        removeColour(input)
      }
    }

    if (input.target.value.length === 0) {
      setErrMessage(prevState => ({
        ...prevState,
        [name]: `Enter your ${name}`
      }));
    } else {
      setAuthData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  }

  return (
    <>
      <section>
        <div className=" md:grid grid-cols-2">
          <div>
            <SideImage imageSrc={loginBanner} />
          </div>
          <div className=" my-[9px] px-6 md:flex md:flex-col md:min-h-dvh justify-between">
            <img src={BackArrowIcon} alt="back-arrow" className=" w-[30px]" />
            <div>
              <h1 className=" my-2 text-[#2C2A2A] font-semibold text-2xl text-center">Create a New Password</h1>
              <p className=" text-[#545454] text-xs font-normal  text-center">Please Create a New Password Here</p>

              <div>
                <AuthInput label="Create Password" action={handleInput} errorMessage={errMessage.email} inputName="password" inputType="password" placeHolder="Create Password Here" icon={<img src={eyeIcon} alt="" />} />

                <AuthInput label="Confirm Password" action={handleInput} errorMessage={errMessage.email} inputName="new-password" inputType="password" placeHolder="Enter Password Again" icon={<img src={eyeIcon} alt="" />} />

                <div className=" flex items-center gap-x-2 my-1">
                  <input type="checkbox" name="" id="" className="w-2 h-2" />
                  <p className=" text-[10px] font-bold text-[#090909] montserrat">Remember me</p>
                </div>

                <SubmitButton text="Update Password" action={() => {
                  navigate('/auth/reset-password')
                }} activate={true} />

              </div>
            </div>

            <div className="">
              <p className=" text-[10px] font-normal text-[#090909] text-center my-2">By continuing, you agree to TenderCare <span className=" text-[#C43F76]">Conditions of Use</span> and <span className=" text-[#C43F76]">Privacy Policies</span>.</p>
            </div>
          </div>
        </div>

      </section>
      {otherModal === "password-changed" && <VerifyEmailModal onClose={() => setOtherModal("")} header="Your Password Has Been Changed Successfully" link="/auth/login" text="Click here to Go Back to Login" />}
    </>

  )
}

export default NewPassword;