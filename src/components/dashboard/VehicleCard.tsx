import Image from "next/image";

import { MapPin, Wrench } from 'lucide-react';
import { Vehicle, vehicleStatuses } from '@/data/vehicles';

interface VehicleCardProps {
  vehicle: Vehicle
  language: 'fr' | 'ar'
}

// const statusConfig: Record<VehicleStatus, { label: string; labelAr: string; bg: string; text: string }> = {
//   available: { label: 'Available', labelAr: 'متاح', bg: 'bg-green-500', text: 'text-white' },
//   rented: { label: 'Rented', labelAr: 'مؤجر', bg: 'bg-amber-100', text: 'text-amber-800' },
//   maintenance: { label: 'Maintenance', labelAr: 'صيانة', bg: 'bg-red-500', text: 'text-white' },
//   overdue: { label: '⚠ Overdue', labelAr: '⚠ متأخر', bg: 'bg-red-100', text: 'text-red-700' },
// }

export default function VehicleCard({ vehicle, language }: VehicleCardProps) {

  return (
    <div className="relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {/* --- Vehicle Thumbnail --- */}
      <div className="vehicle_card__THUMBNAIL relative aspect-[16/10]">
        <Image src={vehicle.image} fill={true}  style={{objectFit: "cover"}} alt={vehicle.name} />
      </div>
      {/**************************************/}

      {/* --- Fleet Vehicle Status Label --- */}
      <span style={{backgroundColor: `${vehicleStatuses[vehicle.status]["bg"]}ad`, color: vehicleStatuses[vehicle.status]["primaryTextColor"] }} className={`fleeVehicle__STATUS backdrop-blur-sm pointer-events-none absolute top-[10px] right-[10px] uppercase text-xs font-semibold py-[7px] px-[15px] rounded-full`}>{language === 'fr' ? vehicleStatuses[vehicle.status]["label"] : vehicleStatuses[vehicle.status]["labelAr"]}</span>
      {/**************************************/}


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
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Current Client</p>
            <p className="text-sm font-medium text-gray-800 mt-0.5">{vehicle.currentClient}</p>
            <p className="text-xs text-gray-400 mt-0.5">Return: {vehicle.returnDate}</p>
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
            <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider">Overdue by {vehicle.overdueBy} days</p>
            <p className="text-sm font-medium text-gray-800 mt-0.5">{vehicle.currentClient}</p>
          </div>
        )}
      </div>
    </div>
  )
}
