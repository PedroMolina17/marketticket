import { Link } from "react-router-dom";
import { FaStar, FaSearch } from "react-icons/fa";
import { FaTicket, FaCircleUser } from "react-icons/fa6";
import { CiVideoOn, CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import axios from "axios";
import Categories from "./Categories";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/events/api/v1/movie/"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div>
        <div
          className=" relative flex items-center justify-center  rounded-br-3xl rounded-bl-3xl w-full"
          style={{
            backgroundImage:
              "url('https://www.leawo.com/blog/wp-content/uploads/2009/12/avatar1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: 600,
          }}
        >
          <div className=" absolute flex justify-between bg-[#ffffff] mx-8 px-8 py-4 max-md:hidden top-6 left-0 right-0 text-[#df5c61] rounded-xl">
            <Link to="/" className="text-2xl flex  items-center">
              Cine
              <p className="ml-2 text-4xl">One</p>
            </Link>

            <div>
              <div className="flex gap-4  mx-4 text-lg font-semibold rounded-md text-[#df6064] items-center">
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
                <Link to="/movie" className="flex items-center gap-2">
                  <FaTicket />
                  Ingresos
                </Link>
                <Link
                  to="/movie"
                  className="flex items-center bg-[#df5c61] px-4 py-2 gap-2 text-white rounded-lg"
                >
                  <FaCircleUser /> Usuario
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-3 text-white">
            <div className="flex flex-col justify-center items-center gap-3">
              <div className="flex flex-col items-center font-bold">
                <p>Avatar : El camino </p>
                <p>Lanzamiento 15 de Febrero</p>
              </div>

              <div className="flex justify-between items-center gap-6 text-xl font-bold">
                <Link className="flex items-center gap-1">
                  <CiVideoOn style={{ strokeWidth: 2 }} />
                  Trailer
                </Link>
                <Link className="bg-white px-6 py-2 rounded-lg text-[#df5c61] text-lg font-bold">
                  Realizar PreCompra
                </Link>
                <Link className="flex items-center gap-1">
                  <CiHeart style={{ strokeWidth: 2 }} />
                  Trailer
                </Link>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col w-full py-4 px-7">
          <p className="text-xl font-bold my-2 max-md:text-center text-[#292828]">
            Mas Vistos
          </p>
          {data ? (
            <div className="flex w-full">
              <ul className=" flex gap-8 flex-wrap items-center justify-center">
                {data.map((movie) => (
                  <li key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>
                      <img
                        className=" rounded-2xl"
                        src={movie.image}
                        alt="movie Image"
                        width={200}
                        height={200}
                      />
                    </Link>
                  </li>
                ))}
              </ul>{" "}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <Categories />
      </div>
    </>
  );
};

export default Home;
