import Button from '../ui/Button.jsx'
import { Link } from 'react-router-dom'

export const CardArtikel = ({to, image, date, description}) => {
  return (
    <div className="md:col-span-1 col-span-3 flex flex-col bg-white shadow-md rounded-md overflow-hidden">
    <div className="h-40">
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
    <div className="flex-1 p-4 space-y-2 text-wrap">
      <p className="text-sm text-slate-500 font-semibold">
        {date}
      </p>
      <p>
        {description}
      </p>
      <Button
        variant="secondary"
        className={"font-bold rounded-3xl"}
      >
        <Link to={to}>Baca Selengkapnya</Link>
      </Button>
    </div>
  </div>
  )
}
