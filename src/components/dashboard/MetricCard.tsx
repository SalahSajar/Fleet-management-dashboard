import { LucideIcon } from 'lucide-react'

interface MetricCardProps {
  value: number
  label: string
  icon: LucideIcon
  borderColor: string
  iconBgColor: string
  iconColor: string
}

export default function MetricCard({
  value,
  label,
  icon: Icon,
  borderColor,
  iconBgColor,
  iconColor,
}: MetricCardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-5 border-l-4 ${borderColor} flex items-center justify-between shadow-sm`}
    >
      <div>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">
          {label}
        </p>
      </div>
      <div className={`w-10 h-10 rounded-lg ${iconBgColor} flex items-center justify-center`}>
        <Icon size={20} className={iconColor} />
      </div>
    </div>
  )
}
