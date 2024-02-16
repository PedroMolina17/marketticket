import { Link } from "react-router-dom";
import { FaStar, FaSearch } from "react-icons/fa";
import { FaTicket, FaCircleUser } from "react-icons/fa6";
import { CiVideoOn, CiHeart } from "react-icons/ci";

const Navigation = () => {
  return (
    <>
      <div
        className=" relative   flex  items-center justify-center  rounded-br-3xl rounded-bl-3xl"
        style={{
          backgroundImage:
            "url('https://www.leawo.com/blog/wp-content/uploads/2009/12/avatar1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "50% 20%",
          height: 550,
        }}
      >
        <div className=" absolute flex justify-between bg-[#ffffff] mx-8 px-8 py-4 max-md:hidden top-6 left-0 right-0 text-[#b91920] rounded-xl">
          <div className="flex ">
            <img
              className="h-8"
              src="https://socopur.com/wp-content/uploads/2020/01/grupo-socopur-2021.svg"
              alt="Logo"
            ></img>
          </div>

          <div>
            <div className="flex gap-4  mx-4 text-lg font-semibold rounded-md text-[#b91920] items-center">
              <div className="flex items-center border border-gray-300 rounded-lg py-1 px-6">
                <input
                  placeholder="Buscar Pelicula"
                  className="bg-gray-50    "
                />
                <FaSearch />
              </div>
              <Link to="/" className="flex items-center gap-2">
                <FaStar />
                Favoritos
              </Link>
              <Link to="/event" className="flex items-center gap-2">
                <FaTicket />
                Ingresos
              </Link>
              <Link
                to="/event"
                className="flex items-center bg-[#b91920] px-4 py-2 gap-2 text-white rounded-lg"
              >
                <FaCircleUser /> Usuario
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-3 text-white">
          <div className="flex flex-col justify-center items-center gap-3">
            <div className="flex flex-col items-center">
              <p>Avatar : El camino </p>
              <p>Lanzamiento 15 de Febrero</p>
            </div>

            <div className="flex justify-between items-center gap-6 text-xl">
              <Link className="flex items-center gap-1">
                <CiVideoOn />
                Trailer
              </Link>
              <Link className="bg-white px-6 py-2 rounded-lg text-[#b91920] text-lg font-bold">
                Realizar PreCompra
              </Link>
              <Link className="flex items-center gap-1">
                <CiHeart />
                Trailer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
