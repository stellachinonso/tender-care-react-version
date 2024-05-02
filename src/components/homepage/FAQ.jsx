import faq from "../../assets/images/faq.png"
import SideBar from "./SideBar";
const FAQ = () => {
  return (
    <>
      <section>
        <div className=" px-12 my-8">
          <h2 className=" text-[34px] text-[#CE5F8D] font-semibold text-center my-4">Frequently Asked Questions</h2>

          <div className=" grid grid-cols-[40%60%] gap-4">
            <img src={faq} alt="faq" />
            <div>
              <SideBar header="What kind of developmental milestones can I track on this site?" content="The app provides tools and resources for parents to monitor their child's milestones and development progress. It offers guidance on typical developmental stages empowering parents to recognize and address their child's needs effectively." />

              <SideBar header="How can this app help me identify my child's developmental needs? " content="The app provides tools and resources for parents to monitor their child's milestones and development progress. It offers guidance on typical developmental stages empowering parents to recognize and address their child's needs effectively." />

              <SideBar header="How does the app ensure the accuracy and credibility of the information provided?" content="The app provides tools and resources for parents to monitor their child's milestones and development progress. It offers guidance on typical developmental stages empowering parents to recognize and address their child's needs effectively." />

              <SideBar header="Are there any privacy concerns I should be aware of when using the app?" content="The app provides tools and resources for parents to monitor their child's milestones and development progress. It offers guidance on typical developmental stages empowering parents to recognize and address their child's needs effectively." />

              <SideBar header="How can I get started with the app and make the most of its features?" content="The app provides tools and resources for parents to monitor their child's milestones and development progress. It offers guidance on typical developmental stages empowering parents to recognize and address their child's needs effectively." />

              <SideBar header="Can I connect with other parents facing similar challenges through the app?" content="The app provides tools and resources for parents to monitor their child's milestones and development progress. It offers guidance on typical developmental stages empowering parents to recognize and address their child's needs effectively." />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ;