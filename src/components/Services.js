import Card from "./Card";

function Services() {
  return (
    <div className="container services">
      <h2 className="main-title text-center">SERVICES</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-2">
              <Card
                className="same-size-card"
                title="Sablon"
                img="card1.png"
                text="Broneo Grafisindo melayani jasa sablon dan pembuatan Kaos berbahan Cotton Combed"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                className="same-size-card"
                title="Percetakan"
                img="card2.png"
                text="Broneo Grafisindo melayani jasa Percetakan Poster, Brosur, Id Card, Nota, dan lain-lain"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                className="same-size-card"
                title="Banner"
                img="img1.png"
                text="Cetak Banner & Standing Banner dengan ukuran yang diperlukan"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
