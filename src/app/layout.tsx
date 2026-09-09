import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeVars } from "@/components/theme-vars";
import { LocalBusinessJsonLd } from "@/components/structured-data";
import { createPageMetadata } from "@/lib/metadata";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createPageMetadata({
  title: "Aureon Relocations | Professional Moving & Relocation Services",
  description:
    "Aureon Relocations provides professional residential, commercial, corporate, and international relocation solutions in Abu Dhabi, UAE.",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <head>
        <ThemeVars />
      </head>
      <body className="flex min-h-full flex-col">
        <LocalBusinessJsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
