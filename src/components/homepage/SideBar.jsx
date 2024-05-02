import rightArrowIcon from "../../assets/svg/rightArrowIcon.svg"
import minusIcon from "../../assets/svg/minusIcon.svg"
import { useState } from "react"

const SideBar = ({ header, content }) => {
  const [showContent, setShowContent] = useState(false)
  return (
    <>
      <section>
        <div className=" bg-[#CE5F8D] rounded-[12px] p-4 mb-4">
          <div className=" flex justify-between items-center">
            <h3 className=" font-semibold text-white">{header}</h3>
            <div onClick={() => setShowContent(!showContent)} className=" cursor-pointer">
              {showContent ? <img src={minusIcon} alt="" /> : <img src={rightArrowIcon} alt="" />}
            </div>
          </div>
          {showContent && <p className=" mt-2 text-white">{content}</p>}
        </div>
      </section>
    </>
  )
}

export default SideBar;