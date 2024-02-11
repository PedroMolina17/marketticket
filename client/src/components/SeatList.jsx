import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { MdEventSeat } from "react-icons/md";
import { Link } from "react-router-dom";
import { PiTelevisionSimple } from "react-icons/pi";

const SeatList = ({ eventId }) => {
  const [seats, setSeats] = useState([]);
  const [seatSelected, setSeatSelected] = useState("No seleccionado");
  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/events/api/v1/seat`
        );
        setSeats(response.data);
      } catch (error) {
        console.error("Error fetching seats:", error);
      }
    };

    fetchSeats();
  }, [eventId]);

  const handleSelectedSeat = (a, b) => {
    setSeatSelected(a + b);
  };

  return (
    <div className="flex flex-col items-center justify-start w-full my-5 text-4xl gap-7">
      <h3>Sillas</h3>
      <div className="grid grid-cols-12 text-4xl gap-4 text-gray-500">
        {seats.map((seat) => (
          <Link
            key={seat.id}
            className={`grid col-span-1  hover:text-blue-500 ${
              seat.status === 1 ? "text-red-500" : ""
            }${seatSelected === seat.row + seat.number ? "text-blue-500" : ""}`}
            onClick={() =>
              seat.status !== 1 && handleSelectedSeat(seat.row, seat.number)
            }
            style={{ pointerEvents: seat.status === 1 ? "none" : "auto" }}
            disabled={seat.status === 1}
          >
            <MdEventSeat> </MdEventSeat>
          </Link>
        ))}
      </div>
      <PiTelevisionSimple className="text-6xl"></PiTelevisionSimple>
      <div className="text-xl">Asiento: {seatSelected}</div>
      <button
        className={`p-4 bg-red-500 text-xl rounded-xl hover:bg-red-400 ${
          seatSelected === "No seleccionado" ? "bg-red-100" : ""
        }`}
        style={{
          pointerEvents: seatSelected === "No seleccionado" ? "none" : "auto",
        }}
      >
        Comprar
      </button>
    </div>
  );
};

SeatList.propTypes = {
  eventId: PropTypes.any,
};
export default SeatList;
