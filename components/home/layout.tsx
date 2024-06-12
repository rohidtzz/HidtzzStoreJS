import { Inter } from "next/font/google";

import Navbar from "./navbar";
import Footer from "./footer";
import BootomBar from "./bootomBar";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Navbar />

        <div className="flex justify-center ">
          {children}  
        </div>

        <Footer />
        <BootomBar/>

      </body>

    </html>
  );
}
