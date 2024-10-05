import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Patrick",
  description: "Patrick profile as a software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        {children}
      </body>
    </html>
  );
}
