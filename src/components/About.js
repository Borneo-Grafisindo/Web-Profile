function About() {
  return (
    <>
      <div
        style={{ marginTop: "15rem", width: "100%", height: "10px" }}
        className="about-scroll"
      ></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="./img/logo.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
              Borneo Grafisindo merupakan perusahaan percetakan digital yang berbasis di Pontianak.
              Kami selalu berkomitmen untuk menghadirkan solusi percetakan inovatif dan selalu memberikan layanan yang berkualitas yang dapat memenuhi kebutuhan klien kami.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
