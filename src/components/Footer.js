import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">Borneo Grafisindo</h1>
                <p className="footer-text">
                Jl. Wono Baru No.B3, Kota Baru, Kec. Pontianak Sel., Kota Pontianak, Kalimantan Barat 78115
                </p>
                <p className="footer-text"> 08.30 - 17.00</p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={1000} > Services </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000}>About Us  </Link>
                  </li>
                  <li>
                  <Link to="contact" spy={true} smooth={true} duration={1000}> Galeri  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Galeri</p>
                <ul>
                  <li>
                    <Link to="#" >bografsablonkaossatuan@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#" >081349634000 (ADMIN 1) </Link>
                  </li>
                  <li>
                    <Link to="#" >082153491771 (ADMIN 2)</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/BorneoGrafisindo" > Facebook</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://instagram.com/borneo_grafisindo" > Instagram</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="mailto:bografsablonkaossatuan@gmail.com?subject=Percetakan"> Email</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
