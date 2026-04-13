import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TOPTIMIZE | Flexible Freelance & Part-Time Opportunities",
  description:
    "TOPTIMIZE connects students and skilled individuals with flexible freelance and part-time opportunities while helping businesses access top talent.",
  keywords: [
    "freelance jobs",
    "part-time opportunities",
    "student jobs",
    "talent marketplace",
    "skill-based work",
    "flexible work",
    "career growth",
    "TOPTIMIZE",
  ],
  openGraph: {
    title: "TOPTIMIZE | Flexible Freelance & Part-Time Opportunities",
    description:
      "TOPTIMIZE connects students and skilled individuals with flexible freelance and part-time opportunities while helping businesses access top talent.",
    siteName: "TOPTIMIZE",
    type: "website",
    locale: "en_IN",
    url: "https://toptimize.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "TOPTIMIZE | Flexible Freelance & Part-Time Opportunities",
    description:
      "Connecting talented individuals with real-world freelance and part-time opportunities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-[#0f172a] selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
