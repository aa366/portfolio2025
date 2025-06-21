
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Abdelwahab Portfolio",
  description: "Personal portfolio ,that show me good i hope 😂",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <html lang="en" suppressHydrationWarning>
      <body>
         <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
         </ThemeProvider>
      </body>
    </html>

  );
}
