import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Ferramenta Aviator - Sistema Licenciado para Ganhos",
  description:
    "Ferramenta licenciada para minimizar perdas e maximizar ganhos no Aviator. Sistema gratuito e confiável.",
  keywords: "aviator, ferramenta, sistema, ganhos, moçambique, MZN",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <head>
        <meta name="google-site-verification" content="lrfXnDIgUTuzmP2fNC4M6sUOpiewQPZbv2JIgM1xLlk" />
      </head>
      <body className="font-sans bg-background text-foreground min-h-screen">{children}</body>
    </html>
  )
}
