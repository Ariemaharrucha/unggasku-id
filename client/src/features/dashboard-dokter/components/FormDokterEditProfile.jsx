import { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DashboardDokterLayout } from "../../../layouts/DashboardDokterLayout.jsx";
import { Link } from "react-router-dom";
import Input from "../../../components/ui/Input.jsx";
import Button from "../../../components/ui/Button.jsx";

export const FormDokterEditProfile = () => {
  const id = useParams();
  const [content, setContent] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <DashboardDokterLayout>
      <main>
        <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-4 mx-32">
          <h3 className="text-lg text-black">Edit Profile Dokter</h3>
        </section>
        <section className="max-w-2xl m-auto mt-1 mb-6">
          <form action="" className="space-y-3" onSubmit={handleSubmit()}>
            {/* Nama dokter */}
            <div>
              <label htmlFor="username" className="">
                Nama Dokter
              </label>
              <Input
                placeholder="Ex: Dr. Stefanus Fandi Wibowo"
                className={"mt-2 font-normal"}
                {...register("username", { required: "Nama wajib diisi" })}
              ></Input>
            </div>
            {/* Spesialis */}
            <div>
              <label htmlFor="spesialis" className="">
                Spesialis
              </label>
              <Input
                placeholder="Ex: Dokter hewan unggas"
                className={"mt-2 font-normal"}
                {...register("spesialis", {
                  required: "Profesi wajib diisi",
                })}
              ></Input>
            </div>
            {/* Pengalaman */}
            <div className="">
              <label htmlFor="pengalaman" className="">
                Pengalaman
              </label>
              <Input
                placeholder="Ex: 2 tahun"
                className={"mt-2 font-normal"}
                {...register("pengalaman", {
                })}></Input>
            </div>
            {/* Alumni */}
            <div>
              <label htmlFor="alumni">Alumni</label>
              <Input
                placeholder="Ex: S1 Universitas Gadjah Mada, 2020, dst.."
                className={"mt-2 font-normal"}
                {...register("alumni", {
                })}></Input>
            </div>
            {/* Praktik */}
            <div>
              <label htmlFor="tempat_praktek">Tempat Praktek</label>
              <Input
                placeholder="Ex: Kab. Depok, Yogyakarta"
                className={"mt-2 font-normal"}
                {...register("tempat_praktek", {
                })}></Input>
            </div>
            {/* Nomor Telepon */}
            <div>
              <label htmlFor="nomer_telepon">Nomor Telepon</label>
              <Input
                placeholder="Ex: 08123456789"
                className={"mt-2 font-normal"}
                {...register("nomer_telepon", {
                })}></Input>
            </div>
            {/* Nomer STR */}
            <div>
              <label htmlFor="nomer_str">Nomer STR</label>
              <Input
                placeholder="Ex: 7284687233"
                className={"mt-2 font-normal"}
                {...register("nomer_str", {
                })}></Input>
            </div>
            {/* image-dokter */}
            <div className="w-2/3">
              <label htmlFor="image_profile" className="">
                Update images Profile
              </label>
              <input
                type="file"
                name="image_profile"
                id="image_profile"
                accept="image/png, image/jpeg"
                className="block w-full mt-2 border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 cursor-pointer
              file:bg-gray-50 file:border-0
                file:me-4
                file:py-3 file:px-4"
                {...register("image_profile", {
                  required: "Gambar profile wajib diunggah",
                })}
              />
            </div>
            {/* Jam Kerja */}
            <div>
              <label htmlFor="nomer_str">Jam Kerja</label>
              <Input
                placeholder="Ex: 08.00 - 20.00 WIB"
                className={"mt-2 font-normal"}
                {...register("nomer_str", {
                })}></Input>
            </div>
            {/* Button */}
            <div className="flex gap-4">
              <Link
                to={"/dashboard/dokter"}
                className="w-1/3 bg-red-600 hover:bg-red-700 rounded-lg text-white flex items-center justify-center"
              >
                cancel
              </Link>

              <Button
                variant="secondary"
                className={"w-1/3 flex items-center justify-center"}
              >
                {isLoading ? "Loading..." : "Edit"}
              </Button>
            </div>
          </form>
          {isLoading && <p className="text-blue-500">Mengirim artikel...</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
        </section>
      </main>
    </DashboardDokterLayout>
  );
};
