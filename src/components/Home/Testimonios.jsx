import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Avatar from "@mui/material/Avatar";
import Stars from "../../assets/Images/Stars.png";
import { testimonioData } from "./Data/TestimonioData";
import useAos from "../../Hooks/UseAos";

const Testimonios = () => {
  useAos();

  return (
    <div data-aos="fade-up">
      <h2 className="text-2xl font-bold text-center  font-roboto my-4 underline">
        ¿Qué dicen nuestros <span className="text-redGeneral"> clientes</span>?
      </h2>

      <div className="flex flex-wrap justify-evenly items-center mx-auto">
        {testimonioData.map((testimonial, index) => (
          <Card
            key={index}
            className={`my-4 mx-2 w-full  md:w-1/3  xl:w-1/5  "hidden md:block"
            }`}
          >
            <CardActionArea>
              <Avatar
                src={testimonial.avatar}
                alt={testimonial.nombre}
                sx={{ width: 100, height: 100 }}
                className="mx-auto"
              />
              <CardContent>
                <div className="text-xl font-bold italic font-sans text-center">
                  {testimonial.nombre}
                </div>
                <div className="text-textColor font-normal text-base mt-2 text-center">
                  {testimonial.testimonio}
                </div>
              </CardContent>
              <div className="flex justify-end items-end pr-2 pb-2">
                <img src={Stars} alt="" className="w-auto h-auto" />
              </div>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonios;
