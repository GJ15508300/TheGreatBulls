import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import EyeOffIcon from '../../assets/images/hide.png';
import EyeIcon from '../../assets/images/view.png';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // Set default to false for hidden password
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Add your login logic here using the data object
    console.log("Login successful", data);
    // navigate('/')
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 rounded-lg shadow-lg bg-white"
    >
      <h2 className="text-2xl font-semibold mb-4">Login Form</h2>

      <div className="mb-4">
        <label className="block text-black font-medium mb-2">Email Id</label>
        <input
          type="text"
          className={`w-full p-2 border ${errors.emailId ? "border-red-500" : "border-gray-300"
            } rounded`}
          {...register("emailId", {
            required: "Email Id is required",
            minLength: {
              value: 3,
              message: "InValid Email ID",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.emailId && (
          <p className="text-red-500 text-sm mt-1">{errors.emailId.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Password</label>
        <div className="relative">
          <input
            // type={showPassword ? "text" : "password"}
            type="password"
            className={`w-full p-2 border ${errors.password ? "border-red-500" : "border-gray-300"
              } rounded pr-10`} // Add padding for the icon
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          <img
            src={showPassword ? EyeOffIcon : EyeIcon}
            alt="toggle visibility"
            className="h-5 w-5 absolute right-2 top-5 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          />
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          {...register("rememberMe")}
          className="mr-2 text-primary focus:ring-0"
        />
        <label className="text-gray-700">Remember Me</label>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Login
      </button>
      <div className="text-center mt-4">
        <a
          href="#"
          className="text-sm text-blue-500 hover:underline"
          onClick={(e) => {
            e.preventDefault();
            navigate("/forgotPassword");
          }}
        >
          Forgot Password?
        </a>
        <div className="mt-2">
          <a
            href="#"
            className="text-sm text-blue-500 hover:underline"
            onClick={() => {
              navigate("/signUp");
            }}
          >
            Don’t have an account? Sign Up
          </a>
        </div>
      </div>
    </form>
  );
};

export default Login;
