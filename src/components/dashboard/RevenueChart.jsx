
export default function RevenueChart({ data }) {
  const maxValue = Math.max(...data.map((d) => d.value))

  return (
    <div className="flex items-end justify-between gap-6 h-[160px] px-4">
      {data.map((bar, i) => {
        const height = (bar.value / maxValue) * 100

        return (
          <div key={i} className="flex flex-col items-center gap-2 flex-1">
            {/* Bar */}
            <div className="w-full flex items-end justify-center" style={{ height: '140px' }}>
              <div
                className={`w-full max-w-[64px] rounded-t-lg transition-all ${
                  bar.isProjected
                    ? 'border-2 border-dashed border-slate-300 bg-transparent'
                    : bar.isToday
                    ? 'bg-[#1e293b]'
                    : 'bg-[#cbd5e1]'
                }`}
                style={{ height: `${height}%` }}
              />
            </div>
            {/* Label */}
            <span
              className={`text-xs font-semibold uppercase ${
                bar.isToday ? 'text-gray-900' : 'text-gray-400'
              }`}
            >
              {bar.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
