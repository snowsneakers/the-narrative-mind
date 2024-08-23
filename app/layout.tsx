import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Narrative Mind",
  description: "Gabriella LaPorta, AMFT",
  icons: {
    icon: ["./favicon.ico"],
  },
  openGraph: {
    title: "The Narrative Mind",
    description: "Gabriella LaPorta, AMFT",
    url: "https://www.gabs-blog-24.netlify.app",
    siteName: "The Narrative Mind",
    icons: {
      icon: ["./favicon.ico"],
    },
    images: [
      {
        url: "https://raw.githubusercontent.com/snowsneakers/gabs-blog-24/d78a9ed1c3bc353f3df6377962baad0ad7def6d8/public/assets/logoshort.svg?token=AXB2ALOXJNJGGTKJ5W67RK3GEVMEQ",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body>
          {children}
          <Toaster />
        </body>
      </html>
    </SessionWrapper>
  );
}
