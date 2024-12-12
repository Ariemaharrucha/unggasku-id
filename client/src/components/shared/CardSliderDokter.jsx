/* eslint-disable react/prop-types */
import { FiBriefcase } from "react-icons/fi";
import Button from "../ui/Button.jsx";
import Slider from "react-slick";
import { AiOutlineLike } from "react-icons/ai";

export const CardDokter = ({ data = []}) => {
  return (
    <section className="p-10 md:min-h-screen">
      <div className="container mx-auto">
        <h2 className="md:text-5xl text-4xl font-bold mb-10 text-center">
          Daftar Dokter Ahli
        </h2>
        <SliderLayanan>
          {data &&
            data.map((dokter, index) => (
              <div key={dokter.dokter_id} className="p-4">
                <div className="bg-gray-300 p-5 rounded-lg">
                  <div className="w-full h-80 overflow-hidden">
                    <img
                      className="rounded-t-lg"
                      src={dokter.image_profile}
                      alt={dokter.nama_dokter}
                    />
                  </div>
                  <div className="border-black border-x-2 border-b-2 pt-2">
                    <h3 className="text-xl font-semibold pl-3">
                      {dokter.nama_dokter}
                    </h3>
                    <p className="text-sm font-normal pl-3">
                      {dokter.spesialis}
                    </p>
                    <div className="flex gap-2 my-2 pl-3">
                      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-sm font-medium bg-secondary-300 text-black">
                        <AiOutlineLike className="text-lg" />
                        
                      </span>
                      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-sm font-medium bg-secondary-300 text-black">
                        <FiBriefcase className="text-lg" />
                        {dokter.pengalaman}
                      </span>
                    </div>
                    {/* <div className="bg-gray-50 w-full pl-3 py-1">
                      <p>Rp. {parseInt(dokter.harga).toLocaleString("id-ID")}</p>
                      <s className="opacity-50">
                        Rp. {parseInt(dokter.discont).toLocaleString("id-ID")}
                      </s>
                    </div> */}
                  </div>
                  <div className="border-black border-x-2 border-b-2 rounded-b-lg">
                    <div className="pl-8 py-3">
                      <h3 className="text-base font-semibold">Alumni</h3>
                      <ul>{dokter.alumni}</ul>
                    </div>
                    <div className="pl-8">
                      <h3 className="text-base font-semibold">Praktik di</h3>
                      <p className="text-sm font-medium">
                        {dokter.tempat_praktek}
                      </p>
                    </div>
                    <div className="pl-8 py-3">
                      <h3 className="text-base font-semibold">Nomor STR</h3>
                      <p className="text-sm font-medium">{dokter.nomer_str}</p>
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    size="large"
                    className="w-full flex justify-center mt-4"
                    disabled={true}
                  >
                    {"Chat"}
                  </Button>
                </div>
              </div>
            ))}
        </SliderLayanan>
      </div>
    </section>
  );
};

function SliderLayanan({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="slider-container">
      <Slider {...{ ...settings }}>{children}</Slider>
    </div>
  );
}
