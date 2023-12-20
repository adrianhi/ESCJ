import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logoRemoveBg.webp";
const Navbar = () => {
  const navLinks = [
    {
      title: "Inicio",
      link: "/",
    },
    {
      title: "Servicios",
      link: "/services",
    },
    {
      title: "Sobre Nosotros",
      link: "/about",
    },
    {
      title: "Contactos",
      link: "/contact",
    },
  ];

  const [open, setOpen] = useState(false);

  // Control the state of the mobile Menu
  const handleMenu = () => setOpen(!open);

  return (
    <div>
      <div className="bg-white mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-black ">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 h-24 w-40">
            {/* El contenedor del logo con altura fija */}
            <img className="h-full w-full" src={logo} alt="Logo" />
          </div>

          <div className="hidden md:flex items-center space-x-4 ml-auto">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="text-black font-roboto text-xl relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-redGeneral after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center hover:text-redGeneral"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <div
            className={`nav-links bg-white transition-all duration-1000 absolute bg-white-20 md:min-h-fit min-h-[60vh] left-0  ${
              open ? "top-[95px]" : "top-[70%]"
            } md:w-auto w-full flex items-center justify-center px-5 ${
              open ? "block" : "hidden md:hidden"
            } z-50`}
          >
            <div className=" flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-center">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  onClick={handleMenu}
                  className="text-blackred font-roboto  text-xl block after:block after:content-[''] after:absolute after:h-[3px] after:bg-redGeneral after:w-48 after:scale-x-0 after:hover:scale-x-75 after:transition after:duration-300 after:origin-left hover:text-redGeneral"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 md:hidden">
            {" "}
            <button
              type="button"
              onClick={handleMenu}
              className="text-3xl cursor-pointer"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
