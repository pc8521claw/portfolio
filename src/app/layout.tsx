import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raymond Lam | Web Developer",
  description: "Full-Stack Web Developer - Building elegant web solutions with modern technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
