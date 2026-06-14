'use client'

import {
  LayoutDashboard,
  Car,
  Calendar,
  Users,
  TrendingUp,
  Settings,
  LifeBuoy,
  LogOut,
} from 'lucide-react'
import { NAVIGATION } from '@/data'

type Language = 'fr' | 'ar'

interface SidebarProps {
  language: Language
  activeNavItem: string

}

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  Car,
  Calendar,
  Users,
  TrendingUp,
  Settings,
}

export default function Sidebar({ language, activeNavItem }: SidebarProps) {

  console.log("*** Active ID navigation Link")
  console.log(activeNavItem)

  return (
    <aside className="fixed top-0 left-0 h-screen w-[200px] bg-[#0F172A] flex flex-col z-50">
      {/* Logo */}
      <div className="px-5 pt-6 pb-8">
        <h1 className="text-white text-xl font-bold tracking-tight">Fleet Maître</h1>
        <p className="text-slate-500 text-[10px] font-semibold tracking-[0.15em] mt-0.5">MOROCCO LOGISTICS</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          {NAVIGATION.map((item) => {
            const Icon = iconMap[item.icon]
            const isActive = item.id === activeNavItem

            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'bg-white text-[#0F172A]' : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {Icon && <Icon size={18} />}
                  <span>{item.label[language]}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-6 space-y-1">
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <LifeBuoy size={18} />
          <span>{language === 'fr' ? 'Support' : 'الدعم'}</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-400 hover:text-red-300 hover:bg-white/5 transition-colors"
        >
          <LogOut size={18} />
          <span>{language === 'fr' ? 'Logout' : 'تسجيل الخروج'}</span>
        </a>
      </div>
    </aside>
  )
}
