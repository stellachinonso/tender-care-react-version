// import { EyeSlash } from "iconsax-react";
import { useState } from "react";

export const AuthInput = ({ label, action, errorMessage, inputType, inputName, placeHolder, icon }) => {
  const [checkPassword, setCheckPassword] = useState(false);

  return (
    <>{inputType === "password" ? (
      <div className="flex flex-col mt-[12px]">
        <label htmlFor={inputName} className=" text-xs font-medium text-[#555555]">{label}</label>
        <div>
          <div className="relative">
            <input
              onChange={(e) => action(e)}
              type={checkPassword ? "text" : "password"}
              name={inputName}
              className="h-[38px] px-[16px] py-[13px] border-[#C43F76] border-[0.5px] w-full placeholder:text-[#A6A0A0] placeholder:text-[10px] rounded-[2px] outline-none"
              placeholder={placeHolder}
              id={inputName}
            />
            <div className="absolute top-[14px] right-[16px] cursor-pointer" onClick={() => { setCheckPassword(!checkPassword) }}>
              {icon}
            </div>
          </div>
          <p className="text-sm text-cs-error-500 mt-1">{errorMessage}</p>
        </div>
      </div>
    ) : (
      <div className="flex flex-col mt-[12px]">
        <label htmlFor={inputName} className=" text-xs font-medium text-[#555555]">{label}</label>
        <div>
          <div className="relative">
            <input
              onChange={(e) => action(e)}
              type={inputType}
              name={inputName}
              className="h-[38px] px-[16px] py-[13px] border-[#C43F76] border-[0.5px] w-full placeholder:text-[#A6A0A0] placeholder:text-[10px] rounded-[2px] outline-none"
              placeholder={placeHolder}
              id={inputName}
            />
            <div className="absolute top-[14px] right-[16px] cursor-pointer">
              {icon}
            </div>
          </div>
          <p className="text-sm text-cs-error-500 mt-1">{errorMessage}</p>
        </div>
      </div>
    )}
    </>
  )
}