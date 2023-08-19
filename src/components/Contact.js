function Contact() {
  return (
    <div className="container contact">
      <h2 className="main-title text-center">Galeri</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap", // Menggunakan flexWrap untuk mengatur wrap pada baris baru
          gap: "5px", // Jarak antara card
          // padding: "px", // Padding keseluruhan
        }}
      >
        <div>
          <div
            className="card"
            style={{
              width: "25em",
              display: "flex",
              margin: "30px 10px",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="/img/CetakA3.jpg"
                className="card-img-top"
                alt="..."
                style={{
                  width: "auto",
                  height: "300px",
                  borderRadius: "10px 20px 10px 20px",
                  margin: "10px 10px 10px 10px",
                }}
              />
            </div>

            <div className="card-body" style={{ margin: "10px" }}>
              <h5 className="card-title" style={{ margin: "0" }}>
                Melayani Cetak Kertas Ukuran A3+
              </h5>
              <p className="card-text" style={{ margin: "0px" }}>
                Kami juga melayani cetak kertas ukuran A3+ yang bisa
                diaplikasikan ke banyak media cetak seperti :
              </p>
              <p className="fst-normal" style={{ margin: "0px 0px 0px 0px" }}>
                Poster, Brosur,Leaflet, Flyer, Majalah, Buku, Kartu Nama, serta
                berbagai jenis cetakan lainnya.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card"
            style={{
              width: "25em",
              display: "flex",
              margin: "30px 10px",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="/img/CetakKaos.jpg"
                className="card-img-top"
                alt="..."
                style={{
                  width: "auto",
                  height: "300px",
                  borderRadius: "10px 20px 10px 20px",
                  margin: "10px 10px 10px 10px",
                }}
              />
            </div>

            <div className="card-body" style={{ margin: "10px" }}>
              <h5 className="card-title" style={{ margin: "0" }}>
                Cetak Sablon + Kaos
              </h5>
              <p className="card-text" style={{ margin: "0px" }}>
                Melayani Jasa Sablon + Kaos terkait Warna Baju yang ready, Warna
                Hitam dan Putih, Selain Warna Hitam dan Putih Ha
              </p>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card"
            style={{
              width: "25em",
              display: "flex",
              margin: "30px 10px",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="/img/CetakMiniBanner.jpg"
                className="card-img-top"
                alt="..."
                style={{
                  width: "auto",
                  height: "300px",
                  borderRadius: "10px 20px 10px 20px",
                  margin: "10px 10px 10px 10px",
                }}
              />
            </div>

            <div className="card-body" style={{ margin: "10px" }}>
              <h5 className="card-title" style={{ margin: "0" }}>
                Mini Banner & Standing Banner
              </h5>
              <p className="card-text" style={{ margin: "0px" }}>
                Melayani Cetak Mini Banner & Standing Banner. Terkait ukuran
                bisa disesuaikan dengan kebutuhan yang diperlukan.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card"
            style={{
              width: "25em",
              display: "flex",
              margin: "30px 10px",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="/img/CetakSpanduk.jpg"
                className="card-img-top"
                alt="..."
                style={{
                  width: "170px",
                  height: "300px",
                  borderRadius: "10px 20px 10px 20px",
                  margin: "10px 10px 10px 10px",
                }}
              />
            </div>

            <div className="card-body" style={{ margin: "10px" }}>
              <h5 className="card-title" style={{ margin: "0" }}>
                Nota/Kwitansi & Spanduk/Banner
              </h5>
              {/* <p className="card-text" style={{ margin: "0px" }}>
                Cetak Nota/Kwitansi bisa menggunakan tinta 2 warna dan 3 warna.
                terkait banyaknya yang ingin dicetak bisa disesuaikan dengan
                pesanan.
              </p> */}
              <p className="fst-normal" style={{ margin: "0px 0px 0px 0px" }}>
                Menawarkan pilihan jenis bahan dan bentuk cetak yang disesuaikan
                dengan pesanan untuk spanduk/banner. Untuk nota/kwitansi,
                tersedia tinta 2 atau 3 warna sesuai kebutuhan Anda.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card"
            style={{
              width: "25em",
              display: "flex",
              margin: "30px 10px",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="/img/CetakStiker.jpg"
                className="card-img-top"
                alt="..."
                style={{
                  width: "auto",
                  height: "300px",
                  borderRadius: "10px 20px 10px 20px",
                  margin: "10px 10px 10px 10px",
                }}
              />
            </div>

            <div className="card-body" style={{ margin: "10px" }}>
              <h5 className="card-title" style={{ margin: "0" }}>
                Stiker A3
              </h5>
              <p className="card-text" style={{ margin: "0px" }}>
                Menerima Cetak Stiker yang bisa disesuaikan dengan bahan dipesan
                baik itu :
              </p>
              <p className="fst-normal" style={{ margin: "0px 0px 0px 0px" }}>
                Untuk Lebih Lanjut bisa dilakukan pemesanan sesuai request yang
                diinginkan.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card"
            style={{
              width: "25em",
              display: "flex",
              margin: "30px 10px",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="/img/CetakStand.jpg"
                className="card-img-top"
                alt="..."
                style={{
                  width: "auto",
                  height: "300px",
                  borderRadius: "10px 20px 10px 20px",
                  margin: "10px 10px 10px 10px",
                }}
              />
            </div>

            <div className="card-body" style={{ margin: "10px" }}>
              <h5 className="card-title" style={{ margin: "0" }}>
                Event Desk display
              </h5>
              <p className="card-text" style={{ margin: "0px" }}>
                Melayani desain untuk Event Desk Display. Sudah termasuk
                pemasangan, Desain, dan Laminasi pada Event Desk Display.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card"
            style={{
              width: "25em",
              display: "flex",
              margin: "30px 10px",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="/img/CetakStamp.jpg"
                className="card-img-top"
                alt="..."
                style={{
                  width: "auto",
                  height: "300px",
                  borderRadius: "10px 20px 10px 20px",
                  margin: "10px 10px 10px 10px",
                }}
              />
            </div>

            <div className="card-body" style={{ margin: "10px" }}>
              <h5 className="card-title" style={{ margin: "0" }}>
                Cetak Stempel Flash
              </h5>
              <p className="card-text" style={{ margin: "0px" }}>
                Kami juga melayani cetak Stempel + otomatis tanpa bantalan
                dengan berbagai jenis warna yang bisa dipilih. Serta bisa
                melakukan isi ulang tinta berdasarkan pesanan
              </p>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card"
            style={{
              width: "25em",
              display: "flex",
              margin: "30px 10px",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="/img/CetakPin.jpg"
                className="card-img-top"
                alt="..."
                style={{
                  width: "auto",
                  height: "300px",
                  borderRadius: "10px 20px 10px 20px",
                  margin: "10px 10px 10px 10px",
                }}
              />
            </div>

            <div className="card-body" style={{ margin: "10px" }}>
              <h5 className="card-title" style={{ margin: "0" }}>
                Gantungan Kunci, Pin, dan ID Card
              </h5>
              <p className="card-text" style={{ margin: "0px" }}>
                Melayani cetak Pin, Gantungan Kunci, dan ID Card. Terkait
                request bisa disesuaikan dengan pesanan.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card"
            style={{
              width: "25em",
              display: "flex",
              margin: "30px 10px",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="/img/CetakMug.jpg"
                className="card-img-top"
                alt="..."
                style={{
                  width: "auto",
                  height: "300px",
                  borderRadius: "10px 20px 10px 20px",
                  margin: "10px 10px 10px 10px",
                }}
              />
            </div>

            <div className="card-body" style={{ margin: "10px" }}>
              <h5 className="card-title" style={{ margin: "0" }}>
                Desain Mug Gelas
              </h5>
              <p className="card-text" style={{ margin: "0px" }}>
                Melayani Cetak Mini Banner & Standing Banner. Terkait ukuran
                bisa disesuaikan dengan kebutuhan yang diperlukan.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card"
            style={{
              width: "25em",
              display: "flex",
              margin: "30px 10px",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="/img/CetakID.jpg"
                className="card-img-top"
                alt="..."
                style={{
                  width: "auto",
                  height: "300px",
                  borderRadius: "10px 20px 10px 20px",
                  margin: "10px 10px 10px 10px",
                }}
              />
            </div>

            <div className="card-body" style={{ margin: "10px" }}>
              <h5 className="card-title" style={{ margin: "0" }}>
                ID Card
              </h5>
              <p className="card-text" style={{ margin: "0px" }}>
                Kami juga melayani percetakan ID Card sesuai dengan ukuran yang
                dipesan.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card"
            style={{
              width: "25em",
              display: "flex",
              margin: "30px 10px",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="/img/CetakDoorFrame.jpg"
                className="card-img-top"
                alt="..."
                style={{
                  width: "auto",
                  height: "300px",
                  borderRadius: "10px 20px 10px 20px",
                  margin: "10px 10px 10px 10px",
                }}
              />
            </div>

            <div className="card-body" style={{ margin: "10px" }}>
              <h5 className="card-title" style={{ margin: "0" }}>
                Door Frame Banner & Tripod Banner
              </h5>
              <p className="fst-normal" style={{ margin: "0px" }}>
                Melayani Cetak Door Frame Banner ( Banner Gawang ) dengan
                berbagai bahan tersedia. Sekaligus Tripod Banner dengan desain
                bisa menyesuaikan + Tripod Banner.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div
            className="card"
            style={{
              width: "25em",
              display: "flex",
              margin: "30px 10px",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="/img/Cetak Resin.jpg"
                className="card-img-top"
                alt="..."
                style={{
                  width: "auto",
                  height: "300px",
                  borderRadius: "10px 20px 10px 20px",
                  margin: "10px 10px 10px 10px",
                }}
              />
            </div>

            <div className="card-body" style={{ margin: "10px" }}>
              <h5 className="card-title" style={{ margin: "0" }}>
                Bahan Albatros (Cetak Meteran) & Name Tag
              </h5>
              <p className="card-text" style={{ margin: "0px" }}>
                Melayani cetak Bahan Albatros (Cetak Meteran) & Name Tag.
                Terkait ukuran bisa disesuaikan dengan kebutuhan yang
                diperlukan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
