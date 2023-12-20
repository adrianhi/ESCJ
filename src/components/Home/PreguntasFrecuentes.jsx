import Aos from "aos";
import { useState, useEffect } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PreguntasFrecuentes = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const preguntasData = [
    {
      pregunta: "¿Ofrecen curso en carro mecánico?",
      respuesta:
        "¡Absolutamente! No solo ofrecemos cursos en carros mecánicos, sino que también te brindamos la experiencia única de aprender a manejar con destreza y precisión. ¿Estás listo para dominar las carreteras con estilo y habilidad? ¡Inscríbete ahora y da el primer paso hacia tu viaje en un carro mecánico!",
    },
    {
      pregunta: "¿Recogen al estudiante en la casa?",
      respuesta:
        "Con nuestros paquetes especiales, un instructor puede recogerte en tu domicilio, garantizando la máxima comodidad en tu experiencia de aprendizaje. ¡Haz que la conducción sea aún más conveniente!",
    },
    {
      pregunta: "¿Aceptan menores de edad?",
      respuesta:
        "¡Claro! A partir de los 16 años son bienvenidos a unirse a nosotros. Si eres menor, simplemente contacta a nuestro equipo administrativo para conocer los detalles del proceso específico para jóvenes estudiantes. ¡Estamos aquí para hacer que tu experiencia de aprendizaje sea excepcional desde el principio!",
    },
    {
      pregunta: "¿El programa incluye la licencia?",
      respuesta:
        "No, los costos asociados con el carnet de aprendizaje y la licencia de conducir no están incluidos en nuestros servicio. Estos gastos deben ser pagados directamente a las autoridades correspondientes, ya sea en línea o a través del Banco de Reservas.",
    },

    {
      pregunta: "¿Qué métodos de pago aceptan?",
      respuesta:
        "Ofrecemos opciones de pago flexibles para adaptarnos a tus necesidades. Aceptamos tanto transferencias como efectivo, brindándote conveniencia y flexibilidad en cada paso de tu aprendizaje",
    },
  ];
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };
 
  return (
    <div className="container mx-auto my-8" data-aos="fade-up">
      <h2 className="font-roboto font-bold text-3xl mb-4">
        Preguntas Frecuentes
      </h2>
      {preguntasData.map((pregunta, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <h3 className="font-bold text-xl">{pregunta.pregunta}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <div className="text-gray-600 text-base w-full">
              {pregunta.respuesta}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default PreguntasFrecuentes;
