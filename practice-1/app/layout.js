import { Inter } from "next/font/google";
import CustomLink from "./components/CustomLink";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b border-gray-500">
          <ul className="flex gap-5 p-4">
            <li>
              <CustomLink path={"/"}>Home</CustomLink>
            </li>
            <li>
              <CustomLink path={"/dashboard/setting"}>Setting</CustomLink>
            </li>
            <li>
              <CustomLink path={"/dashboard/analytic"}>Analytic</CustomLink>
            </li>
            <li>
              <CustomLink path={"/heavy"}>Heavy</CustomLink>
            </li>
            <li>
              <CustomLink path={"/dashboard/blogs"}>Blogs</CustomLink>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
