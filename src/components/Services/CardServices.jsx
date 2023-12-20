import { CardInfo } from "./CardInfo";

const CardServices = () => {
  return (
    <div className="grid grid-cols-2   ">
      {CardInfo.map((info) => (
        <div
          key={info.titulo}
          className="flex justify-center items-center mx-auto"
        >
          <div className="my-5 bg-white w-3/4 p-4  ">
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
        </div>
      ))}
    </div>
  );
};

export default CardServices;
