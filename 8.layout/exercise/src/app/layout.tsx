import React from "react";
import Link from "next/link";
import { ReactNode } from "react";
import "./globals.css";

const BasicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col">
          {/* header */}

          <header className="bg-purple-600 text-white p-4 text-lg">
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="hover:text-yellow-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="./about" className="hover:text-red-800">
                    ABout
                  </Link>
                </li>
                <li>
                  <Link href="./contact" className="hover:text-yellow-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          {/* Main page */}
          <div className="flex flex-1">
            <aside className="w-64 bg-purple-200 p-5">
              <ul className="text-2xl">
                <li>
                  <Link
                    href="./category/technology "
                    className="block  py-2 hover:bg-amber-400"
                  >
                    Techonology
                  </Link>
                </li>
                <li>
                  <Link
                    href="./category/design "
                    className=" block py-2 hover:bg-amber-400"
                  >
                    Design
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href="./category/bussiness "
                    className="block py-2 hover:bg-amber-400"
                  >
                    Bussiness
                  </Link>
                </li>
              </ul>
            </aside>
         


          {/* main content */}

          <main className="flex-1 p-6 bg-white">{children}</main>

          </div>


          {/* footer */}

          <footer className="bg-gray-400 text-white text-center p-4 ">
            <p>&copy; 2025 My website </p>


          </footer>









          
        </div>
      </body>
    </html>
  );
};

export default BasicLayout;
