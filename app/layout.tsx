import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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
  title: "Testing Next [TMH] first step",
  description: "Project to test new features of Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-800`}
      >
        <div className="grid grid-rows-[36px_1fr_36px] min-h-screen font-[family-name:var(--font-geist-sans)] w-full max-w-[960px] mx-auto bg-neutral-950">
          <header className="row-start-1 flex-wrap bg-neutral-900 p-2">
            <Link href="/">Home</Link>
          </header>
          {children}
          <footer className="row-start-3 flex-wrap bg-neutral-900 p-2">
            <div>Here we could have a nice footer</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
