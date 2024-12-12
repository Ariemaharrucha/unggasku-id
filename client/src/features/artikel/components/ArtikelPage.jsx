import image from "../../../assets/jumbotronArtikelPage.png";
import { IoSearch } from "react-icons/io5";
import { Layout } from "../../../layouts/Layout.jsx";
import Button from "../../../components/ui/Button.jsx";
import { Cardkategori } from "../../../components/shared/Cardkategori.jsx";
import { useArtikelPage } from "../hooks/useArtikelpage.jsx";

export const ArtikelPage = () => {
  const { 
    selectedCategory, 
    setSelectedCategory, 
    searchTerm, 
    setSearchTerm, 
    articles, 
    loading, 
    error 
  } = useArtikelPage("kesehatan-unggas");

  return (
    <Layout>
      {/* Jumbotron */}
      <section className="md:min-h-screen bg-primary-950 ">
        <div className="container mx-auto grid md:grid-cols-12 py-8 gap-20 content-center px-8 md:px-0">
          <div className="md:col-span-6 md:block hidden">
            <div className="overflow-hidden">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-6 grid-cols-12 px-8 self-center">
            <div className="text-balance space-y-4 w-fit">
              <h1 className="text-secondary-300 md:text-6xl text-5xl  font-bold">
                Baca Artikel Terbaru
              </h1>
              <p className="text-white">
                Dapatkan informasi terbaru mengenai penyakit hewan unggas,
                gejala, dan pencegahannya. Temukan wawasan praktis yang relevan
                untuk menjaga kesehatan unggas.
              </p>
              <Button variant="secondary" className="rounded-3xl">
                Baca Selengkapnya
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="bg-secondary-300 py-16 md:px-0 px-4">
        <div className="text-center space-y-4">
          <h4 className="text-2xl font-bold">
            Temukan Artikel Terbaru Terkait Unggas
          </h4>
          <h2 className="text-4xl font-bold">Unggasku.id</h2>
        </div>
        <div className="w-11/12 mx-auto mt-10">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="peer py-3 px-4 ps-11 block w-full bg-white border-none rounded-3xl focus:border-primary-950 focus:ring-primary-950"
              placeholder="Cari Artikel di sini"
            />
            <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-8">
              <IoSearch size={22} color="gray" />
            </div>
          </div>
        </div>
      </section>

      {/* Kategori */}
      <section className="container md:mx-auto py-10 px-4 ">
        <div className="space-y-5 text-center">
          <h2 className="text-3xl font-semibold">Kategori</h2>
          <p className="font-semibold">
            Temukan artikel lengkap berdasarkan kategori
          </p>
        </div>

         {/* Button Kategori */}
         <div className="grid grid-cols-4 mt-10">
          {["kesehatan-unggas", "lingkungan", "nutrisi", "pakan"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`col-span-1 text-center py-4 ${
                selectedCategory === category
                  ? "border-b-4 border-black"
                  : "text-slate-400  border-b border-slate-300"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

          {/* card artikel */}
        <div className="grid grid-cols-4 gap-4 pt-4">
          {loading && <p className="text-center col-span-4">Loading...</p>}
          {error && <p className="text-red-500 col-span-4">{error}</p>}
          {articles.length > 0 ? (
            articles.map((item, index) => (
              <Cardkategori
                key={index}
                image={item.image_artikel}
                title={item.judul}
                to={`/artikel/${item.artikel_id}`}
              />
            ))
          ) : (
            !loading && <p className="text-center col-span-4">Tidak ada artikel ditemukan.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};
