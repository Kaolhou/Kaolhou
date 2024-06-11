import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navigation from "@/components/main/navigation";
import Providers from "@/components/providers";
import Footer from "@/components/main/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaolhou",
  description: "Curricular website by André Mendes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className + " min-h-screen"}>
        <Providers>
          <main className="overflow-x-hidden min-h-screen">
            <Navigation />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
