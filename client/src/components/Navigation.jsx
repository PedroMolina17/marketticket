import { Link } from "react-router-dom";
import { FaStar, FaSearch } from "react-icons/fa";
import { FaTicket, FaCircleUser } from "react-icons/fa6";
import { FaUser, FaKey } from "react-icons/fa";
import PropTypes from "prop-types";
const Navigation = ({ isUserOpen, toggleUserMenu }) => {
  return (
    <>
      <div className=" absolute flex justify-between bg-[#ffffff] mx-8 px-8 py-4 max-md:hidden top-6 left-0 right-0 text-[#df5c61] rounded-xl">
        <Link to="/" className="text-2xl flex  items-center">
          Cine
          <p className="ml-2 text-4xl">One</p>
        </Link>
        <div>
          <div className="flex gap-4  mx-4 text-lg font-semibold rounded-md text-[#df6064] items-center flex-wrap justify-center">
            <div className="flex items-center border border-gray-300 rounded-lg px-2 focus-within:border-[#df5c61] min-w-10">
              <input
                placeholder="Buscar Pelicula"
                className="bg-white py-1 px-4 outline-none w-full"
              />
              <FaSearch />
            </div>
            <Link to="/" className="flex items-center gap-2">
              <FaStar />
              Favoritos
            </Link>
            <Link to="/movie" className="flex items-center gap-2">
              <FaTicket />
              Ingresos
            </Link>
            <button
              onClick={toggleUserMenu}
              className="flex items-center bg-[#df5c61] px-4 py-2 gap-2 text-white rounded-lg"
            >
              <FaCircleUser /> Usuario
            </button>
          </div>
        </div>{" "}
        {isUserOpen && (
          <div className="bg-white absolute top-full right-14 p-2 rounded-br-md rounded-bl-md w-80 flex flex-col gap-3 items-center">
            <div className="flex flex-col gap-1">
              <label className="flex flex-col items-center">
                Usuario
                <div className="flex border items-center border-gray-300 rounded-md focus-within:border-red-500 px-2 py-1 gap-2">
                  <FaUser />
                  <input className="outline-none" placeholder="Usuario"></input>
                </div>
              </label>
            </div>
            <div className="flex flex-col gap-1 ">
              <label className="flex flex-col items-center">
                Password
                <div className="flex border items-center border-gray-300 rounded-md focus-within:border-red-500 px-2 py-1 gap-2">
                  <FaKey />
                  <input
                    className="outline-none"
                    type="password"
                    placeholder="*********"
                  ></input>
                </div>
              </label>
            </div>{" "}
            <button className="bg-red-400 rounded-md p-2 w-40 text-white font-bold">
              Entrar
            </button>
            <Link to="/register" className="underline">
              Registrar
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
Navigation.propTypes = {
  isUserOpen: PropTypes.bool.isRequired,
  toggleUserMenu: PropTypes.func.isRequired,
};
export default Navigation;
