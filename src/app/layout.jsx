import './globals.css'

export const metadata = {
  title: 'Fleet Maître — Fleet Management Dashboard',
  description: 'Car rental fleet management dashboard for Moroccan SMEs',
}

export default function RootLayout({children}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
