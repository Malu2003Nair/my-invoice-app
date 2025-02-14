import React from "react";

export function Button({ children, onClick, variant }) {
  return (
    <button
      className={`border px-4 py-2 rounded ${variant === "outline" ? "border-gray-500" : "bg-blue-500 text-white"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
