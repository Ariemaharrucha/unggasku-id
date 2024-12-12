import { Link } from "react-router-dom";
import Input from "../../../../components/ui/Input.jsx";
import Button from "../../../../components/ui/Button.jsx";
import { AuthLayout } from "../../../../layouts/AuthLayout.jsx";
import useRegister from "../hooks/useRegister.jsx";

export const Register = () => {
  const {
    isLoading,
    successMessage,
    errorMessage,
    register,
    handleSubmit,
    errors,
    password,
    onSubmit,
  } = useRegister();

  return (
    <AuthLayout title="Daftar Sekarang">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* username */}
        <div>
          <h5 className="text-white font-semibold">Nama Lengkap</h5>
          <Input
            className={"bg-transparent placeholder:text-white text-white mt-1"}
            placeholder="Masukan nama anda"
            {...register("username", { required: "Nama wajib diisi" })}
          ></Input>
        </div>
        {/* email */}
        <div>
          <h5 className="text-white font-semibold">Email</h5>
          <Input
            className={"bg-transparent placeholder:text-white text-white mt-1"}
            type="email"
            placeholder="Masukan email anda"
            {...register("email", { required: "Email wajib diisi" })}
          ></Input>
        </div>
        {/* password */}
        <div>
          <h5 className="text-white font-semibold">Password</h5>
          <Input
            className={"bg-transparent placeholder:text-white text-white mt-1"}
            placeholder="password"
            {...register("password", {
              required: "password wajib diisi",
              minLength: {
                value: 8,
                message: "Password harus minimal 8 karakter",
              },
            })}
          ></Input>
        </div>
        {/* confrim password */}
        <div>
          <h5 className="text-white font-semibold">Konfimarsi Password</h5>
          <Input
            className={"bg-transparent placeholder:text-white text-white mt-1"}
            type="password"
            placeholder="konfirmasi password"
            {...register("confirmPassword", {
              required: "Konfirmasi password wajib diisi",
              validate: (value) =>
                value === password || "Password tidak sesuai",
            })}
          ></Input>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-green-500 text-center">{successMessage}</p>
        )}
        <Button
          variant="secondary"
          className={"w-full flex justify-center text-md"}
          type="submit"
          disable={isLoading}
        >
          {isLoading ? "Loading..." : "Daftar"}
        </Button>
        <p className="text-white text-center">
          Sudah punya akun?{" "}
          <Link to={"/login"} className="text-blue-700 font-semibold">
            Masuk
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};
