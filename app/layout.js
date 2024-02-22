import NavBar from "@/components/NavBar";
import { Raleway } from "next/font/google";
import "./globals.css";

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Travel Up - Discover your amazing city",
  description: "Discover your amazing city",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
