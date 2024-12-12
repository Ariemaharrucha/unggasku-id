import { Layout } from "../../layouts/Layout";
import { FiBriefcase } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { getDokter } from "./services/api.layanan.js";
import { CardDokter } from "../../components/shared/CardSliderDokter.jsx";
import axios from "axios";
import useUser from "../../stores/useStore.js";
import { AiOutlineLike } from "react-icons/ai";

export const Layanan = () => {
  const {user} = useUser();
  const [listDokter, setListDokter] = useState([]);
  const navigate = useNavigate();

  function scrollToSection() {
    const section = document.getElementById("detail");
    section.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(()=>{
    const fetchDokter = async () => {
      try {
        const response = await getDokter();
        console.log(response);
        
        setListDokter(response)
      } catch (error) {
        console.log(error);
      }
    }
    fetchDokter();
  },[]);

  async function handleCreateKonsultasi(user_id, dokter_id, nama_dokter, spesialis, image_profile, jam_kerja) {
    console.log(user_id, dokter_id);

    if(!user) {
      navigate('/login');
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/konsultasi/findOrCreate`,
        {
          user_id,
          dokter_id,
        }
      );
      const roomId = response.data.data;

      if (roomId) {
        navigate(`/layanan/konsultasi/chat/${roomId}`, {state: {nama_dokter, spesialis, image_profile, jam_kerja}});
      }
    } catch (error) {
      console.error("Error handling konsultasi:", error);
      alert("Terjadi kesalahan saat memulai chat.");
    }
  }

  return (
    <Layout>
      <section className="md:min-h-screen justify-center">
        <div className="container md:h-screen items-center justify-center mx-auto grid md:grid-cols-12 py-8">
          <div className="md:col-span-6 order-2 md:order-1 grid-cols-12 px-8 md:mt-0 mt-8">
            <div className="text-pretty space-y-4 w-fit">
              <h1 className="font-bold md:text-6xl text-4xl">
                Temukan Dokter Terbaik Anda
              </h1>
              <p>
                Dokter hewan unggas terbaik yang siap membantu Anda menjaga
                kesehatan hewan ternak. Dapatkan konsultasi cepat dan solusi
                tepat untuk setiap masalah kesehatan unggas Anda, kapan saja dan
                dimana saja.
              </p>
              <Button
                variant="primary"
                size="large"
                className="xl:py-4 xl:px-6 xl:text-lg md:py-3 md:px-4 md:text-sm py-2 sm:px-3 sm:text-xs rounded-full"
                onClick={scrollToSection}
              >
                Jadwalkan Konsultasi
              </Button>
            </div>
          </div>
          <div className="md:col-span-6 order-1 md:order-2 grid-cols-12 px-8">
            <div className="overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="src\assets\Images\layanan\Layanan_header.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <CardDokter data={listDokter} />

      <section id="detail" className="h-auto my-32">
        <h2 className="w-6/12 mx-auto text-pretty text-center text-5xl font-bold text-black">
          Atur Jadwal Konsultasi dengan Mudah
        </h2>
        <div className="bg-primary-900 w-5/12 h-24 mx-auto mt-12 flex justify-between items-center px-11 rounded-xl">
          <h3 className="text-2xl text-white font-semibold">
            Riwayat Konsultasi
          </h3>
          <div className="bg-white py-3 px-7 rounded-xl">
            <Link to={'/layanan/konsultasi'}>Riwayat Konsultasi</Link>
          </div>
        </div>
        <div className="w-11/12 mx-auto my-auto grid grid-cols-1 p-12">
          <div className="bg-secondary-300 p-20 grid md:grid-cols-[2fr_0.5fr_2fr] gap-5 md:gap-y-10">
            {listDokter && listDokter.map((dokter, index) => (
              <div
                key={dokter.dokter_id}
                className={`card bg-white rounded-lg shadow-lg w-full p-5 ${
                  index % 2 === 0 ? "md:col-start-1" : "md:col-start-3"
                }`}
              >
                <div className="flex flex-row items-center">
                  <div className="block">
                    <div className="overflow-hidden w-28 h-28 border-black border-2 rounded-full">
                      <img
                        className="object-cover object-center rounded-full mx-auto border-black"
                        src={dokter.image_profile}
                        alt={`Foto Dokter ${dokter.nama_dokter}`}
                      />
                    </div>
                    {/* <div className="flex items-center justify-center mt-2 gap-2">
                      <span
                        className={`w-3.5 h-3.5 rounded-full bg-green-500 ${
                          index % 2 === 0 ? "bg-green-500" : "bg-red-600"
                        }`}
                      ></span>
                      <p className="text-center">{dokter.status}</p>
                    </div> */}
                  </div>
                  <div className="flex flex-col pl-7">
                    <h3 className="text-xl font-semibold">{dokter.nama_dokter}</h3>
                    <p className="text-base font-normal">{dokter.spesialis}</p>
                    <div className="flex flex-row gap-x-4 mt-2">
                      <span className="inline-flex items-center justify-center gap-x-1.5 py-1 px-3 rounded-md text-sm font-medium bg-secondary-300 text-black text-center">
                        <AiOutlineLike className="text-lg" />
                        
                      </span>
                      <span className="inline-flex items-center justify-center gap-x-1.5 py-1 px-3 rounded-md text-sm font-medium bg-secondary-300 text-black text-center">
                        <FiBriefcase className="text-lg" />
                        {dokter.pengalaman}
                      </span>
                    </div>
                    {/* <p className="text-lg font-normal mt-1">
                      Rp. {parseInt(dokter.harga).toLocaleString("id-ID")}
                    </p>
                    <s className="text-sm opacity-50">
                      Rp. {parseInt(dokter.discont).toLocaleString("id-ID")}
                    </s> */}
                    <p className="text-sm mt-2 font-semibold">jam kerja: {dokter.jam_kerja}</p>
                    <Button
                      variant="primary"
                      size="medium"
                      className="w-24 py-2 text-center flex text-lg justify-center mt-2"
                      onClick={() =>
                        handleCreateKonsultasi(user?.id, dokter.dokter_id, dokter.nama_dokter, dokter.spesialis, dokter.image_profile, dokter.jam_kerja)
                      }
                    >
                      Chat
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};