import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hami | The Designer Who Codes",
  description: "Portfolio of a Polyboard Designer, CorelDRAW Professional, and High-Performance Bot Developer. Bridging precision design with Python automation.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://newpydev.github.io/my-portfolio",
    title: "Hami | The Designer Who Codes",
    description: "Two crafts, one creator. Precision furniture design meets Python automation, bots, and AI-augmented web scraping.",
    siteName: "Hami Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
