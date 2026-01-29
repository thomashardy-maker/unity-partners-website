import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Unity Partners | Recruitment for Financial Services & Beyond in Hong Kong & Singapore',
  description: 'Unity Partners is a boutique recruitment agency specializing in financial services and non-financial services roles including COOs, Compliance, IT, Risk, Technology, and Operations in Hong Kong and Singapore. Expert matching for permanent and contract solutions.',
  keywords: 'recruitment, financial services, non-financial services, Hong Kong, Singapore, COO, Compliance, IT, Risk, Technology, Operations, executive search, headhunter, finance jobs, tech jobs',
  authors: [{ name: 'Unity Partners' }],
  openGraph: {
    title: 'Unity Partners | Recruitment for Financial Services & Beyond',
    description: 'Boutique recruitment agency specializing in financial services and beyond. Expert matching for COOs, Compliance, IT, Risk, Technology, and Operations roles in Hong Kong & Singapore.',
    url: 'https://unity-partners.com',
    siteName: 'Unity Partners',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unity Partners | Financial Services & Beyond Recruitment',
    description: 'Expert recruitment for financial services and beyond in Hong Kong & Singapore',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
