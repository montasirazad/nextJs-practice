"use client";
import { useRouter } from "next/navigation";

const Button = ({ children }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard/settings");
  };
  return (
    <button onClick={handleClick} className="bg-blue-400 p-3 mt-2">
      {children}
    </button>
  );
};

export default Button;
