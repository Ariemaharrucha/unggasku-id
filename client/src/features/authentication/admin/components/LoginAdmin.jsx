import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthLayout } from "../../../../layouts/AuthLayout.jsx";
import Input from "../../../../components/ui/Input.jsx";
import Button from "../../../../components/ui/Button.jsx";
import useLoginAdmin from "../hooks/useLoginDashboard.jsx";

export const LoginAdmin = () => {
  const {
    isLoading,
    showPassword,
    email,
    password,
    errorMessage,
    handleEmailChange,
    handlePasswordChange,
    togglePassword,
    onSubmitLogin,
  } = useLoginAdmin();

  return (
    <AuthLayout title="Dashboard Login">
      <form className="space-y-4" onSubmit={onSubmitLogin}>
        <div>
          <h5 className="text-white font-semibold">Email</h5>
          <Input
            className={"bg-transparent placeholder:text-white text-white mt-1"}
            type="email"
            placeholder="Masukan email anda"
            value={email}
            onChange={handleEmailChange}
          ></Input>
        </div>
        <div>
          <h5 className="text-white font-semibold">Password</h5>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="block w-full border font-medium placeholder:font-light focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 shadow-sm transition duration-200 py-2 px-3 text-base rounded-lg bg-transparent placeholder:text-white text-white mt-1"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <div
              className="absolute inset-y-0 end-0 flex items-center cursor-pointer pe-3"
              onClick={togglePassword}
            >
              {showPassword ? (
                <AiOutlineEye size={24} color="white" />
              ) : (
                <AiOutlineEyeInvisible size={24} color="white" />
              )}
            </div>
          </div>
        </div>
        {errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}
        <Button
          variant="secondary"
          className={"w-full flex justify-center text-md"}
          type="submit"
          disable={isLoading}
        >
          {isLoading ? "Loading..." : "Masuk"}
        </Button>
      </form>
    </AuthLayout>
  );
};
