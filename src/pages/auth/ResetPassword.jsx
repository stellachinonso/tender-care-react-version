import React, { useState, useEffect } from "react";
import loginBanner from "../../../src/assets/images/login_banner.png"
import BackArrowIcon from "../../assets/svg/BackArrowIcon.svg"
import emailIcon from "../../assets/svg/emailIcon.svg"
import { AuthInput } from "../../components/auth/AuthInput";
import { SubmitButton } from "../../components/auth/SubmitButton";
import SideImage from "../../components/auth/SideImage";
import { Link, useNavigate } from "react-router-dom";
import PinInput from "react-pin-input";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [allowSubmit, setAllowSubmit] = useState(false)
  const [countDown, setCountDown] = useState(600)
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


  const handleAllowSubmit = (value, index) => {
    if (value.length === 4) {
      setAllowSubmit(true)
    } else {
      setAllowSubmit(false)
    }
  }

  const padZero = (num) => {
    return num < 10 ? `0${num}` : num;
  }

  useEffect(() => {
    countDown > 0 && setTimeout(() => setCountDown(countDown - 1), 1000);
  }, [countDown])
  const minutes = Math.floor(countDown / 60)
  const seconds = countDown % 60;

  return (
    <section>
      <div className=" md:grid grid-cols-2">
        <div>
          <SideImage imageSrc={loginBanner} />
        </div>
        <div className=" my-[9px] px-6 md:flex md:flex-col md:min-h-dvh justify-between">
          <img src={BackArrowIcon} alt="back-arrow" className=" w-[30px]" />
          <div>
            <h1 className=" my-2 text-[#2C2A2A] font-semibold text-2xl text-center">Confirm Email</h1>
            <p className=" text-[#545454] text-xs font-normal  text-center">Please enter the verification pin sent to
              ***doe@example.com to reset password</p>

            <div>
              <form>
                <div className=" flex justify-center">
                  <PinInput
                    length={4}
                    initialValue=""
                    secret={true}
                    // secretDelay={100}
                    onChange={(value, index) => handleAllowSubmit(value, index)}
                    type="numeric"
                    inputMode="number"
                    style={{ marginTop: '48px', display: 'flex', justifyContent: 'space-between', gap: 20 }}
                    inputStyle={{ borderColor: '#C43F76', borderRadius: '10px', fontSize: '47px', fontWeight: '600', width: '70px', height: '59px' }}
                    inputFocusStyle={{ borderColor: '#C43F76' }}
                    // onComplete={(value, index) => {
                    //   console.log("onComplete", value, index)
                    // }}
                    autoSelect={false}
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                  />
                </div>
                <p className=" text-center font-medium text-[20px] text-[#114F8A] mt-2">Expires in <span className=" font-bold">{`${padZero(minutes)}:${padZero(seconds)}`}</span></p>

                <p className=" text-[18px] text-[#545454] font-normal text-center my-2">Didn’t get the email?</p>

                <p className=" text-[17px] text-[#C43F76] font-semibold cursor-pointer text-center">Click here to Resend</p>

                <SubmitButton text="Submit Pin" action={() => {
                  navigate('/auth/new-password')
                }} activate={allowSubmit} />
              </form>


            </div>
          </div>

          <div className="">
            <p className=" text-[10px] font-normal text-[#090909] text-center my-2">By continuing, you agree to TenderCare <span className=" text-[#C43F76]">Conditions of Use</span> and <span className=" text-[#C43F76]">Privacy Policies</span>.</p>
          </div>
        </div>
      </div>

    </section>



  )
}

export default ResetPassword;