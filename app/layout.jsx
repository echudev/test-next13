import "./globals.css";
import Navigation from '@/components/Navigation'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "testing Next 13",
  description: "app app to learn how to use next.js version 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        {children}
        </body>
    </html>
  );
}
