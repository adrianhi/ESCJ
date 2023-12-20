import Aos from "aos";
import { useEffect } from "react";

const handleComoLlegar = (ubicacionSrc) => {
  window.open(ubicacionSrc, "_blank");
};

const handleLlamar = (telefono) => {
  window.location.href = `tel:${telefono}`;
};
const ubicacionesData = [
  {
    nombre: "Calle 12, Ensanche Isabelita",
    ubicacionSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.1803433158734!2d-69.84653377065435!3d18.47548855890958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf87a62aaa1277%3A0xeb9c25697b63bf35!2sESCUELA%20DE%20CHOFERES%20JOEL%20ENS.%20ISABELITA!5e0!3m2!1ses!2sdo!4v1701389438496!5m2!1ses!2sdo",
    telefono: "809-xxx-xxx",
  },
  {
    nombre: "Marginal de las Americas",
    ubicacionSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.52244756302892!2d-69.82564284817815!3d18.467383593365522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8790c009ba8b%3A0xc7dc51f0aae13642!2sEscuela%20De%20Choferes%20Joel%20Marginal%20de%20las%20Americas!5e0!3m2!1ses!2sdo!4v1701389961988!5m2!1ses!2sdo",
    telefono: "809-xxx-xxx",
  },
  {
    nombre: "Ave. San Vicente de Paul",
    ubicacionSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30269.066022425308!2d-69.89111423492433!3d18.500264319493226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf87ebd73d665f%3A0xb03c188b35a5100a!2sEscuela%20de%20Choferes%20Joel!5e0!3m2!1ses!2sdo!4v1701393517752!5m2!1ses!2sdo",
    telefono: "809-xxx-xxx",
  },
];
const Ubicacion = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

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
                <span className="text-black font-bold text-lg"> Teléfono: </span>
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
