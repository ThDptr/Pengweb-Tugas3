import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "THD Review Analyzer - Analisis Ulasan Berbasis AI",
  description:
    "Analisis sentimen dan ekstraksi insight dari ulasan produk menggunakan kecerdasan buatan. Dibuat oleh Tengku Hafid Diraputra (123140043)",
  keywords: ["review analyzer", "sentiment analysis", "AI", "THD", "product reviews", "natural language processing"],
  authors: [{ name: "Tengku Hafid Diraputra", url: "https://github.com/tengkuhafidd" }],
  creator: "Tengku Hafid Diraputra",
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/images/logo-thd.png",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
