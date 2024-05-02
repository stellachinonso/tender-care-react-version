import React from 'react';
import bigCheckMarkIcon from "../../assets/svg/bigCheckMarkIcon.svg"
import { Link } from 'react-router-dom';

const GenerateProfileModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto modal">
      <div className="flex items-center justify-center min-h-screen pt-4 pb-20 text-center">
        <div className="fixed inset-0 transition-opacity bg-[#2C2A2A66]"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div className="inline-block pt-5 pb-4 text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:align-middle sm:w-full sm:max-w-[606px]">

          <div className='px-6 flex justify-center items-center'>
            <div>
              <img src={bigCheckMarkIcon} alt="checkmark" className=' mx-auto' />
              <p className=' text-[#2C2A2A] font-semibold text-[20px] text-center my-3'>Account Created Successfully</p>

              <Link to={'/auth/generate-profile'} className=' text-[#C43F76] text-[18px] font-normal text-center block underline'>Click here to Create Another Child Account</Link>


              <Link to={'/'} className=' text-[#114F8A] text-[18px] font-normal text-center block underline'>Click Here to go back to home</Link>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default GenerateProfileModal