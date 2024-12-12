import React from "react";
import { Layout } from "../../layouts/Layout.jsx";

export const Contact = () => {
  const faqData = [
    {
      question: "Di mana saya bisa menemukan panduan lengkap perawatan unggas?",
      answer: "Anda dapat menemukan panduan perawatan unggas di halaman bantuan kami.",
    },
    {
      question: "Apakah ada fitur untuk bertanya langsung kepada ahli?",
      answer: "Ya, Anda dapat menggunakan fitur konsultasi langsung untuk bertanya kepada ahli mengenai masalah kesehatan unggas Anda.",
    },
    {
      question: "Kapan saya bisa mengakses fitur layanan untuk mendapatkan bantuan?",
      answer: "Fitur ini tersedia 24/7 di situs kami.",
    },
    {
      question: "Bagaimana cara memberikan ulasan atau feedback tentang website ini?",
      answer: "Anda dapat memberikan feedback melalui formulir kontak kami.",
    },
  ];
  
  return (
    <Layout>
      <main className="font-poppins ">
        <div className="md:min-h-screen">
          <section className="py-8 flex items-center px-4 mx:px-0">
            <div className="w-full max-w-6xl mx-auto md:p-2 p-4 bg-secondary-300 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row md:gap-20 gap-8">
              <div className="bg-gray-800 rounded-lg text-white flex flex-col px-6 py-6 justify-between md:w-1/2">
                <div>
                  <h2 className="text-4xl font-semibold">Informasi Kontak</h2>
                  <p className="mt-2 text-2xl">
                    Halo, ada yang bisa kami bantu?
                  </p>
                </div>
                <ul className=" space-y-6">
                  <li className="text-xl">📞 (021) 1234-5678</li>
                  <li className="text-xl">✉️ unggasku.id@gmail.com</li>
                  <li className="text-xl">🔗 @unggasku.id_official</li>
                  <li className="text-xl">📍 Batam, Kepulauan Riau</li>
                </ul>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-secondary-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-secondary-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-secondary-300 rounded-full"></div>
                </div>
              </div>

              <div className=" bg-secondary-300 py-4 pe-6 md:w-1/2">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                      <label className="block font-semibold text-gray-700">
                        Nama Depan
                      </label>
                      <input
                        type="text"
                        className="p-2 border-b border-black bg-transparent rounded-none focus:outline-none focus:border-b focus:border-black w-full"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-gray-700">
                        Nama Belakang
                      </label>
                      <input
                        type="text"
                        className="p-2 border-b border-black bg-transparent rounded-none focus:outline-none focus:border-b focus:border-black w-full"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block font-semibold text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        className="p-2 border-b border-black bg-transparent rounded-none focus:outline-none focus:border-b focus:border-black w-full"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block font-semibold text-gray-700">
                        Nomor Telepon
                      </label>
                      <input
                        type="text"
                        className="p-2 border-b border-black bg-transparent rounded-none focus:outline-none focus:border-b focus:border-black w-full"
                      />
                    </div>
                  </div>

                  <div className="">
                    <label className="block">Pilih Subjek:</label>
                    <div className="flex flex-wrap items-center mt-2 gap-3">
                      <label className="flex items-center gap-1">
                        <input type="radio" name="subject" /> Umum
                      </label>
                      <label className="flex items-center gap-1">
                        <input type="radio" name="subject" /> Pengaduan
                      </label>
                      <label className="flex items-center gap-1">
                        <input type="radio" name="subject" /> Layanan
                      </label>
                      <label className="flex items-center gap-1">
                        <input type="radio" name="subject" /> Saran dan Masukan
                      </label>
                    </div>
                  </div>

                  <div className="">
                    <label className="block font-semibold text-gray-700">
                      Pesan
                    </label>
                    <textarea
                      placeholder="Tulis pesan anda..."
                      className="p-2 mt-2 w-full border-b border-black bg-transparent rounded-none focus:outline-none focus:border-b focus:border-black h-20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="block font-semibold ml-auto bg-gray-800 text-white py-2 px-14 rounded-3xl w-full md:w-auto"
                  >
                    Kirim
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>

        <div className="md:min-h-screen pt-6 pb-10 md:py-0 flex items-center justify-center">
          <section className="px-4 md:px-0">
            {/* FAQSection */}
            <div className="w-full max-w-5xl mx-auto">
              <h2 className="md:text-5xl text-4xl font-bold text-gray-800">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6 mt-4">
                {faqData.map((item, index) => (
                  <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      className={`py-3 px-3 border-b ${
        open ? "bg-secondary-300" : "border-gray-300"
      } rounded-lg transition-all duration-300`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left font-medium text-gray-800 text:lg md:text-xl"
      >
        {question}
        <span>{open ? "−" : "+"}</span>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-48" : "max-h-0"
        }`}
        style={{ maxHeight: open ? "12rem" : "0" }} // Customize max height here
      >
        <p className="mt-2 text-gray-600 text-base md:text-lg p-2">{answer}</p>
      </div>
    </div>
  );
};
