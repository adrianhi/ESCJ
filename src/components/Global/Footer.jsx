import Aos from "aos";
import { useEffect } from "react";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <footer className="bg-redGeneral text-white p-6" data-aos="fade-up">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="md:text-xl text-sm font-roboto font-bold">
            <FaEnvelope className="inline-block mr-2" />
            Email:{" "}
            <a href="mailto:escueladechoferes@gmail.com" className=  "md:text-xl text-sm text-white hover:underline">
              escueladechoferes@gmail.com
            </a>
          </p>
        </div>

        <div>
          <p className="md:text-base text-sm font-bold">Redes Sociales:</p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/escueladechoferesjoel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="md:text-4xl text-lg hover:text-redGeneral hover:bg-white  rounded-2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center font-roboto text-base font-bold">
        <p>Derechos Reservados &copy; 2023 Escuela de Choferes Joel</p>
      </div>
    </footer>
  );
};

export default Footer;
