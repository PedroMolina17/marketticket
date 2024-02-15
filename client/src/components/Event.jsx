import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Event = () => {
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
    <div>
      <div>
        {data ? (
          <ul>
            {data.map((movie) => (
              <li key={movie.id}>
                <div className="flex w-full flex-col justify-center items-center">
                  <Link to={`/event/${movie.id}`}>
                    Ver detalles
                    <p className="text-4xl"> {movie.title}</p>
                    Hora: <p>{Date(movie.price)}</p>
                    <img
                      className=" rounded-2xl"
                      src={movie.image}
                      alt="Event Image"
                      width={500}
                      height={500}
                    />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Event;
