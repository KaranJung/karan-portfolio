import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#6366f1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Karan Jung Budhathoki | Full-Stack Developer & Creative Technologist",
  description:
    "Senior Full-Stack Developer specializing in modern web technologies, video editing, graphic design, SEO, and cybersecurity based in Kathmandu, Nepal.",
  keywords:
    "Karan Jung Budhathoki, Full-Stack Developer, Web Developer, Nepal, React, PHP, Python, WordPress, SEO, Cybersecurity, Video Editor, Graphic Designer",
  authors: [{ name: "Karan Jung Budhathoki" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Karan Jung Budhathoki | Full-Stack Developer",
    description:
      "Crafting immersive digital experiences from Kathmandu, Nepal.",
    url: "https://karanjung.github.io/",
    siteName: "Karan Jung Budhathoki Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karan Jung Budhathoki | Full-Stack Developer",
    description:
      "Crafting immersive digital experiences from Kathmandu, Nepal.",
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  other: {
    "google-adsense-account": "ca-pub-7749421058759119",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Karan Jung Budhathoki",
    "url": "https://karanjung.github.io/",
    "jobTitle": "Full-Stack Developer & Creative Technologist",
    "sameAs": ["https://github.com/KaranJung"]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7749421058759119"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
