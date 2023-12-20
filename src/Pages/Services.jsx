import CardServices from "../components/Services/CardServices";

const Services = () => {
  return (
    <div className="w-full">
      <div className="flex ">
        <div className="flex flex-col items-center justify-center mx-auto">
          <p className="mt-2 font-roboto font-bold text-2xl ">
            Descubre Nuestros <span className="text-redGeneral">Servicios</span>
          </p>
          <hr className="border-2  border-black  w-full mt-2" />
        </div>
      </div>
      <div>
        <CardServices />
      </div>
    </div>
  );
};
export default Services;
