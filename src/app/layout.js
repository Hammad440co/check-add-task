import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomNavbar from "@/component/CustonNavbar"; // ✅ Sahi path
import Footer from "@/component/Footer";
import UserProvider from "@/context/userProvider";  // ✅ Capital 'U'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black text-white`}>
        <ToastContainer />
        <UserProvider>
          <CustomNavbar />
          <div className="bg-black text-white">{children}</div>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
