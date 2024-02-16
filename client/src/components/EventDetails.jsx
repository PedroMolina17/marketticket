import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import SeatList from "./SeatList";

const EventDetails = () => {
  const { id } = useParams();
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/events/api/v1/event/${id}`
        );
        setEventDetails(response.data);
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchEventDetails();
  }, [id]);
  return (
    <div className="flex  max-md:flex-col  ">
      <div className="flex flex-col justify-center items-center w-full ">
        {eventDetails ? (
          <div className="flex flex-col items-center gap-9 my-8 text-3xl ">
            <div className="flex items-center justify-between px-8 w-full ">
              <Link to={"../event"}>
                <IoArrowBack></IoArrowBack>
              </Link>
              <div>
                <h2>{eventDetails.event_name}</h2>
              </div>
            </div>
            <img
              className=" rounded-2xl"
              src={eventDetails.event_image}
              alt={eventDetails.eventDetails}
              width={800}
              height={800}
            />
            <p>Hora: {new Date(eventDetails.event_date).toLocaleString()}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="flex w-full">
        {eventDetails && <SeatList eventId={eventDetails.id} />}
      </div>
    </div>
  );
};

export default EventDetails;
