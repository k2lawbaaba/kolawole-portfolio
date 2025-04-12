import { ThemeProviders } from "./components/ThemeProvider";
import "./globals.css";
// import { AppProps } from 'next/app'
export const metadata = {
  title: "Kolawole Abiodun",
  description: "Kolawole Abiodun Michael Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://fip6wxdyr5vppwsv.public.blob.vercel-storage.com/myprofilephoto/abbeey-GzCSlN4kl93806UBcTWp680PmQRPP9.ico"
        ></link>
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
        className={`font-montserrat antialiased m-0 text-center w-full prose dark:prose-dark bg-white text-black dark:bg-black dark:text-white`}
      >
        <ThemeProviders attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
