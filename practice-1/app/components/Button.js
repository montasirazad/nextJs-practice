"use client";

import { useRouter } from "next/navigation";

const Button = ({ children }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard/analytic");
  };
  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 px-3 py-2 rounded text-gray-200 hover:bg-yellow-600"
    >
      {children}
    </button>
  );
};

export default Button;
