import VehicleReport from "@/components/layout/fleet/VehicleReport";

import {TriangleAlert, CircleUserRound, User, CalendarSync} from "lucide-react";

import {vehicleStatuses} from "@/data";

// import {} from "lucide-react";

export const MaintenanceReport = ({vehicleObj}) => {
	
	return (
		<VehicleReport status={vehicleObj.status}>
			<div className="vehicleMaintenanceReport__CONTENT_WRAPPER flex items-start gap-[10px]">
				<div className="vehicleMaintenanceReport__ICON_WRAPPER">
					<TriangleAlert size={20} color={vehicleStatuses[vehicleObj.status]["primaryTextColor"]} />
				</div>
				<div className="vehicleMaintenanceReport__TYPOS_WRAPPER">
					<h6 style={{color: vehicleStatuses[vehicleObj.status]["primaryTextColor"]}} className={`vehicleMaintenanceReport__TITLE text-sm font-semibold`}>{vehicleObj.maintenanceNote}</h6>
					{vehicleObj.maintenanceNoteDesc && <p style={{color: vehicleStatuses[vehicleObj.status]["primaryTextColor"]}} className="vehicleMaintenanceReport__DETAILS mt-[5px] text-xs">{vehicleObj.maintenanceNoteDesc}</p>}
				</div>
			</div>
		</VehicleReport>
	)
}

export const OverdueReport = ({vehicleObj}) => {
	return (
		<VehicleReport status={vehicleObj.status}>
			<div className="vehicleOvedue__CONTENT_WRAPPER">
				<h6 style={{color: vehicleStatuses[vehicleObj.status]["primaryTextColor"]}} className={`text-xs uppercase mb-[5px]`}>overdue customer: </h6>
				<div className="overdueCustomer__BLOCK flex items-center gap-[5px]">
					<CircleUserRound color={vehicleStatuses[vehicleObj.status]["primaryTextColor"]} size={20} />
					<span style={{color: vehicleStatuses[vehicleObj.status]["primaryTextColor"]}} className="text-sm font-semibold capitalize">{vehicleObj.currentClient}</span>
				</div>
			</div>
		</VehicleReport>
	)
}

export const RentedReport = ({vehicleObj}) => {
	return (
		<VehicleReport status={vehicleObj.status}>
			<div className="rentDetails__BLOCK grid gap-[15px]">
				<div className="currentCustomerDetails__BLOCK">
					<div className="rentDetailsBlock__CONTENT_WAPPER flex items-center gap-[10px]">
						<User color={vehicleStatuses[vehicleObj.status]["primaryTextColor"]} size={20} />

						<span style={{color: vehicleStatuses[vehicleObj.status]["primaryTextColor"]}} className="rentDetail__EL text-sm font-semibold">{vehicleObj.currentClient}</span>
					</div>
				</div>
				<div className="vehicleReturnDate__BLOCK">
					<div className="rentDetailsBlock__CONTENT_WAPPER flex items-center gap-[10px]">
						<CalendarSync color={vehicleStatuses[vehicleObj.status]["secondaryTextColor"]} size={20} />

						<span style={{color: vehicleStatuses[vehicleObj.status]["secondaryTextColor"]}} className="rentDetail__EL text-sm">Returns: {vehicleObj.returnDate}</span>
					</div>
				</div>
			</div>
		</VehicleReport>
	)
}