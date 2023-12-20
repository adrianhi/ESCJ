import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Avatar from "@mui/material/Avatar";
import Stars from "../../assets/Images/Stars.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Aos from "aos";
import avatarImage from "../../assets/Images/testPerson.png";

const Testimonios = () => {
  const testimonioData = [
    {
      avatar: avatarImage,
      nombre: "John Doe",
      testimonio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus lectus, pretium quis blandit quis, tempus nec purus. Sed egestas metus in nulla maximus pellentesque. Pellentesque non neque eros. Nam accumsan tincidunt arcu at vulputate. Praesent odio lacus, vulputate rutrum sem ac, elementum ornare nisl.",
    },
    {
      avatar: avatarImage,
      nombre: "Jane Doe",
      testimonio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus lectus, pretium quis blandit quis, tempus nec purus. Sed egestas metus in nulla maximus pellentesque. Pellentesque non neque eros. Nam accumsan tincidunt arcu at vulputate. Praesent odio lacus, vulputate rutrum sem ac, elementum ornare nisl.",
    },
    {
      avatar: avatarImage,
      nombre: "Bob Smith",
      testimonio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus lectus, pretium quis blandit quis, tempus nec purus. Sed egestas metus in nulla maximus pellentesque. Pellentesque non neque eros. Nam accumsan tincidunt arcu at vulputate. Praesent odio lacus, vulputate rutrum sem ac, elementum ornare nisl.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonioData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonioData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div data-aos="fade-up">
      <h2 className="text-2xl font-bold text-center  font-roboto my-4 underline">
        ¿Qué dicen nuestros <span className="text-redGeneral"> clientes</span>?
      </h2>
      <div className="flex justify-between my-4 md:hidden ">
        <FaArrowLeft
          onClick={handlePrev}
          className="cursor-pointer absolute left-0 top-25 transform -translate-y-1/2 text-4xl text-gray-500"
        />
        <FaArrowRight
          onClick={handleNext}
          className="cursor-pointer absolute right-0 top-25 transform -translate-y-1/2 text-4xl text-gray-500"
        />
      </div>

      <div className="flex flex-wrap justify-evenly items-center mx-auto">
        {testimonioData.map((testimonial, index) => (
          <Card
            key={index}
            className={`my-4 mx-2 w-full  md:w-1/3  xl:w-1/5 ${
              index === currentIndex ? "" : "hidden md:block"
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
