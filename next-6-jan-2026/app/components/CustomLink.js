"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ path, children }) => {
  const pathName = usePathname();
  const active = pathName === path;
  return (
    <Link className={active ? "text-red-500" : ""} href={path}>
      {children}
    </Link>
  );
};

export default CustomLink;
