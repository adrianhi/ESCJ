import Aos from "aos";
import { CardInfo } from "./CardInfo";
import { useEffect } from "react";

import CardActionArea from "@mui/material/CardActionArea";
const CardServices = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3	">
      {CardInfo.map((info, key) => (
        <div
          key={key}
          className="flex  justify-center items-center my-5 mx-auto"
          data-aos="flip-left"
        >
          <CardActionArea>
            <div className="my-5 ml-11 w-3/4 p-4 rounded-lg  ">
              <div className="font-roboto text-2xl">{info.titulo}</div>
              <div className="flex mt-2">
                <div className="my-auto mx-5">
                  <img
                    className="h-24 w-48"
                    src={info.image}
                    alt="Icono Referente al tiutlo"
                  />
                </div>
                <div className="text-lg ml-12 w-auto ">{info.info}</div>
              </div>
            </div>
          </CardActionArea>
        </div>
      ))}
    </div>
  );
};

export default CardServices;
