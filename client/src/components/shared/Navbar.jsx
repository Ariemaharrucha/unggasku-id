import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png';
import defaultProfile from '../../assets/card profil-tentang-kami1.jpg'
import useUser from "../../stores/useStore.js";

export const Navbar = () => {
  const {user} = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex flex-wrap sticky top-0 md:justify-start md:flex-nowrap z-50 w-full bg-primary-950">
      <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-x-1">
          <a className="flex-none text-base text-white focus:outline-none focus:opacity-80" href="#" aria-label="Brand">
            <div className="flex items-center gap-2">
            <img src={logo} alt="" className="size-6" />
            Ungassku.id
            </div>
          </a>

          {/* Collapse Button */}
          <button
            type="button"
            className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-300 text-gray-800 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="hs-header-base"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "white" }}>
                <path d="M18 6 6 18" />
                <path d="M6 6 18 18" />
              </svg>
            ) : (
              <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "white" }}>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
            <span className="sr-only">Toggle navigation</span>
          </button>
          {/* End Collapse Button */}
        </div>

        {/* Collapse */}
        <div id="hs-header-base" className={`${isMenuOpen ? 'block' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow md:block`} aria-labelledby="hs-header-base-collapse">
          <div className="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-gray-100 scrollbar-thumb-gray-300">
            <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
              <div className="grow">
                <div className="flex flex-col text-sm md:flex-row md:justify-end md:items-center gap-2 md:gap-8">
                  <Navlink to="/">Beranda</Navlink>
                  <Navlink to="/artikel">Artikel</Navlink>
                  <Navlink to="/layanan">Layanan</Navlink>
                  <Navlink to="/tentang-kami">Tentang kami</Navlink>
                  <Navlink to="/kontak-kami">kontak kami</Navlink>
                  <Link to={`/profile/${user?.id}`}>
                    <div className="size-10 overflow-hidden rounded-full">
                        <img src={user?.image ? user.image : 'https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg'} alt="profile" className="w-full h-full object-cover" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Collapse */}
      </nav>
    </header>
  );
};

const Navlink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-secondary-300" : "text-white hover:text-secondary-300 transition-all"
      }
    >
      {children}
    </NavLink>
  );
};
