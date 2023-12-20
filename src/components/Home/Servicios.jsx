import { useEffect } from "react";
import Aos from "aos";
import ServicioCardMobile from "./ServicioCardMobile";
import { LinkToServices } from "./LinkToServices";
const Servicios = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const serviciosData = [
    {
      titulo: "Lecciones de manejo",
      descripcion:
        "Ofrecemos lecciones adaptadas a las necesidades y habilidades individuales de cada estudiante.",
    },
    {
      titulo: "Simulador de Conducción",
      descripcion:
        "Usamos simuladores de conducción para proporcionar experiencias prácticas en un entorno controlado.",
    },
    {
      titulo: "Asesoramiento y Consulta",
      descripcion:
        "Proporcionamos asesoramiento personalizado sobre licencias y normativas de tráfico.",
    },
  ];

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
          {serviciosData.map((servicio, index) => (
            <ServicioCardMobile key={index} {...servicio} />
          ))}
          <div className="flex items-center justify-center mx-auto my-3">
            <LinkToServices />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
