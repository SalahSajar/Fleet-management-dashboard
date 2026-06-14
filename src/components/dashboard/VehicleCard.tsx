import { MapPin, AlertTriangle, Wrench } from 'lucide-react'
import { Vehicle, VehicleStatus } from '@/data/vehicles'

interface VehicleCardProps {
  vehicle: Vehicle
  language: 'fr' | 'ar'
}

const statusConfig: Record<VehicleStatus, { label: string; labelAr: string; bg: string; text: string }> = {
  available: { label: 'Available', labelAr: 'متاح', bg: 'bg-green-500', text: 'text-white' },
  rented: { label: 'Rented', labelAr: 'مؤجر', bg: 'bg-amber-100', text: 'text-amber-800' },
  maintenance: { label: 'Maintenance', labelAr: 'صيانة', bg: 'bg-red-500', text: 'text-white' },
  overdue: { label: '⚠ Overdue', labelAr: '⚠ متأخر', bg: 'bg-red-100', text: 'text-red-700' },
}

export default function VehicleCard({ vehicle, language }: VehicleCardProps) {
  const status = statusConfig[vehicle.status]

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative h-[140px] overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover"
        />
        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${status.bg} ${status.text}`}
        >
          {language === 'fr' ? status.label : status.labelAr}
        </span>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900">{vehicle.name}</h3>
        <p className="text-xs text-gray-400 mt-0.5">{vehicle.plate}</p>

        {/* Status-specific info */}
        {vehicle.status === 'available' && (
          <div className="flex items-center gap-1.5 mt-3 text-xs text-gray-500">
            <MapPin size={13} />
            <span>{vehicle.branch}</span>
          </div>
        )}

        {vehicle.status === 'rented' && vehicle.currentClient && (
          <div className="mt-3">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Current Client
            </p>
            <p className="text-sm font-medium text-gray-800 mt-0.5">
              {vehicle.currentClient}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              Return: {vehicle.returnDate}
            </p>
          </div>
        )}

        {vehicle.status === 'maintenance' && vehicle.maintenanceNote && (
          <div className="flex items-center gap-1.5 mt-3 text-xs text-red-600">
            <Wrench size={13} />
            <span>{vehicle.maintenanceNote}</span>
          </div>
        )}

        {vehicle.status === 'overdue' && (
          <div className="mt-3">
            <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider">
              Overdue by {vehicle.overdueBy} days
            </p>
            <p className="text-sm font-medium text-gray-800 mt-0.5">
              {vehicle.currentClient}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
