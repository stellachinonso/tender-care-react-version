import React, { useState } from "react";
import signUpBanner from "../../../src/assets/images/singup_banner.png"
import BackArrowIcon from "../../assets/svg/BackArrowIcon.svg"
import googleIcon from "../../assets/svg/googleIcon.svg"
import emailIcon from "../../assets/svg/emailIcon.svg"
import eyeIcon from "../../assets/svg/eyeIcon.svg"
import { AuthInput } from "../../components/auth/AuthInput";
import { SubmitButton } from "../../components/auth/SubmitButton";
import SideImage from "../../components/auth/SideImage";
import { Link } from "react-router-dom";

const SignUp = () => {
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
    <section>
      <div className=" md:grid grid-cols-2">
        <div>
          <SideImage imageSrc={signUpBanner} />
        </div>
        <div className=" my-[9px] px-6 md:flex md:flex-col md:min-h-dvh justify-between">
          <img src={BackArrowIcon} alt="back-arrow" className=" w-[30px]" />
          <div>
            <h1 className=" my-2 text-[#2C2A2A] font-semibold text-2xl text-center">Welcome to TenderCare!</h1>
            <p className=" text-[#545454] text-xs font-normal  text-center">Please Create an Account to get on board</p>
            <button className=" flex w-full justify-center gap-x-1 items-center mt-4 border border-[#C43F76] rounded-md p-2">
              <img src={googleIcon} alt="signup_banner" />
              <span className=" font-semibold text-[12px] text-[#2C2A2A]">Sign up with Google</span>
            </button>

            <div className=" flex items-center justify-center gap-x-2">
              <div className=" bg-[#C43F76] h-[1px] w-14 rounded"></div>
              <p className=" text-[#090909] font-normal text-[10px] my-1">or enter details below</p>
              <div className=" bg-[#C43F76] h-[1px] w-14 rounded"></div>
            </div>

            <div>
              <AuthInput label="Email Address" action={handleInput} errorMessage={errMessage.email} inputName="email" inputType="email" placeHolder="Enter your Email Address Here" icon={<img src={emailIcon} alt="" />} />
              <AuthInput label="Create Password" action={handleInput} errorMessage={errMessage.password} inputName="password" inputType="password" placeHolder="Create Password Here" icon={<img src={eyeIcon} alt="" />} />
              <AuthInput label="Confirm Password" action={handleInput} errorMessage={errMessage.email} inputName="password-confirm" inputType="password" placeHolder="Enter Password Again" icon={<img src={eyeIcon} alt="" />} />

              <div className=" flex items-center gap-x-2 my-1">
                <input type="checkbox" name="" id="" className="w-2 h-2" />
                <p className=" text-[10px] font-bold text-[#090909] montserrat">I have read and agree to the <span className=" text-[#C43F76]">Terms and Conditions</span> of TenderCare </p>
              </div>

              <SubmitButton text="Create Account" action={() => { }} activate={true} />
              <div className=" mt-1 mb-6 flex justify-end">
                <p className=" text-xs font-normal text-[#2C2A2A]">Already  have an Account? <Link className=" text-[#C43F76]" to={'/auth/login'}>Login</Link></p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col h-full justify-end">
            <p className=" text-[10px] font-normal text-[#090909] text-center my-2">By continuing, you agree to TenderCare <span className=" text-[#C43F76]">Conditions of Use</span> and <span className=" text-[#C43F76]">Privacy Policies</span>.</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default SignUp;