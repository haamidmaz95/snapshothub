import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SnapshotHub — Pre-Built GoHighLevel Snapshots for Every Industry",
  description:
    "Browse 25+ industry-specific GHL snapshots. Pre-built CRM, pipelines, automations, and funnels. Install in 60 seconds.",
  openGraph: {
    title: "SnapshotHub — Pre-Built GoHighLevel Snapshots for Every Industry",
    description:
      "Browse 25+ industry-specific GHL snapshots. Pre-built CRM, pipelines, automations, and funnels. Install in 60 seconds.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapshotHub — Pre-Built GHL Snapshots",
    description:
      "Browse 25+ industry-specific GHL snapshots. Install in 60 seconds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
