import starIcon from "../../assets/svg/starIcon.svg"
const ContactUs = () => {
  return (
    <>
      <section>
        <div className=" grid grid-cols-2 px-12 gap-12 my-12">
          <div>
            <h3 className=" text-[28px] font-semibold text-[#292929]">Contact Us</h3>
            <div className=" grid grid-cols-2 gap-6">
              <div className=" bg-[#E19DB9] rounded-[8px] px-[24px] py-2">
                <label htmlFor="fullName" className=" text-white">Full Name</label>
                <input type="text" id="fullName" className=" w-full outline-none bg-transparent text-white" />
              </div>

              <div className=" bg-[#E19DB9] rounded-[8px] px-[24px] py-2">
                <label htmlFor="Email" className=" text-white">Email</label>
                <input type="text" id="Email" className=" w-full outline-none bg-transparent text-white" />
              </div>

              <div className=" bg-[#E19DB9] rounded-[8px] px-[24px] py-2">
                <label htmlFor="Phone" className=" text-white">Phone</label>
                <input type="text" id="Phone" className=" w-full outline-none bg-transparent text-white" />
              </div>

              <div className=" bg-[#E19DB9] rounded-[8px] px-[24px] py-2">
                <label htmlFor="Subject" className=" text-white">Subject</label>
                <input type="text" id="Subject" className=" w-full outline-none bg-transparent text-white" />
              </div>


              <div className=" bg-[#E19DB9] rounded-[8px] px-[24px] py-2  col-span-2">
                <label htmlFor="Message" className=" text-white">Message</label>
                <textarea id="Message" name="Message" rows="4" cols="50" className=" w-full outline-none bg-transparent text-white">
                  Enter text here...
                </textarea>
              </div>

              <div className=" col-span-2">
                <button className=" text-white bg-[#C43F76] w-full px-[24px] py-2 rounded-lg">Submit</button>
              </div>

            </div>
          </div>


          <div>
            <h3 className=" text-[28px] font-semibold text-[#292929]">Our Location</h3>
            <div className=" ">
              <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d126865.53705532447!2d3.4308096!3d6.4520192!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1713827146763!5m2!1sen!2sng" width="100%" height="250" style={{ border: 0, borderRadius: 8 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

              <div className=" flex justify-between my-2 items-center">
                <h4 className=" text-[#555555] font-bold text-[28px]">Harare</h4>
                <div className=" bg-[#C43F76] flex items-center gap-x-3 rounded-[4px] px-4">
                  <img src={starIcon} alt="" />
                  <h4 className=" text-white font-normal text-[28px]">4.5</h4>
                </div>
              </div>

              <p className=" text-[#000000] text-[20px] font-normal">Pedeatric  PC 54 Lourens Street
                Somerset West</p>

              <p className=" text-[#000000] text-[20px] font-normal">Phone - (234) 665- 0100 </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs;