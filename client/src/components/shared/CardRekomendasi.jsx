import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export const CardRekomendasi = ({
  title,
  description,
  date,
  image,
  detailLink,
}) => {
  return (
    <div className="flex flex-col group shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition bg-primary-950 dark:shadow-neutral-700/70 w-full">
      <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
        <img
          className="w-full h-full size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
          src={image}
          alt="Card Image"
        />
      </div>
      <div className="p-4 md:p-5 flex flex-col h-full">
        <h3 className="text-lg font-bold text-primary-50">{title}</h3>
        <p className="mt-1 text-primary-50 flex-grow line-clamp-2" dangerouslySetInnerHTML={{__html: description}}>          
        </p>
        <span className="text-secondary-100 italic  mt-1">
            {date}
          </span>
        <div className="flex justify-end items-center gap-2 mt-auto">
          <Link to={`/artikel/${detailLink}`} className="text-secondary-300">
            Detail
          </Link>
          <IoIosArrowForward className="text-secondary-50" />
        </div>
      </div>
    </div>
  );
};
