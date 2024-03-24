import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Eni next",
  description: "This is my first next app, aka my draft",
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
