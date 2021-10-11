
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
          src={`https://blogger.googleusercontent.com/img/a/AVvXsEhPvWqD6Fng9RpfKVV_Bw0zzebfx_NzByH8CjFC4UgNNMQHY5UzA6wyZ3-mglvjfkRRpVPwgTWXqF9M-edxyPgnMoyqvjqR_Bun-0R9DEvVboxU5zdXaBjMqRZ4kpl5hhK8cE9bU9Hbf_OeNfN3BzraX0YFLo1Yn-Otlb4nV6IrvlshEE9zRQIIiVln=s150`}
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
