import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "52weekends.co.uk Logo",
  description: "Logo design for 52weekends.co.uk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}