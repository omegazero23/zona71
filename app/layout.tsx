import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zona 71 - Espacio Creativo de Arte y Formación",
  description:
    "Un espacio creativo para brindar experiencias significativas a través del arte, el movimiento y la formación. Cursos de verano, clases de arte y salsa para niños y adultos.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
