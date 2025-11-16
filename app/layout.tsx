import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://jaworconstructions.com'),
  title: {
    default: 'JAWOR 2023 - Building Excellence, Shaping Futures',
    template: '%s | JAWOR 2023'
  },
  description: 'Leading construction company in Mukono, Uganda. Delivering exceptional construction solutions with quality, safety, and sustainability. Building construction, project management, design and build services.',
  keywords: [
    'construction company Uganda',
    'building construction Mukono',
    'general supplies Uganda',
    'renovation services',
    'project management',
    'construction Mukono',
    'JAWOR construction',
    'building contractors Uganda'
  ],
  authors: [{ name: 'JAWOR 2023 General Supplies and Construction Company Limited' }],
  creator: 'JAWOR 2023',
  publisher: 'JAWOR 2023',
  
  // Open Graph (for social media sharing)
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    url: 'https://jaworconstructions.com',
    title: 'JAWOR 2023 - Building Excellence, Shaping Futures',
    description: 'Leading construction company in Mukono, Uganda. Delivering exceptional construction solutions with quality, safety, and sustainability.',
    siteName: 'JAWOR 2023',
    images: [
      {
        url: '/og-image.jpg', // You'll need to create this (1200x630px)
        width: 1200,
        height: 630,
        alt: 'JAWOR 2023 Construction Company',
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'JAWOR 2023 - Building Excellence, Shaping Futures',
    description: 'Leading construction company in Mukono, Uganda.',
    images: ['/og-image.jpg'],
  },
  
  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  
  // Additional metadata
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
  
  // Verification (add your verification codes if you have them)
  verification: {
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0284c7" />
        <link rel="canonical" href="https://jaworconstructions.com" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}