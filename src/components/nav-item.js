import React from "react";

export default function NavItem({ icon, label, active = false }) {
    const isImage = typeof icon === "string"; 
  return (
    <li className="relative">
      {active && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4a57da]" />
      )}
      <a
        href="#"
        className={`flex items-center px-3 py-2 rounded-md ${
          active
            ? "text-[#4a57da] font-medium"
            : "text-[#606060] dark:text-gray-400 hover:text-[#0b1d2e] dark:hover:text-white"
        }`}
      >
        {isImage ? (
          <img src={icon} alt={label} className="mr-3 w-5 h-5" />
        ) : (
          <span className="mr-3">{icon}</span>
        )}
        <span>{label}</span>
      </a>
    </li>
  );
}
