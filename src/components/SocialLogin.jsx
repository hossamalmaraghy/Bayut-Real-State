import googleIcon from '../assets/login-icons/google.svg';
import appleIcon from '../assets/login-icons/apple.svg';

const SocialLogin = () => {
  return (
    <div className="flex gap-4">
      <button className="flex items-center justify-center w-full gap-2 py-3 border border-purple-200 rounded hover:bg-purple-50 transition-colors">
        <img src={googleIcon} alt="Google" className="w-6" />
        Google
      </button>
      <button className="flex items-center justify-center w-full gap-2 py-3 border border-purple-200 rounded hover:bg-purple-50 transition-colors">
        <img src={appleIcon} alt="Apple" className="w-6" />
        Apple
      </button>
    </div>
  );
};

export default SocialLogin;
