import { MoreVertical } from 'lucide-react'

export default function BookingItem({
  month,
  day,
  vehicleName,
  clientName,
  duration,
}) {
  return (
    <div className="flex items-center gap-4 py-3">
      {/* Date badge */}
      <div className="w-14 h-14 rounded-xl bg-slate-100 flex flex-col items-center justify-center flex-shrink-0">
        <span className="text-[10px] font-bold text-red-500 uppercase">{month}</span>
        <span className="text-xl font-bold text-gray-900 leading-none">{day}</span>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900">{vehicleName}</p>
        <p className="text-xs text-gray-400 mt-0.5">
          {clientName} • {duration}
        </p>
      </div>

      {/* More */}
      <button className="text-gray-300 hover:text-gray-500 transition-colors flex-shrink-0">
        <MoreVertical size={18} />
      </button>
    </div>
  )
}
