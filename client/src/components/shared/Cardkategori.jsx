import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";

export const Cardkategori = ({ to, image, title }) => {
  return (
    <div className="md:col-span-1 col-span-4 flex flex-col justify-between p-4 border rounded-md min-h-96 relative overflow-hidden">
      <div
        className={`absolute inset-0 bg-no-repeat bg-cover brightness-75`} style={{backgroundImage: `url(${image})`}} 
      ></div>
      <div className="relative z-[1]">
        <div className="flex justify-between items-center text-balance">
          <h5 className="text-white">{title}</h5>
          <MdFavoriteBorder size={24} className="text-white cursor-pointer" />
        </div>
      </div>
      <Link
        to={to}
        className="block relative px-4 py-2 text-black border w-fit ml-auto bg-white rounded-md"
      >
        Lihat detail
      </Link>
    </div>
  );
};
