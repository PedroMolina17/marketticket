import { Link } from "react-router-dom";
import { FaStar, FaSearch } from "react-icons/fa";
import { FaTicket, FaCircleUser, FaComment } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
const MovieDetails = () => {
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [data, setData] = useState();
  const { id } = useParams();
  const [allMovies, setAllMovies] = useState(null);
  const [rating, setRating] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/events/api/v1/movie/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchAllMovies = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/events/api/v1/movie/"
        );
        setAllMovies(response.data);
      } catch (error) {
        console.error("Error fetching all movies:", error);
      }
    };
    const fetchRating = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/events/api/v1/review/?movie=${id}`
        );
        setRating(response.data);
      } catch (error) {
        console.error("Error fetching rating movies:", error);
      }
    };

    fetchRating();
    fetchAllMovies();
    fetchData();
  }, [id]);

  return (
    <>
      <div>
        <div
          className=" relative flex items-center justify-center  rounded-br-3xl rounded-bl-3xl w-full"
          style={{
            backgroundImage: data ? `url(${data.image_portada})` : "none",
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
            <div className="flex flex-col justify-center items-center gap-3 font-bold">
              <div className="flex flex-col items-center">
                <p>{data ? data.title : "Sin Nombre"}</p>
                <p>Lanzamiento 15 de Febrero</p>
              </div>

              <div className="flex justify-between items-center gap-6 text-xl">
                <Link className="flex items-center gap-1 bg-white px-6 py-2 rounded-lg text-[#df5c61]">
                  <FaStar />
                  {rating ? (
                    <p className="text-red-500">
                      {rating.length > 0
                        ? rating.reduce((sum, item) => sum + item.rating, 0) /
                          rating.length
                        : "No ratings available"}
                    </p>
                  ) : (
                    "No ratings available"
                  )}
                </Link>
                <Link
                  className="bg-white px-6 py-2 rounded-lg text-[#df5c61] text-lg font-bold flex justify-center items-center gap-2"
                  onClick={() => setCommentsOpen(!commentsOpen)}
                >
                  <FaComment />
                  Ver comentarios
                </Link>
                <Link className="bg-white px-6 py-2 rounded-lg text-[#df5c61] flex items-center gap-1">
                  <CiHeart />
                  Trailer
                </Link>
              </div>
            </div>
          </div>
        </div>{" "}
        <Comments commentsOpen={commentsOpen} movieId={id} />
        <div className="flex flex-col w-full py-4 px-7">
          <p className="text-xl font-bold my-2 max-md:text-center text-[#292828]">
            Mas Vistos
          </p>
          {allMovies ? (
            <div className="flex w-full">
              <ul className=" flex gap-8 flex-wrap items-center justify-center">
                {allMovies
                  .filter((movie) => movie.id !== Number(id))
                  .map((movie) => (
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
      </div>{" "}
    </>
  );
};

export default MovieDetails;
