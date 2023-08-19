import React from "react";
import { Link } from "react-scroll";

function Navbar2() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="#">Borneo Grafisindo</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">Services</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Galeri</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar2;
