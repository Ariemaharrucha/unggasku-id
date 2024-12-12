import logo from "../assets/logo.png";
import imageAuth from "../assets/imageAuth.png";

export const AuthLayout = ({ children, title }) => {
  return (
    <div>
      <section className="flex md:min-h-screen justify-center items-center  bg-primary-950">
        <div className="space-y-4 h-screen w-full flex justify-center items-center">
          <section className="md:w-8/12  mx-auto space-y-4 ">
            <section className="flex items-center gap-2 justify-center">
              <img src={logo} alt="" className="size-8" />
              <a className="text-xl text-white" href="#">
                Ungassku.id
              </a>
            </section>
            <h2 className="font-bold text-3xl text-white text-center">
              {title}
            </h2>
            {children}
          </section>
        </div>
        <div className="rounded-l-3xl bg-red-400 h-screen w-full overflow-hidden md:block hidden">
          <img src={imageAuth} alt="" className="w-full h-full object-cover" />
        </div>
      </section>
    </div>
  );
};
