import ServicioCardMobile from "./ServicioCardMobile";
import { LinkToServices } from "./LinkToServices";
import { serviciosData } from "./Data/ServiciosData";
import useAos from "../../Hooks/UseAos";
const Servicios = () => {
  useAos();

  return (
    <div
      className="bg-white h-4/5 flex justify-center items-center "
      data-aos="fade-up"
    >
      <div className="mx-auto mb-10 w-full md:w-7/12 pr-4 rounded-2xl shadow-2xl mt-7">
        <h2 className="text-2xl font-bold text-center text-redGeneral font-roboto mb-2">
          Servicios
        </h2>

        {/* Contenido para dispositivos de escritorio */}
        <div className="hidden md:flex items-center justify-center px-2">
          {serviciosData.map(({ titulo, descripcion }, index) => (
            <div key={index} className="h-2/4 items-center mx-4">
              <div className="font-roboto font-bold text-2xl  text-center">
                <h3>{titulo}</h3>
              </div>
              <div className="w-48 items-center mx-auto">
                <p className="text-center">{descripcion}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" hidden md:flex items-center justify-center mx-auto my-3 md:visible">
          <LinkToServices />
        </div>

        {/* Contenido para dispositivos móviles */}
        <div className="md:hidden">
          <ServicioCardMobile />
          <div className="flex items-center justify-center mx-auto my-3">
            <LinkToServices />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
