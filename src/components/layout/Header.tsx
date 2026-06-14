'use client'

import { Search, Bell } from 'lucide-react'
import { APP_CONFIG } from '@/data'

type Language = 'fr' | 'ar'

interface HeaderProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Search */}
      <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2.5 w-[320px]">
        <Search size={18} className="text-gray-400 mr-3 flex-shrink-0" />
        <input
          type="text"
          placeholder={language === 'fr' ? 'Search fleet or clients...' : 'بحث في الأسطول أو العملاء...'}
          className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-5">
        {/* Language Toggle */}
        <div className="flex items-center gap-1 text-sm font-semibold">
          <button
            onClick={() => onLanguageChange('fr')}
            className={`px-1.5 py-0.5 rounded transition-colors ${
              language === 'fr'
                ? 'text-gray-900'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >FR</button>
          <button
            onClick={() => onLanguageChange('ar')}
            className={`px-1.5 py-0.5 rounded transition-colors ${
              language === 'ar'
                ? 'text-gray-900'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >AR</button>
        </div>

        {/* Notification Bell */}
        <button className="relative text-gray-500 hover:text-gray-700 transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* User */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800">{APP_CONFIG.currentUser.name}</p>
            <p className="text-xs text-gray-500">{APP_CONFIG.currentUser.role}</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-bold">
            {APP_CONFIG.currentUser.initials}
          </div>
        </div>
      </div>
    </header>
  )
}
