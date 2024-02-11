import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Event = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/events/api/v1/event/"
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
            {data.map((event) => (
              <li key={event.id}>
                <div className="flex w-full flex-col justify-center items-center">
                  <Link to={`/event/${event.id}`}>
                    Ver detalles
                    <p className="text-4xl"> {event.event_name}</p>
                    Hora: <p>{Date(event.event_date)}</p>
                    <img
                      className=" rounded-2xl"
                      src={event.event_image}
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
