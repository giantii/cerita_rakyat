import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 800) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    if (screenWidth < 800) {
      setOpen(false);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEg48iyHg38PuXl2PSj3SyQf0qW264j4QP54nXq36zEflhwaCql3wbRYgchhhYwAj78SxAWWusJwIFfXJjHUbhJJ-f0lPhtQa_WCh8-3cLf1XwBESMnDZFt4AXwJy45f5tpkXMweQMS03QeTUFYPJHdU3g9UsqPaw77XqUYDb8Yf5npOQWfjZinmnXpL=s800"
              alt="brand"
            />
          </Link>
        </div>
        <div className="list-wrapper">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEgvZHAlR_knnQuTS3m7GhpIqJfe2yWhPahHCqfwdl6rsugV1KhJtg3rYpZC01muVj1wsa1MejOqeavCYfEoDIXI4TNjk04zjMu_Al8VHHJjcKsHG2wlW2eWJDZbeSzpJu1dSsbZvGoABCAom4LYbfjmuA1nZwhXGiCIE6h-dFfjtfvDABYdgwTKKA8C=s512"
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEi1iukSGckqFBAv5po0DsC7iArQ7gEaAaGEMondpoyAjGFtnh3VymERGglHhhZpEJw0f8NIkiEkqe9M3uOrbraUmiVSouRJGFEgKZ17aT6NgXar23GSLg7sEUlyzs0kRmFDE-IOXM3AEWADlGMMZDvDpaVmZG906iOOLSE3ZwJmD2PGFcn31c8IhOLM=s512"
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />

          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link
                to="/"
                onClick={handleClose}
                style={{ color: location.pathname === "/" && "#4071f4" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/KumpulanCerita"
                onClick={handleClose}
                style={{ color: location.pathname === "/KumpulanCerita" && "#4071f4" }}
              >
                Komik Rawa Pening
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleClose}
                style={{ color: location.pathname === "/about" && "#4071f4" }}
              >
                Penjelasan Cerita Rakyat & Cerpen
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
