import { Link } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Cerita Rakyat</p>
          <p>Indonesia</p>
        </h1>
        <Link to="kumpulancerita" >
          <button class="hbtn hb-fill-middle">Kumpulan Cerita Rakyat</button>
        </Link>
        <br></br>
        <Link to="about" >
          <button class="hbtn hb-fill-middle">Pengertian <br/> Cerita Rakyat & Cerpen</button>
        </Link>
        <br></br>
        <Link to="LembarSiswa">
          <button class="hbtn hb-fill-middle">Lembar Siswa</button>
        </Link>
      </div>
      <div className="person">
      
      </div>
      
    </div>
  );
};

export default Home;
