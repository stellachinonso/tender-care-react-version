import React, { useState } from "react";
import signUpBanner from "../../../src/assets/images/singup_banner.png"
import bannerTwo from "../../../src/assets/images/bannerTwo.png"
import BackArrowIcon from "../../assets/svg/BackArrowIcon.svg"
import calendarIcon from "../../assets/svg/calendarIcon.svg"
import dropDownIcon from "../../assets/svg/dropDownIcon.svg"
import uploadFileIcon from "../../assets/svg/uploadFileIcon.svg"
import { AuthInput } from "../../components/auth/AuthInput";
import { SubmitButton } from "../../components/auth/SubmitButton";
import SideImage from "../../components/auth/SideImage";
import { AuthSelect } from "../../components/auth/AuthSelect";
import GenerateProfileModal from "../../components/modals/GenerateProfileModal";

const GenerateProfile = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [formLLevel, setFormLevel] = useState('one')
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedGender, setSelectedGender] = useState('')
  const [selectedFile, setSelectedFile] = useState('')
  const [otherModal, setOtherModal] = useState('verify-email')
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
            <SideImage imageSrc={formLLevel === "one" ? signUpBanner : bannerTwo} />
          </div>
          <div className=" my-[9px] px-6 md:flex md:flex-col md:min-h-dvh">
            <img src={BackArrowIcon} alt="back-arrow" className=" w-[30px]" />
            <div className=" my-4">
              <div className=" bg-[#F5F5F1] h-[9px] rounded-[2px] relative">
                <div className={` bg-[#C43F76] h-[9px] rounded-[2px] absolute ${formLLevel === "one" ? "w-1/3" : "w-2/3"}
` }></div>
              </div>
            </div>
            <h1 className=" my-2 text-[#2C2A2A] font-semibold text-2xl text-center">Generating Profile</h1>
            <p className=" text-[#545454] text-sm font-normal  text-center">{formLLevel === 'one' ? 'Which of this best describes you?' : 'Create a Child’s Profile'}</p>

            {formLLevel === 'one' && <div>
              <AuthSelect action={(e) => { setSelectedOption(e) }} value={'mother'} selected={selectedOption === "mother" ? true : false} />
              <AuthSelect action={(e) => { setSelectedOption(e) }} value={'dad'} selected={selectedOption === "dad" ? true : false} />
              <AuthSelect action={(e) => { setSelectedOption(e) }} value={'Guardian'} selected={selectedOption === "Guardian" ? true : false} />

              <div className="flex flex-col mt-[26px]">
                <div>
                  <div className="relative">
                    <input
                      onChange={(e) => { setSelectedOption(e.target.value) }}
                      type="text"
                      name="other"
                      className="h-[38px] px-[16px] py-[13px] focus:border-[#C43F76] border-[#555555] border-[0.5px] w-full placeholder:text-[#A6A0A0] placeholder:text-[10px] rounded-[2px] outline-none"
                      placeholder="Others(Specify)"
                      onFocus={() => setSelectedOption("other")}
                    />
                  </div>
                </div>
              </div>
              <SubmitButton text="Next" action={() => { setFormLevel('two') }} activate={true} />
              <SubmitButton text="Skip" action={() => { }} activate={true} white={true} />
            </div>}


            {formLLevel === 'two' && <div>
              <AuthInput label="Full Name" action={handleInput} errorMessage={errMessage.email} inputName="fullName" inputType="text" placeHolder="Enter Child’s Full Name Here" />

              <div className="flex flex-col mt-[24px] w-full">
                <label htmlFor="gender" className="text-xs font-medium text-[#555555]">Gender</label>
                <div className=" relative w-full">
                  <div className="relative">
                    <input
                      type={"text"}
                      name='gender'
                      className="h-[38px] px-[16px] py-[13px] border-[#C43F76] border rounded-[2px] w-full placeholder:text-[#A4ABB7] placeholder:text-sm"
                      placeholder='Select Child’s Gender '
                      value={selectedGender}
                    />
                    <img src={dropDownIcon} alt="" className="absolute top-[13px] right-[10px] cursor-pointer" onClick={() => { setOpenDropdown(!openDropdown) }} />
                  </div>
                  {openDropdown && <div className=" absolute w-full z-10">
                    <div className=" relative border-0 border-t z-10">
                      <div className="p-2 bg-[#fbfcff] hover:bg-[#f5f8ff] border-0 border-b border-x cursor-pointer" onClick={() => {
                        setSelectedGender('Male')
                        setOpenDropdown(!openDropdown)
                      }}>Male</div>
                      <div className="p-2 bg-[#fbfcff] hover:bg-[#f5f8ff] border-0 border-b border-x cursor-pointer" onClick={() => {
                        setSelectedGender('Female')
                        setOpenDropdown(!openDropdown)
                      }}>Female</div>
                    </div>
                  </div>}
                </div>
              </div>

              <div className="flex flex-col mt-[22px] w-full lg:w-[441px]" id='calendarStyle'>
                <label htmlFor={"inputName"} className="text-xs font-medium text-[#555555]">Date of Birth</label>
                <div className=" flex relative customCalendar">
                  <input type="text" onChange={(e) => { }} className="h-[38px] px-[16px] py-[13px] focus:border-[#C43F76] border-[#C43F76] border-[0.5px] w-full placeholder:text-[#A6A0A0] placeholder:text-[10px] rounded-[2px] outline-none" value={dateOfBirth} />
                  <img src={calendarIcon} alt="" className="absolute top-[15px] right-[10px]" />
                  <input type="date" onChange={(e) => { setDateOfBirth(e.target.value) }} className="absolute top-[15px] right-[10px] cursor-pointer opacity-0 z-10" />
                </div>
              </div>

              <div className="flex flex-col mt-[22px] w-full lg:w-[441px]" id='calendarStyle'>
                <label htmlFor={"inputName"} className="text-xs font-medium text-[#555555]">Photpgraph</label>
                <div className=" flex relative customCalendar">
                  <input type="text" onChange={(e) => { }} className="h-[38px] px-[16px] py-[13px] focus:border-[#C43F76] border-[#C43F76] border-[0.5px] w-full placeholder:text-[#A6A0A0] placeholder:text-[10px] rounded-[2px] outline-none" value={selectedFile} />
                  <img src={uploadFileIcon} alt="" className="absolute top-[13px] right-[10px]" />
                  <input type="file" onChange={(e) => { setSelectedFile(e.target.value) }} className="absolute top-[15px] right-[10px] cursor-pointer opacity-0 z-10" />
                </div>
              </div>

              <div className=" flex items-center gap-x-2 my-1">
                <input type="checkbox" name="" id="" className="w-2 h-2" />
                <p className=" text-[10px] font-bold text-[#090909] montserrat">I have read and agree to the <span className=" text-[#C43F76]">Terms and Conditions</span> of TenderCare </p>
              </div>

              <SubmitButton text="Create Account" action={() => { setFormLevel('two') }} activate={true} />
              <SubmitButton text="Skip" action={() => { }} activate={true} white={true} />
            </div>
            }

            <div className=" flex flex-col h-full justify-end">
              <p className=" text-[10px] font-normal text-[#090909] text-center my-2">By continuing, you agree to TenderCare <span className=" text-[#C43F76]">Conditions of Use</span> and <span className=" text-[#C43F76]">Privacy Policies</span>.</p>
            </div>
          </div>
        </div>
      </section>

      {otherModal === "verify-email" && <GenerateProfileModal onClose={() => setOtherModal("")} />}
    </>
  )
}

export default GenerateProfile;