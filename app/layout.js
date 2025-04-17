import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Spotify Mood",
  description: "Created by murillobazz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} antialiased min-h-screen min-w-screen`}
      >
        {/* TODO - Por que o main está largo demais e fazendo scroll lateral na tela? */}
        <main>{children}</main>
        <footer className="absolute inset-x-0 bottom-0 text-center text-xs w-full flex justify-center py-2"><p>Developed by murillobazz</p></footer>
      </body>
    </html>
  );
}
