import { Audiowide, Nunito_Sans } from "next/font/google";
import "./globals.css";

const audiowide = Audiowide({
  variable: "--font-audiowide",
  weight: ['400'],
  subsets: ["latin"],
});

const geistMono = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="w-screen h-full relative overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
