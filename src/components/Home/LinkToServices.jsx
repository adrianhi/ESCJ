import { Link } from "react-router-dom"

export const LinkToServices = () => {


  return(   <Link
    to={`${`/services`}`}
    className="bg-transparent hover:bg-redGeneral  font-semibold hover:text-white py-2 px-4 border border-redGeneral hover:border-transparent rounded-3xl transition duration-300"
  >
    Conocer Más
  </Link>)
}