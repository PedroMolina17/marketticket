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
    <div className="flex w-full">
      {" "}
      {data ? (
        <div>
          <ul className=" flex gap-8 flex-wrap justify-between">
            {data.map((movie) => (
              <li key={movie.id}>
                <Link to={`/event/${movie.id}`}>
                  <p className="text-2xl"> {movie.title}</p>
                  <p> Precio: {movie.price}</p>
                  <img
                    className=" rounded-2xl"
                    src={movie.image}
                    alt="Event Image"
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
      )}{" "}
    </div>
  );
};

export default Event;
