import useAos from "../../Hooks/UseAos";

export const Bienvenidos = () => {
  useAos();
  return (
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
        allanando el camino para que obtengas tu licencia de conducir de manera
        eficiente. Nuestros instructores, expertos y pacientes, te
        proporcionarán las habilidades esenciales para que conduzcas con
        confianza y seguridad en las carreteras. Descubre cómo en la Escuela de
        Choferes Joel, impulsamos tu futuro al volante de manera segura.
      </div>
    </div>
  );
};
