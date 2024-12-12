import { DashboardAdminLayout } from "../../../layouts/DashboardAdminLayout.jsx";
import Input from "../../../components/ui/Input.jsx";
import Button from "../../../components/ui/Button.jsx";
import { useAddDokterForm } from "../hooks/useAddDokterForm.jsx";

export const FormAddDokter = () => {
  const {
    register,
    handleSubmit,
    errors,
    reset,
    successMessage,
    errorMessage,
    isLoading,
    imagePreview,
    handleImageChange,
    onSubmit,
  } = useAddDokterForm();

  return (
    <DashboardAdminLayout>
      <main>
        <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-1">
          <h3 className="text-lg text-black">Tambah Dokter</h3>
        </section>
        <section className=" mt-1">
          <form className="flex flex-row gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-1 space-y-4">
              {/* Username */}
              <div>
                <label htmlFor="username">Username</label>
                <Input
                  className={"mt-2"}
                  placeholder="Username"
                  {...register("username", {
                    required: "Username wajib diisi",
                  })}
                />
                {errors.username && (
                  <p className="text-red-500">{errors.username.message}</p>
                )}
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email">Email</label>
                <Input
                  className={"mt-2"}
                  placeholder="Email"
                  type="email"
                  {...register("email", { required: "Email wajib diisi" })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              {/* Password */}
              <div>
                <label htmlFor="password">Password</label>
                <Input
                  className={"mt-2"}
                  placeholder="Password"
                  type="text"
                  {...register("password", {
                    required: "Password wajib diisi",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              {/* Image Profile */}
              <div>
                <label htmlFor="image_profile">Foto Profil</label>
                <input
                  type="file"
                  className="block w-full p-3 mt-2 border rounded-md"
                  {...register("image_profile", {
                    required: "Foto wajib diunggah",
                  })}
                  onChange={handleImageChange}
                />
                {errors.image_profile && (
                  <p className="text-red-500">{errors.image_profile.message}</p>
                )}
              </div>
              {imagePreview && (
                <div className="size-40 mt-3 rounded-md overflow-hidden">
                  <img src={imagePreview} alt="foto dokter" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            <div className="flex-grow space-y-2">
              {/* Nomor STR */}
              <div>
                <label htmlFor="nomer_str">Nomor STR</label>
                <Input
                  className={"mt-2"}
                  placeholder="Nomor STR"
                  {...register("nomer_str", {
                    required: "Nomor STR wajib diisi",
                  })}
                />
                {errors.nomer_str && (
                  <p className="text-red-500">{errors.nomer_str.message}</p>
                )}
              </div>
              {/* Nomor Telepon */}
              <div>
                <label htmlFor="nomer_telepon">Nomor Telepon</label>
                <Input
                  className={"mt-2"}
                  placeholder="Nomor Telepon"
                  type="tel"
                  {...register("nomer_telepon", {
                    required: "Nomor telepon wajib diisi",
                  })}
                />
                {errors.nomer_telepon && (
                  <p className="text-red-500">{errors.nomer_telepon.message}</p>
                )}
              </div>
              {/* Spesialis */}
              <div>
                <label htmlFor="spesialis">Spesialis</label>
                <Input
                  className={"mt-2"}
                  placeholder="Spesialis"
                  {...register("spesialis", {
                    required: "Spesialis wajib diisi",
                  })}
                />
                {errors.spesialis && (
                  <p className="text-red-500">{errors.spesialis.message}</p>
                )}
              </div>
              {/* Pengalaman */}
              <div>
                <label htmlFor="pengalaman">Pengalaman (dalam tahun)</label>
                <Input
                  className={"mt-2"}
                  placeholder="Pengalaman"
                  {...register("pengalaman", {
                    required: "Pengalaman wajib diisi",
                  })}
                />
                {errors.pengalaman && (
                  <p className="text-red-500">{errors.pengalaman.message}</p>
                )}
              </div>
              {/* Jam Kerja */}
              <div>
                <label htmlFor="jam_kerja">Jam Kerja</label>
                <Input
                  className={"mt-2"}
                  placeholder="Contoh: 08:00 - 16:00"
                  {...register("jam_kerja", {
                    required: "Jam kerja wajib diisi",
                  })}
                />
                {errors.jam_kerja && (
                  <p className="text-red-500">{errors.jam_kerja.message}</p>
                )}
              </div>
              {/* Alumni */}
              <div>
                <label htmlFor="alumni">Alumni</label>
                <Input
                  className={"mt-2"}
                  placeholder="Asal Universitas"
                  {...register("alumni", {
                    required: "Asal universitas wajib diisi",
                  })}
                />
                {errors.alumni && (
                  <p className="text-red-500">{errors.alumni.message}</p>
                )}
              </div>
              {/* Tempat Praktek */}
              <div>
                <label htmlFor="tempat_praktek">Tempat Praktek</label>
                <Input
                  className={"mt-2"}
                  placeholder="Alamat praktek"
                  {...register("tempat_praktek", {
                    required: "Alamat praktek wajib diisi",
                  })}
                />
                {errors.tempat_praktek && (
                  <p className="text-red-500">
                    {errors.tempat_praktek.message}
                  </p>
                )}
              </div>

              {/* Button */}
              <div className="flex gap-4">
                <Button
                  variant="secondary"
                  className="bg-red-600 hover:bg-red-700 text-white flex justify-center w-full"
                  onClick={() => {
                    reset();
                    setSuccessMessage("");
                  }}
                >
                  Clear
                </Button>
                <Button
                  variant="primary"
                  className="flex justify-center w-full"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Tambahkan"}
                </Button>
              </div>
            </div>
          </form>
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </section>
      </main>
    </DashboardAdminLayout>
  );
};
