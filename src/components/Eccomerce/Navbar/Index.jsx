import { Link } from "react-router-dom";

import { Nav } from "./Styles";

import { BsCart3 } from "react-icons/bs";

const NavBar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/cart">
            <BsCart3 style={{ color: "#fff", fontSize: "30px" }} />
          </Link>
        </li>
      </ul>
    </Nav>
  );
};

export default NavBar;
