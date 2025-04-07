import type { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', 
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: "Patrick - Software Engineer",
  description: "Patrick's portfolio - Software Engineer and AI enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen overflow-hidden bg-white text-gray-900 dark:bg-[#1e1e1e] dark:text-gray-100">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
