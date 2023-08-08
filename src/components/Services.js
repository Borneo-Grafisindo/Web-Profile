import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center mb-5">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-1 mt-5">
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <Card title="Design" img="card1.png" text="Morbi eget neque risus. Duis erat quam, porta quis enim id, venenatis blandit nunc. " />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="Design" img="card1.png" text="Morbi eget neque risus. Duis erat quam, porta quis enim id, venenatis blandit nunc. " />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="Design" img="card1.png" text="Morbi eget neque risus. Duis erat quam, porta quis enim id, venenatis blandit nunc. " />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
