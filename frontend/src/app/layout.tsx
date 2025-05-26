import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Providers from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GydeXP frontend Assignment.",
  description: "Gydexp Frontend is a responsive web application that fetches and displays user requests from the database in a clean, tabular UI. The interface renders only those requests with a pending status, allowing for focused and efficient request management. Built with modern frontend practices, the application ensures clarity and accessibility across devices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <main className="w-full flex">
            <Sidebar />
            <div className="w-full lg:pl-4 lg:pt-4 overflow-y-scroll max-h-screen">
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
