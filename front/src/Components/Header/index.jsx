import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <span className="logo-1">K</span>
          <span className="logo-2">C</span>
          <span className="logo-3">R</span>
        </Link>
      </div>

      {/* Busca*/}

      <div className="search-bar">
        <input type="text" placeholder='Buscar "Apartamentos" ' />
        <div className="location">
          <button className="search-bnt">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
      </div>
    </header>
  );
}
