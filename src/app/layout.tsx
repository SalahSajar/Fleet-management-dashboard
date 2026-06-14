import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fleet Maître — Fleet Management Dashboard',
  description: 'Car rental fleet management dashboard for Moroccan SMEs',
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
