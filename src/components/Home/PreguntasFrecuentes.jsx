import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PreguntasFrecuentesData } from "./Data/PreguntasFrecuentesData.js";
import useAos from "../../Hooks/UseAos.js";

const PreguntasFrecuentes = () => {
  useAos();

  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div className="container mx-auto my-8" data-aos="fade-up">
      <h2 className="font-roboto font-bold text-3xl mb-4">
        Preguntas Frecuentes
      </h2>
      {PreguntasFrecuentesData.map((pregunta, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
