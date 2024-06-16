// import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "./navbar";
import Footer from "./footer";
import BootomBar from "./bootomBar";


const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "HidtzzStore",
//   description: "Lest Make some new",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Navbar />

          {children}

        <Footer />
        <BootomBar/>

      </body>

    </html>
  );
}
