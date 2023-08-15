function Header() {
  return (
    <header>
      <video src="./img/video.mp4" loop autoPlay muted></video>
      <h1>Borneo Grafisindo</h1>
      <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
          Pemesanan
        </button>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
