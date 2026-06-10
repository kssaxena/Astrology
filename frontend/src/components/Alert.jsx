import React from "react";
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle, FaInfoCircle, FaTimes } from "react-icons/fa";

const Alert = ({
  type = "success",
  message,
  onClose,
}) => {
  const alertStyles = {
    success: {
      bg: "bg-green-50",
      border: "border-green-500",
      text: "text-green-700",
      icon: <FaCheckCircle />,
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-500",
      text: "text-red-700",
      icon: <FaTimesCircle />,
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-500",
      text: "text-yellow-700",
      icon: <FaExclamationTriangle />,
    },
    info: {
      bg: "bg-blue-50",
      border: "border-blue-500",
      text: "text-blue-700",
      icon: <FaInfoCircle />,
    },
  };

  const style = alertStyles[type];

  return (
    <div
      className={`
        flex
        items-center
        justify-between
        gap-3
        p-4
        rounded-xl
        border-l-4
        shadow-md
        ${style.bg}
        ${style.border}
      `}
    >
      <div className={`flex items-center gap-3 ${style.text}`}>
        <span className="text-xl">{style.icon}</span>
        <p className="font-medium">{message}</p>
      </div>

      <button
        onClick={onClose}
        className={`${style.text} hover:opacity-70`}
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default Alert;