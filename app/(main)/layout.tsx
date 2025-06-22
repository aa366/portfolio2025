"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Vortex} from "@/components/ui/vortex"
import {WavyBackground} from "@/components/ui/wavy-background"
import { useTheme } from "next-themes"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const { theme } = useTheme();
  return (
      <>
     <Vortex containerClassName="w-screen h-screen fixed t-0 left-0 -z-99 hidden dark:block "  >
    </Vortex>
    <WavyBackground containerClassName="w-screen h-screen fixed t-0 left-0 -z-99 block dark:hidden" backgroundFill="white">
      </WavyBackground>
        <Navbar />
        <div className="">
          {children}
        </div>
        <Footer />
        
     </>
  );
}