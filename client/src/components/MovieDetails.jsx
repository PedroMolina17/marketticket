import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/events/api/v1/movie/${id}`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);
  return (
    <div className="flex  max-md:flex-col">
      <div className="flex flex-col justify-center items-center w-full ">
        {movieDetails ? (
          <div className="flex flex-col items-center gap-9 my-8 text-3xl ">
            <div className="flex items-center justify-between px-8 w-full ">
              <Link to={"../movie"}>
                <IoArrowBack></IoArrowBack>
              </Link>
              <div>
                <h2>{movieDetails.title}</h2>
              </div>
            </div>
            <img
              className=" rounded-2xl"
              src={movieDetails.image}
              alt={movieDetails.title}
              width={800}
              height={800}
            />
            <p>Hora: {new Date(movieDetails.relase_date).toLocaleString()}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
