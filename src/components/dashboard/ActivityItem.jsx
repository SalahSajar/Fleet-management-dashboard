import { ArrowUpRight, ArrowDownLeft } from 'lucide-react'

export default function ActivityItem({
  type,
  vehicleName,
  time,
  branch,
  detail,
  detailColor = 'text-gray-600',
}) {
  const isOutbound = type === 'outbound'

  return (
    <div className="flex items-start gap-3 py-3">
      {/* Icon */}
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
          isOutbound ? 'bg-orange-100' : 'bg-green-100'
        }`}
      >
        {isOutbound ? (
          <ArrowUpRight size={18} className="text-orange-600" />
        ) : (
          <ArrowDownLeft size={18} className="text-green-600" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900">
          {vehicleName} {isOutbound ? 'Outbound' : 'Returned'}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">
          {time} • {branch}
        </p>
        <p className={`text-xs mt-1 ${detailColor}`}>{detail}</p>
      </div>
    </div>
  )
}
