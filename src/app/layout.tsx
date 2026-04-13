import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karan Jung Budhathoki | Full-Stack Developer & Creative Technologist",
  description:
    "Premium full-stack developer portfolio showcasing modern web development, UI/UX design, SEO, branding, and immersive digital experiences from Kathmandu, Nepal.",
  keywords:
    "Karan Jung Budhathoki, Full-Stack Developer, Creative Technologist, Nepal Developer, React Developer, Next.js Portfolio, UI UX Designer, SEO Specialist, WordPress Developer, Cybersecurity, Portfolio 2026",
  openGraph: {
    title: "Karan Jung Budhathoki | Full-Stack Developer",
    description:
      "Premium full-stack developer portfolio showcasing modern web development, UI/UX design, SEO, branding, and immersive digital experiences.",
    url: "https://karanjungbudhathoki.com.np",
    siteName: "Karan Jung Budhathoki Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karan Jung Budhathoki | Full-Stack Developer",
    description:
      "Premium full-stack developer portfolio showcasing modern web development, UI/UX design, SEO, branding, and immersive digital experiences.",
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
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
