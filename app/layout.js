import {ClerkProvider} from '@clerk/nextjs';
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from './../components/Footer';
import Header from './../components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "WealthGenix",
  description: "Next-gen AI-powered wealth management",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={` ${inter.className} `}
      >
        <Header/>
        <main className="min-h-screen">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
