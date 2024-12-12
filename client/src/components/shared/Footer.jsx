import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <footer className="mt-auto w-full bg-primary-950 text-white py-5 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Grid */}

      <div className=" border-b pb-5 border-gray-200 flex items-center gap-2">
        <img src={logo} alt="" className="size-8" />
        <a className="text-3xl text-white" href="#">
          Ungassku.id
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-5">
        <div>
          <h4 className="text-md font-semibold ">Tentang kami</h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a className="inline-flex gap-x-2" href="#">
                Pricing
              </a>
            </p>
            <p>
              <a className="inline-flex gap-x-2" href="#">
                Changelog
              </a>
            </p>
            <p>
              <a className="inline-flex gap-x-2" href="#">
                Docs
              </a>
            </p>
          </div>
        </div>
        {/* End Col */}

        <div>
          <h4 className="text-md font-semibold ">Layanan</h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a className="inline-flex gap-x-2" href="#">
                Konsultasi Peternakan
              </a>
            </p>
            <p>
              <a className="inline-flex gap-x-2" href="#">
                Artikel & Berita
              </a>
            </p>
          </div>
        </div>
        {/* End Col */}

        <div>
          <h4 className="text-md font-semibold ">Infomasi</h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a className="inline-flex gap-x-2" href="#">
                Kontak kami
              </a>
            </p>
            <p>
              <a className="inline-flex gap-x-2" href="#">
                FAQ
              </a>
            </p>
          </div>
        </div>
        {/* End Col */}

        <div>
          <h4 className="text-md font-semibold ">Follow Us</h4>
          <div className="mt-3 flex gap-3">
            <FaFacebookF size={20} className="cursor-pointer" />
            <FaInstagram size={20} className="cursor-pointer" />
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}

      <div className="pt-4 border-t border-gray-200">
        <a className="text-sm text-white" href="#">
          NusantaraGrowth @ 2024
        </a>
      </div>
    </footer>
  );
};
