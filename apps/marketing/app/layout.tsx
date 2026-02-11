import type { Metadata } from "next";
import { outfit, switzer } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "WFlows",
  description: "AI-powered revenue and operations systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${switzer.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
