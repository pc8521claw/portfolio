import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raymond Lam | Vibe Coding Creator",
  description: "Vibe Coding Creator - Building production apps with AI-assisted development",
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
