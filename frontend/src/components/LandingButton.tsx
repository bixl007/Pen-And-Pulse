import React from "react";
import { useNavigate } from "react-router-dom";

const LandingButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/signup");
        }}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors"
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingButton;
