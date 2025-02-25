import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import {  ProductProvider } from "@/context/AppContext";
import "./globals.css";


const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata: Metadata = {
  title: "Billy Scents",
  description: "Developed By Elversh Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased text-gray-700 overflow-x-hidden`}
      >
           <ProductProvider>
            {children}
          </ProductProvider>
      </body>
    </html>
  );
}
