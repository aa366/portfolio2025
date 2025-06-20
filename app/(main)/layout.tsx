"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <Navbar />
        <div className="">
          {children}
        </div>
        <Footer />
     </>
  );
}