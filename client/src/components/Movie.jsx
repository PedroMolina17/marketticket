import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Movie = () => {
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
    <div className="flex flex-col w-full m-2 ">
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
  );
};

export default Movie;
