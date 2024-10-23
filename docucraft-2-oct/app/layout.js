import { getDocuments } from "@/lib/doc";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Docucraft-2",
  description: "Generated by protocol",
};

const allDocuments = getDocuments();
//console.log(allDocuments);
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="h-full lg:ml-72 xl:ml-80">
          <Header docs={allDocuments} />

          <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
            <main className="flex-auto py-12">
              <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
                <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"></div>
                </div>
              </div>
            </main>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
