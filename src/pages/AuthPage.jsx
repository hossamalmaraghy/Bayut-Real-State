import { useState } from "react";
import InputField from "../components/InputField";
import SocialLogin from "../components/SocialLogin";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2E7D64]">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-center text-2xl font-semibold mb-6 text-gray-800">
          {isLogin ? "Log In" : "Sign Up"}
        </h2>

        {/* Social Login Buttons */}
        <SocialLogin />

        <p className="text-center text-gray-500 my-4">or</p>

        {/* Form */}
        <form className="space-y-4">
          {/* If it's "Sign Up," show the Full Name field */}
          {!isLogin && (
            <InputField type="text" placeholder="Full Name" icon="person" />
          )}
          <InputField type="email" placeholder="Email Address" icon="mail" />
          <InputField type="password" placeholder="Password" icon="lock" />
          {/* Confirm Password field for Sign Up */}
          {!isLogin && (
            <InputField
              type="password"
              placeholder="Confirm Password"
              icon="lock"
            />
          )}

          {/* Forgot Password link only for Login */}
          {isLogin && (
            <div className="text-right">
              <a
                href="#"
                className="text-sm text-[#47B16B] hover:underline inline-block"
              >
                Forgot Password?
              </a>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#47B16B] text-white py-3 rounded hover:bg-[#3A8F56] transition-colors"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        {/* Toggle between Login and Sign Up */}
        <p className="text-center text-gray-600 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin((prev) => !prev)}
            className="text-[#47B16B] hover:underline"
          >
            {isLogin ? "Sign Up now" : "Log In instead"}
          </button>
        </p>
        {/* Optional: Back to Home */}
        <p className="text-center mt-4">
          <Link to="/" className="text-gray-500 hover:underline text-sm">
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
