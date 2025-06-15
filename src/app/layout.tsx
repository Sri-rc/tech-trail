import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap", // Improved font loading performance
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'),
  title: {
    default: "MTC Handmade Kitchens - Bespoke & Made to Measure Kitchen Design",
    template: "%s | MK Handmade Kitchens"
  },
  description: "Design and order your new kitchen online today. Over 35 years experience designing handmade, bespoke kitchens. Quality craftsmanship from build to delivery.",
  keywords: [
    "handmade kitchens",
    "bespoke kitchen design", 
    "made to measure kitchens",
    "kitchen design online",
    "custom kitchens",
    "kitchen planning",
    "handcrafted cabinets"
  ],
  authors: [{ name: "MTC Handmade Kitchens" }],
  creator: "MTC Handmade Kitchens",
  publisher: "MTC Handmade Kitchens",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "MTC Handmade Kitchens",
    title: "MTC Handmade Kitchens - Bespoke & Made to Measure Kitchen Design",
    description: "Design and order your new kitchen online today. Over 35 years experience designing handmade, bespoke kitchens.",
    images: [
      {
        url: "/assets/images/Hero-Image.png",
        width: 1200,
        height: 630,
        alt: "Modern bespoke kitchen design by MK Handmade Kitchens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MTC Handmade Kitchens - Bespoke & Made to Measure Kitchen Design",
    description: "Design and order your new kitchen online today. Over 35 years experience designing handmade, bespoke kitchens.",
    images: ["/assets/images/Hero-Image.png"],
    creator: "@mTChandmadekitchens",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
  },
  alternates: {
    canonical: "/",
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        {/* Viewport with proper mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Theme colors for browser chrome - extracted from your brand colors */}
        <meta name="theme-color" content="#2C1810" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1a0f0a" media="(prefers-color-scheme: dark)" />
        <meta name="msapplication-TileColor" content="#2C1810" />
        
        {/* Apple-specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="MK Kitchens" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for social media domains */}
        <link rel="dns-prefetch" href="//facebook.com" />
        <link rel="dns-prefetch" href="//twitter.com" />
        <link rel="dns-prefetch" href="//instagram.com" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="origin-when-cross-origin" />
      </head>
      <body
        className={`${roboto.variable} font-body antialiased bg-white text-gray-900`}
        suppressHydrationWarning={true}
      >
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
