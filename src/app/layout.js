/* eslint-disable @next/next/no-page-custom-font */
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Kolawole Abiodun",
  description: "Kolawole Abiodun Michael Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/images/Abbeey.ico"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Shantell+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`font-montserrat antialiased m-0 text-center w-full`}
      >
        {children}
      </body>
    </html>
  );
}
