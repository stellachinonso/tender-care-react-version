import heroBabies from "../../assets/images/heroBabies.png"
import heroOne from "../../assets/images/pinkBG.png"
import profileIcon from "../../assets/svg/profileIcon.svg"
import powerIcon from "../../assets/svg/powerIcon.svg"
import lineIcon from "../../assets/svg/lineIcon.svg"
import gpsIcon from "../../assets/svg/gpsIcon.svg"
import appointmentIcon from "../../assets/svg/appointmentIcon.svg"

const HomePageHero = () => {
  return (
    <>
      <div className="relative z-10 overflow-y-auto modal">
        <div className=" pt-4 pb-20 relative ">
          <img src={heroOne} alt="hero" className=" absolute inset-0 max-h-[772px] w-full block" />

          <div className="inline-block pt-5 transform px-6 w-full">
            <div className=" flex items-center justify-between">
              <div className=" pl-12">
                <h1 className=" text-[38px] text-white font-semibold">Welcome to TenderCare! <br />Providing Care for
                  Children needs.</h1>
                <button className=" text-[20px] font-normal bg-[#C43F76] rounded-lg p-4 text-white my-3">Book an appointment</button>
              </div>
              <div>
                <img src={heroBabies} alt="babies" className=" max-w-[500px] max-h-[772px] w-full" />
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className=" px-12 my-3">
        <div className=" grid grid-cols-7 items-center">

          <div className=" flex justify-center items-center">
            <div className=" bg-[#CE5F8D] w-fit rounded-full p-4">
              <img src={profileIcon} alt="" />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img src={lineIcon} alt="" />
          </div>

          <div className=" flex justify-center items-center">
            <div className=" bg-[#CE5F8D] w-fit rounded-full p-4">
              <img src={powerIcon} alt="" />
            </div>
          </div>

          <div className=" flex justify-center items-center">
            <img src={lineIcon} alt="" />
          </div>

          <div className=" flex justify-center items-center">
            <div className=" bg-[#CE5F8D] w-fit rounded-full p-4">
              <img src={gpsIcon} alt="" />
            </div>
          </div>

          <div className=" flex justify-center items-center">
            <img src={lineIcon} alt="" />
          </div>

          <div className=" flex justify-center items-center">
            <div className=" bg-[#CE5F8D] w-fit rounded-full p-4">
              <img src={appointmentIcon} alt="" />
            </div>
          </div>

          <div className="grid grid-cols-subgrid col-span-7 my-2">
            <div>
              <p className=" text-center">Register Child</p>
            </div>

            <div>
              <p className=" text-center"></p>
            </div>

            <div>
              <p className=" text-center">Check Milestones</p>
            </div>

            <div>

              <p className=" text-center"></p>
            </div>

            <div>

              <p className=" text-center">Find Hospital</p>
            </div>

            <div>

              <p className=" text-center"></p>
            </div>

            <div>

              <p className=" text-center">Book Appointment</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePageHero;