import { LoyaltyTier } from '@/data/clients'
import { LOYALTY_COLORS } from '@/data'

interface TopClient {
  initials: string
  name: string
  rentals: number
  detail: string
  tier: LoyaltyTier
}

interface TopClientsProps {
  clients: TopClient[]
  language: 'fr' | 'ar'
}

const tierLabels: Record<LoyaltyTier, { fr: string; ar: string }> = {
  gold: { fr: 'GOLD', ar: 'ذهبي' },
  silver: { fr: 'SILVER', ar: 'فضي' },
  bronze: { fr: 'BRONZE', ar: 'برونزي' },
  new: { fr: 'NEW', ar: 'جديد' },
}

const tierBgColors: Record<LoyaltyTier, string> = {
  gold: 'bg-yellow-50',
  silver: 'bg-gray-50',
  bronze: 'bg-orange-50',
  new: 'bg-blue-50',
}

const tierInitialBg: Record<LoyaltyTier, string> = {
  gold: 'bg-yellow-500',
  silver: 'bg-gray-400',
  bronze: 'bg-orange-500',
  new: 'bg-blue-500',
}

export default function TopClients({ clients, language }: TopClientsProps) {
  return (
    <div className="space-y-3">
      {clients.map((client, i) => {
        const colors = LOYALTY_COLORS[client.tier]
        return (
          <div
            key={i}
            className={`flex items-center gap-3 p-3 rounded-xl ${tierBgColors[client.tier]}`}
          >
            {/* Initials */}
            <div
              className={`w-10 h-10 rounded-lg ${tierInitialBg[client.tier]} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
            >
              {client.initials}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900">{client.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">
                {client.rentals} {language === 'fr' ? 'Rentals' : 'إيجارات'} • {client.detail}
              </p>
            </div>

            {/* Tier badge */}
            <span
              className={`px-2 py-1 rounded text-[10px] font-bold ${colors.bg} ${colors.text} ${colors.border} border`}
            >
              {tierLabels[client.tier][language]}
            </span>
          </div>
        )
      })}
    </div>
  )
}
