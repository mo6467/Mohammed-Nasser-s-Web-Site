import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
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
  title: "Mohammed Nasser - Backend Engineer & AI Researcher",
  description: "Backend Engineer specializing in Fintech, Regtech, and AGI Research at DataGear and Turing. Expert in Java, Python, AI/LLM evaluation, and distributed systems.",
  keywords: ["Mohammed Nasser", "Backend Engineer", "Java", "Python", "Fintech", "Regtech", "AGI", "AI", "LLM", "Turing", "DataGear"],
  authors: [{ name: "Mohammed Nasser Ibrahim" }],
  openGraph: {
    title: "Mohammed Nasser - Portfolio",
    description: "Backend Engineer & AI Researcher - Building the future of Fintech and AGI",
    url: "https://mohammednasser.dev",
    siteName: "Mohammed Nasser Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Nasser - Portfolio",
    description: "Backend Engineer & AI Researcher",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
