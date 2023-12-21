import Aos from "aos";
import "aos/dist/aos.css";
import { Slider } from "../components/Home/Slider";
import { useEffect } from "react";
import Servicios from "../components/Home/Servicios";
import Testimonios from "../components/Home/Testimonios";
import Ubicacion from "../components/Home/Ubicacion";
import PreguntasFrecuentes from "../components/Home/PreguntasFrecuentes";
import Footer from "../components/Global/Footer";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="bg-backgroundColor ">
      <div className="bg-white w-full">
        <Slider />
      </div>
      <div
        data-aos="fade-up"
        className="bg-backgroundColor h-fit flex items-center justify-center"
      >
        <div className="max-w-xl p-5 text-center font-roboto text-xl">
          <span className="text-redGeneral">
            ¡Bienvenido a una experiencia de aprendizaje que marca la diferencia
            en tu viaje hacia la excelencia en la conducción!
          </span>{" "}
          Te ofrecemos lecciones accesibles, convenientes y de alta calidad,
          allanando el camino para que obtengas tu licencia de conducir de
          manera eficiente. Nuestros instructores, expertos y pacientes, te
          proporcionarán las habilidades esenciales para que conduzcas con
          confianza y seguridad en las carreteras. Descubre cómo en la Escuela
          de Choferes Joel, impulsamos tu futuro al volante de manera segura.
        </div>
      </div>
      <div>
        <Servicios />
      </div>
      <div>
        <Testimonios />
      </div>
      <div className="w-full">
        <Ubicacion />
      </div>
      <div>
        <PreguntasFrecuentes />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
