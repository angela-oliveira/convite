import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// URL base do site - ajuste para o seu domínio quando publicar
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Convite Aniversário Ângela - Birthday Airlines",
  description: "Convite de aniversário estilo boarding pass para o 33º aniversário da Ângela",
  openGraph: {
    title: "Convite Aniversário Ângela - Birthday Airlines",
    description: "Convite de aniversário estilo boarding pass para o 33º aniversário da Ângela",
    type: "website",
    url: siteUrl,
    siteName: "Birthday Airlines",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Convite Aniversário Ângela - Birthday Airlines",
        type: "image/png",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convite Aniversário Ângela - Birthday Airlines",
    description: "Convite de aniversário estilo boarding pass para o 33º aniversário da Ângela",
    images: ["/og-image.png"],
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
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
