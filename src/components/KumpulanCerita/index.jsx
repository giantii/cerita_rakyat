
import { Link } from "react-router-dom";
import "./style.css";

const KumpulanCerita = () => {
  return (
    <div className="KumpulanCerita">
      <h1>Komik Rawa Pening</h1>
      <br></br>
      <br></br>
      <div className="content">
      <div>
        <strong>Rawa Pening</strong>
          <Link to="RawaPening">
          <button class="hbtn hb-fill-middle">
          <img
          src={`https://i.imgur.com/qYE8yBM.jpeg`}
          alt="rawa pening"
        />
          </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default KumpulanCerita;
