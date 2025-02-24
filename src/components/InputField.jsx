import { useState } from 'react';
import PropTypes from 'prop-types';

// Import icons
import mailIcon from '../assets/login-icons/email.png';
import lockIcon from '../assets/login-icons/password.png';
import showIcon from '../assets/login-icons/show.png';
import hideIcon from '../assets/login-icons/hide.png';
import personIcon from '../assets/login-icons/person.png';

// Map the "icon" prop to the correct imported icon
const iconMap = {
  mail: mailIcon,
  lock: lockIcon,
  person: personIcon,
};

const InputField = ({ type, placeholder, icon }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleToggle = () => setIsPasswordShown((prev) => !prev);

  return (
    <div className="relative mb-4">
      {/* Left icon */}
      {icon && iconMap[icon] && (
        <img
          src={iconMap[icon]}
          alt={icon}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
        />
      )}

      {/* Input */}
      <input
        type={isPasswordShown ? 'text' : type}
        placeholder={placeholder}
        required
        className="w-full border border-gray-300 rounded py-3 pl-10 pr-10 focus:outline-none focus:border-purple-600"
      />

      {/* Toggle password visibility (eye icon) */}
      {type === 'password' && (
        <img
          onClick={handleToggle}
          src={isPasswordShown ? hideIcon : showIcon}
          alt="toggle password"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer text-gray-400"
        />
      )}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default InputField;
