'use client'

import Sidebar from './Sidebar'
import Header from './Header'

type Language = 'fr' | 'ar'

interface LayoutProps {
  children: React.ReactNode
  language: Language
  onLanguageChange: (lang: Language) => void
  activeNavItem: string
}

export default function Layout({ children, language, onLanguageChange, activeNavItem}: LayoutProps) {
  const year = new Date().getFullYear();

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen bg-gray-50">
      <Sidebar language={language} activeNavItem={activeNavItem} />
      <div className="ml-[200px]">
        <Header language={language} onLanguageChange={onLanguageChange} />
        <main className="p-6">
          {children}
        </main>
        <footer className="py-4 text-center text-xs text-gray-400 border-t border-gray-200">
          © {year} FLEET MAÎTRE LOGISTICS SOFTWARE. CASABLANCA, MOROCCO.
        </footer>
      </div>
    </div>
  )
}
