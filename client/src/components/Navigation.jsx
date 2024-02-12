import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex bg-red-500 py-6 max-md:hidden">
        <ul className="flex gap-4  mx-4 text-lg font-semibold text-white ">
          <Link to="/">Home</Link>
          <Link to="/event">Evento</Link>
          <Link to="/event">Venta Corporativa</Link>
        </ul>
      </div>
      <div className="bg-red-500 text-white text-3xl p-2 md:hidden">
        <RxHamburgerMenu onClick={() => setMenuOpen(true)} />
        {menuOpen && (
          <div>
            <IoMdClose onClick={() => setMenuOpen(false)}></IoMdClose>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
