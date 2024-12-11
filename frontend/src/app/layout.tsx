import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Swift Share",
  description: "SwiftShare by Rishi Raj Bobbarapalli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body>
        {children}
      </body>
    </html>
  );
}
