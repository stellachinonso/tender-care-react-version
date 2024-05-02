import blobOne from "../../assets/images/blobOne.png"
import babyPic from "../../assets/images/babyPic.png"

const BabySection = () => {
  return (
    <>
      <section className=" relative ">

        <div className=" relative grid grid-cols-2 px-12 py-8 gap-x-4 items-center">
          <img src={blobOne} alt="blob" className=" absolute max-w-[500px] max-h-[500px]" />
          <img src={babyPic} alt="baby" className="relative z-10" />
          <div className=" relative z-10">
            <h2 className=" text-center text-[#D77EA3] font-semibold text-[28px]">ABOUT US</h2>
            <p>Welcome to TenderCare, your dedicated companion in the journey of parenting. At TenderCare, we recognize the importance of early intervention and support in ensuring the well-being and development of every child. Our app is designed to empower parents by providing them with the tools, resources, and connections they need to track their child's development, identify potential issues early, and access the support and guidance they need.</p>
          </div>
        </div>
      </section>

      <section className=" px-12 my-8">

        <div className=" grid grid-cols-2 gap-12">

          <div className=" p-4 border border-[#B4B4B4]">
            <h2 className=" text-[#000000] font-semibold text-[28px] text-center">Our Mission</h2>
            <p className=" text-[#292929] font-medium">Our mission at TenderCare is to empower parents with the knowledge and support they need to ensure the optimal development and well-being of their children.</p>
            <button className=" text-[#FFFFFF] font-semibold bg-[#C43F76] p-2 rounded-lg my-2 text-center mx-auto block">Read More</button>
          </div>

          <div className=" p-4 border border-[#B4B4B4]">
            <h2 className=" text-[#000000] font-semibold text-[28px] text-center">Who We Are</h2>
            <p className=" text-[#292929] font-medium">TenderCare is more than just an app – we are a team of passionate individuals dedicated to making a positive impact in the lives of children and families.</p>
            <button className=" text-[#FFFFFF] font-semibold bg-[#C43F76] p-2 rounded-lg my-2 text-center mx-auto block">Read More</button>
          </div>

          <div className=" p-4 border border-[#B4B4B4]">
            <h2 className=" text-[#000000] font-semibold text-[28px] text-center">What We Offer</h2>
            <p className=" text-[#292929] font-medium">TenderCare offers a range of features and functionalities designed to support parents in tracking their child's development and accessing support services:</p>
            <button className=" text-[#FFFFFF] font-semibold bg-[#C43F76] p-2 rounded-lg my-2 text-center mx-auto block">Read More</button>
          </div>

          <div className=" p-4 border border-[#B4B4B4]">
            <h2 className=" text-[#000000] font-semibold text-[28px] text-center">Why Choose Us</h2>
            <p className=" text-[#292929] font-medium">Choosing TenderCare means choosing a trusted partner who understands the challenges of parenting and caring for children. .</p>
            <button className=" text-[#FFFFFF] font-semibold bg-[#C43F76] p-2 rounded-lg my-2 text-center mx-auto block">Read More</button>
          </div>

        </div>
        <button className=" text-[#FFFFFF] font-semibold bg-[#C43F76] py-2 px-8 rounded-lg my-8 text-center mx-auto block">Learn More</button>

      </section>
    </>
  )
}

export default BabySection;