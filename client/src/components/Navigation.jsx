import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="flex bg-red-500 py-6">
      <ul className="flex gap-4  mx-4 text-lg font-semibold text-white">
        <Link to="/">Home</Link>
        <Link to="/event">Evento</Link>
        <Link to="/event">Venta Corporativa</Link>
      </ul>
    </div>
  );
};

export default Navigation;
