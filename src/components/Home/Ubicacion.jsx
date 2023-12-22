import { ubicacionesData } from "./Data/UbicacionesData";
import useAos from "../../Hooks/UseAos";
const handleComoLlegar = (ubicacionSrc) => {
  window.open(ubicacionSrc, "_blank");
};

const handleLlamar = (telefono) => {
  window.location.href = `tel:${telefono}`;
};

const Ubicacion = () => {
  useAos();

  return (
    <div className="container mx-auto my-8" data-aos="fade-up">
      <h2 className="font-roboto text-center font-bold text-3xl mb-4">
        ¿Dónde estamos ubicados?
      </h2>
      <div className="flex flex-wrap justify-center">
        {ubicacionesData.map((ubicacion, index) => (
          <div key={index} className="max-w-sm mx-4 mb-8" data-aos="fade-up">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2">{ubicacion.nombre}</h3>
              <div className="mb-4">
                <iframe
                  title={ubicacion.nombre}
                  src={ubicacion.ubicacionSrc}
                  className="w-full h-64 border-2 border-gray-300 rounded-md"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="text-gray-600 text-base mb-2">
                <span className="text-black font-bold text-lg">
                  {" "}
                  Teléfono:{" "}
                </span>
                {ubicacion.telefono}
              </div>
              <div className="text-gray-600 text-base">
                <span className="text-black font-bold text-lg"> Horarios:</span>{" "}
                Lunes-viernes: 8:00 am - 6:00 pm | Sábados: 8:00 am - 5:00 pm
              </div>

              <div className="mt-4 flex flex-col items-center">
                <button
                  className="w-80 bg-redGeneral text-white px-4 py-2 rounded-full mb-2 hover:bg-red-500"
                  onClick={() => handleComoLlegar(ubicacion.ubicacionSrc)}
                >
                  ¿Cómo llegar?
                </button>
                <button
                  className="w-72 bg-transparent hover:bg-redGeneral text-redGeneral font-semibold hover:text-white py-2 px-4 border border-redGeneral hover:border-transparent rounded-3xl transition duration-300"
                  onClick={() => handleLlamar(ubicacion.telefono)}
                >
                  Llamar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ubicacion;
