import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css"
import { lightTheme, darkTheme } from "@/styles/common/createThemeContract.css";
import PageTransition from "@/components/layouts/transition/PageTransition";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lightTheme}>
      <body>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
