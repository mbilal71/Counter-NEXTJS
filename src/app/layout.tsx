import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xander Zone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
        <nav className=" bg-gradient-to-tr from-white to-black flex justify-between text-white text-2xl p-3 ">
          <div className="flex">
          <img src="/img/user.png" alt="" width="40" height="40" />
          <a className=" ml-2 font-semibold" href="/">
            XANDER.DEV
          </a>
          </div>
          <div>
            <a className="m-2  hover:underline font-semibold" href="/">
              Home
            </a>
            <a className="m-2  hover:underline font-semibold" href="about">
              About
            </a>
            <a className="m-2  hover:underline font-semibold" href="contact">
              Contact us
            </a>
          </div>
        </nav>

        {children}

        <footer className="bg-gray-900 text-white text-center py-4">
          <div className="container mx-auto">
            <p className="text-sm">© 2024 XANDER.DEV. All rights reserved.</p>
            <p className="text-xs mt-2">
              LG-53, Pearl City, Faisalabad, Pakistan
            </p>
            <p className="text-xs">
              Email: ahmadhassanch.dev@gmail.com | Phone: +92 344 4001724
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
