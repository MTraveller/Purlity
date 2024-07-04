import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import { Genos } from "next/font/google";
import "@radix-ui/themes/styles.css";
import Navbar from "./components/Navbar";
import "./globals.css";
import "./theme-config.css";

const genos = Genos({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-genos",
});

export const metadata: Metadata = {
  title: "PURLITY - Purposeful & Quality Software",
  description:
    "A software company, which foundation, is derived from purpose and quality. PURLITY's mission is to contribute to the world and it's people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={genos.variable}>
      <body>
        <Theme
          appearance='dark'
          accentColor='cyan'
          grayColor='mauve'
          panelBackground='solid'
        >
          <Navbar />
          <main className='flex h-[calc(100%-40px)] flex-col max-w-screen-lg mx-auto items-center justify-center p-24'>
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
