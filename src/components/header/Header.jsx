import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/svg/logo.svg"
import dp from "../../assets/images/dp.png"
import { useState } from "react";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Development Tracker", link: "/development-tracker" },
  { name: "Hospital Connect", link: "/hospital-connect" },
  { name: "Resources", link: "/resources" },
  { name: "About", link: "/about" },
  { name: "Contact Us", link: "/contact-us" },
]

const Header = () => {
  const navigate = useNavigate();

  const [signedIn, setSignedIn] = useState(false)
  return (
    <>
      <section className=" flex justify-between items-center bg-white px-6 py-4">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className=" flex items-center gap-x-3">
          {navLinks.map(navLink => (
            <NavLink
              to={navLink.link}
              className=" text-[18px] font-normal text-[#555555]"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#C43F76" : "",
                };
              }}
              key={navLink.name}
            >
              {navLink.name}
            </NavLink>
          ))}

        </div>

        <div>
          {signedIn ? (
            <img src={dp} alt="avatar" className=" w-[40px] h-[40px] rounded-full border border-[#C43F76]" />
          ) : (
            <button className=" bg-[#C43F76] text-white p-4 rounded-lg" onClick={() => {
              navigate('/auth/signup')
            }}>Sign Up Now</button>
          )}
        </div>
      </section>
    </>
  )
}

export default Header;