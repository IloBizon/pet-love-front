import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";
import Header from "@/components/header";

const montserrat = Montserrat({
  subsets: ["cyrillic","latin"],
  weight: ["300", "400","600","700"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "PetLove",
  description: "Care of your pets"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${montserrat.className}`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
