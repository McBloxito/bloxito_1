import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { FontPreconnect } from "./components/FontPreconnect"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Bloxito - Servidor de Minecraft",
  description: "Únete al mejor servidor de Minecraft. IP: play.bloxito.com",
  icons: {
    icon: [
      {
        url: "/images/bloxito-512.png",
        type: "image/png",
      },
    ],
    apple: "/images/bloxito-512.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <FontPreconnect />
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
