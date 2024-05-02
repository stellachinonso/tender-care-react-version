import { useState } from "react";
import smallCheckMarkIcon from "../../assets/svg/smallCheckMarkIcon.svg"

export const AuthSelect = ({ action, value, selected }) => {
  return (
    <>
      <div className="flex flex-col mt-[26px]">
        <div>
          <div className="relative">
            <div
              onClick={() => action(value)}
              className={` px-[16px] py-[6px] border-[0.5px] rounded-[2px] ${selected ? "text-[#C43F76] border-[#C43F76]" : "text-[#A6A0A0] border-[#555555]"} grid items-center cursor-pointer`}
            >{value}</div>
            {selected && <div className="absolute top-[14px] right-[16px] cursor-pointer">
              <img src={smallCheckMarkIcon} alt="selected" />
            </div>}
          </div>
        </div>
      </div>
    </>
  )
}