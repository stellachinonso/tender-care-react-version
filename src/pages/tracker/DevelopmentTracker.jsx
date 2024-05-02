import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header"
import BabySection from "../../components/homepage/BabySection";
import ContactUs from "../../components/homepage/ContactUs";
import FAQ from "../../components/homepage/FAQ";
import HomePageHero from "../../components/homepage/HomePageHero";
import HeroPage from "../../components/tracker/HeroPage";

const DevelopmentTracker = () => {
  return (
    <>
      <section>
        <Header />
        <HeroPage />
        {/* <BabySection /> */}
        <FAQ />
        <ContactUs />
        <Footer />
      </section>
    </>
  )
}

export default DevelopmentTracker;