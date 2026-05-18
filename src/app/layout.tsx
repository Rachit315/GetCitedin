import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GetCitedin | Reddit Marketing Agency for B2B Growth",
  description:
    "Turn Reddit into your highest converting growth channel. We place your product inside real conversations across 200+ subreddits — driving awareness, trust, and sign-ups at scale.",
  keywords: [
    "Reddit marketing",
    "Reddit growth agency",
    "B2B SaaS marketing",
    "community-led growth",
    "subreddit marketing",
  ],
  openGraph: {
    title: "GetCitedin | Reddit Marketing Agency",
    description:
      "Turn Reddit into your highest converting growth channel. 150M+ impressions delivered.",
    type: "website",
    locale: "en_US",
    siteName: "GetCitedin",
  },
  twitter: {
    card: "summary_large_image",
    title: "GetCitedin | Reddit Marketing Agency",
    description:
      "Turn Reddit into your highest converting growth channel.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
