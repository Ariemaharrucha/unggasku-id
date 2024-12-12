import { useParams } from "react-router-dom";
import { CardArtikel } from "../../../components/shared/CardArtikel.jsx";
import { Layout } from "../../../layouts/Layout.jsx";
import { format } from "date-fns";
import { useArtikelDetails } from "../hooks/useArtikelDetails.jsx";

export const ArtikelDetails = () => {
  const { id } = useParams();
  const { artikel, loading, error } = useArtikelDetails(id);

  return (
    <Layout>
      <section>
        <section className="bg-primary-950 text-center space-y-5 bg-[url('https://www.putraperkasa.co.id/wp-content/uploads/2023/05/Waspadai-Jamur-Mikotoksin-pada-Ayam-Ini-Bahayanya-1200x675.webp')] bg-no-repeat bg-center bg-cover pt-28 pb-40">
          
          <h2 className="text-2xl font-semibold text-white">
            {artikel && artikel.judul}
          </h2>
        </section>

        <section className="md:px-16 px-4 -mt-20">
          <div className="md:px-20 px-5 pt-14 pb-6 rounded-t-2xl bg-white shadow-md">
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {artikel && (
              <article>
                <header className="flex gap-28">
                  <div>
                    <h5 className="font-semibold">Author</h5>
                    <p>{artikel.author_name || "Tidak diketahui"}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold">Di Upload</h5>
                    <p>{format(new Date(artikel.tanggal), "dd MMMM yyyy")}</p>
                  </div>
                </header>

                <section className="md:mt-32 mt-20 text-wrap leading-relaxed">
                  <div dangerouslySetInnerHTML={{ __html: artikel.konten }}></div>
                </section>
              </article>
            )}

            {/* card */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold">Baca Artikel lainnya</h2>
              <div className="grid grid-cols-3 pt-4 gap-10">
                {artikelList.map((artikel, index) => {
                  return (
                    <CardArtikel
                      key={index}
                      date={artikel.date}
                      image={artikel.img}
                      description={artikel.description}
                      to={artikel.to}
                    />
                  );
                })}
              </div>
            </section>
            {/* card */}
          </div>
        </section>
      </section>
    </Layout>
  );
};

const artikelList = Object.values({
  artikel1: {
    date: "18 Oktober 2024",
    description: "Kenali CRD, penyakit sistem pernafasan kronis pada ayam",
    img: "https://i.pinimg.com/236x/6a/02/18/6a0218319f83a37995bb7a7bc54d5875.jpg",
    to: "#",
  },
  artikel2: {
    date: "19 Oktober 2024",
    description: "Cara Meningkatkan Produktivitas Telur Ayam",
    img: "https://i.pinimg.com/236x/6d/f1/a5/6df1a510d05a33d260ad91b4d1384fd4.jpg",
    to: "#",
  },
  artikel3: {
    date: "20 Oktober 2024",
    description: "Pentingnya Vitamin untuk Kesehatan Ayam",
    img: "https://i.pinimg.com/236x/7d/de/4c/7dde4c37be6dc7771821141af3693bce.jpg",
    to: "#",
  },
});
