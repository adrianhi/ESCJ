import "aos/dist/aos.css";
import { Slider } from "../components/Home/Slider";
import Servicios from "../components/Home/Servicios";
import Testimonios from "../components/Home/Testimonios";
import Ubicacion from "../components/Home/Ubicacion";
import PreguntasFrecuentes from "../components/Home/PreguntasFrecuentes";
import Footer from "../components/Global/Footer";
import { Bienvenidos } from "../components/Home/Bienvenidos";
const Home = () => {
  return (
    <div className="bg-backgroundColor ">
      <div className="bg-white w-full">
        <Slider />
      </div>
      <div>
        <Bienvenidos />
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
