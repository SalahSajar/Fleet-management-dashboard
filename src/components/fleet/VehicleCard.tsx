import {MapPin, EllipsisVertical} from "lucide-react";
import {Fragment} from "react"

import Image from "next/image";
import Link from "next/link";

import {MaintenanceReport, OverdueReport, RentedReport, AvailableCard} from "@/components/fleet/VehicleReports";
import QuickControls from "@/components/fleet/QuickControls";

import {vehicleStatuses} from "@/data";

export const VerticalVehicleCard = ({vehicleObj, vehicleWithOpenQCB, changeVehicleQuickOptionsState}) => {
	const vehiclePlateDetails = vehicleObj.plate.split("-");

	const activeQC = vehicleObj.id === vehicleWithOpenQCB;

	return (
		<li key={vehicleObj.id} data-id={vehicleObj.id} className="fleetVehicle__CARD rounded-2xl overflow-hidden bg-red-200">
			<div className="fleetVehicle_card__CONTENT_WRAPPER relative flex flex-col h-full bg-white">
				{/* --- Fleet Vehicle Thumbnail --- */}
				<div className="fleetVehicle_card__THUMBNAIL relative aspect-[16/10]">
					<Image src={vehicleObj.image} fill={true}  style={{objectFit: "cover"}} alt={vehicleObj.name} />
				</div>
				{/*****************************/}

				<div className="fleetVehicle__DETAILS__CONTAINER grid items-baseline flex-1 gap-[15px] p-[15px]">
					<div className="fleetVehicle__INFOS_BLOCK">
						<div className="fleetVehicle_infos__CONTENT_WRAPPER">
							<div className="fleetVehicle_nameAndModel__CONTAINER flex items-center justify-between">
								<h2 className="fleetVehicle__NAME text-lg font-semibold text-gray-800">{vehicleObj.name}</h2>
								<span className="fleetVehicle__YEAR text-xs text-gray-500 font-semibold px-[10px] py-[3px] bg-cyan-100">{vehicleObj.year}</span>
							</div>

							<div className="fleetVehicle_branchCity__BLOCK flex gap-[5px] items-center pt-[5px] pb-[10px]">
								<MapPin size={16} />
								<span className="fleetVehicle_branchCity__EL text-sm text-gray-900">{vehicleObj.branch}</span>
							</div>

							<div className="fleetVehicle__PLATE border border-gray-200 w-fit">
								<div className="fleetVehicle_plateDetails__CONTAINER px-[10px] py-[5px] flex justify-between gap-[10px]">
									{vehiclePlateDetails.map((detail, idx) => {
										return (
											<Fragment>
												<span className="fleetVehicle_plate__DETAIL text-sm text-gray-900">{detail}</span>
												{idx+1 < vehiclePlateDetails.length && <div className="fleetVehicle_plateDetails__SEPERATOR w-px bg-gray-200"></div>}
											</Fragment>
										)
									})}
								</div>
							</div>
						</div>
					</div>

					{vehicleObj.status === "maintenance" && <MaintenanceReport vehicleObj={vehicleObj} />}
					{vehicleObj.status === "overdue" && <OverdueReport vehicleObj={vehicleObj} />}
					{vehicleObj.status === "rented" && <RentedReport vehicleObj={vehicleObj} />}
					{/*{vehicleObj.status === "available" && <MaintenanceReport vehicleObj={vehicleObj} />}*/}

					<div className="fleeVehicle__CTAS_BLOCK pt-[15px] self-end border-t">
						<div className="fleeVehicle_ctas__CONTAINER flex items-center gap-[10px]">
							<Link className="text-xs font-semibold rounded-md bg-[#E8EFF3] text-gray-800 flex-1 text-center p-[10px]" href={`/fleet/${vehicleObj.id}`}>View Details</Link>
							<Link className="text-xs font-semibold rounded-md bg-[--main-purple] hover:bg-[--secondary-purple] transition-colors text-white flex-1 text-center p-[10px]" href="/">Update status</Link>
						</div>
					</div>
				</div>

				{/* --- Fleet Vehicle Status Label --- */}
					<span style={{backgroundColor: `${vehicleStatuses[vehicleObj.status]["bg"]}ad`, color: vehicleStatuses[vehicleObj.status]["primaryTextColor"] }} className={`fleeVehicle__STATUS backdrop-blur-sm pointer-events-none absolute top-[10px] right-[10px] uppercase text-xs font-semibold py-[7px] px-[15px] rounded-full`}>{vehicleObj.status}</span>
				{/**************************************/}

				{/* --- Fleet Vehicle Quick Controls Btn  --- */}
				<QuickControls cardType="cardDisplay" vehicleID={vehicleObj.id} changeVehicleQuickOptionsState={() => changeVehicleQuickOptionsState(vehicleObj.id)} active={activeQC} />
				{/**************************************/}
			</div>
		</li>
	)
}

export const HorizontalVehicleCard = ({vehicleObj, vehicleWithOpenQCB, changeVehicleQuickOptionsState}) => {
	const vehiclePlateDetails = vehicleObj.plate.split("-");

	const activeQC = vehicleObj.id === vehicleWithOpenQCB;

	return (
		<li key={vehicleObj.id} data-id={vehicleObj.id} className="fleetVehicle__CARD rounded-2xl overflow-hidden bg-red-200">
			<div className="fleetVehicle_card__CONTENT_WRAPPER relative flex h-full bg-white">
				{/* --- Fleet Vehicle Thumbnail --- */}
				<div className="fleetVehicle_card__THUMBNAIL_AND_STATUS__CONTAINER relative basis-80 aspect-[16/10]">
					<div className="fleetVehicle_card__THUMBNAIL relative h-full">
						<Image src={vehicleObj.image} fill={true}  style={{objectFit: "cover"}} alt={vehicleObj.name} />
					</div>

					{/* --- Fleet Vehicle Status Label --- */}
						<span style={{backgroundColor: `${vehicleStatuses[vehicleObj.status]["bg"]}ad`, color: vehicleStatuses[vehicleObj.status]["primaryTextColor"] }} className={`fleeVehicle__STATUS backdrop-blur-sm pointer-events-none absolute top-[10px] right-[10px] uppercase text-xs font-semibold py-[7px] px-[15px] rounded-full`}>{vehicleObj.status}</span>
					{/**************************************/}
				</div>
				
				{/*****************************/}

				<div className="fleetVehicle__DETAILS__CONTAINER grid items-baseline flex-1 gap-[15px] p-[15px]">
					<div className="fleetVehicle__INFOS_BLOCK">
						<div className="fleetVehicle_infos__CONTENT_WRAPPER">
							<div className="fleetVehicle_nameAndModel__CONTAINER flex items-center gap-5">
								<h2 className="fleetVehicle__NAME text-lg font-semibold text-gray-800">{vehicleObj.name}</h2>
								<span className="fleetVehicle__YEAR text-xs text-gray-500 font-semibold px-[10px] py-[3px] bg-cyan-100">{vehicleObj.year}</span>
							</div>

							<div className="fleetVehicle_branchCity__BLOCK flex gap-[5px] items-center pt-[5px] pb-[10px]">
								<MapPin size={16} />
								<span className="fleetVehicle_branchCity__EL text-sm text-gray-900">{vehicleObj.branch}</span>
							</div>

							<div className="fleetVehicle__PLATE border border-gray-200 w-fit">
								<div className="fleetVehicle_plateDetails__CONTAINER px-[10px] py-[5px] flex justify-between gap-[10px]">
									{vehiclePlateDetails.map((detail, idx) => {
										return (
											<Fragment>
												<span className="fleetVehicle_plate__DETAIL text-sm text-gray-900">{detail}</span>
												{idx+1 < vehiclePlateDetails.length && <div className="fleetVehicle_plateDetails__SEPERATOR w-px bg-gray-200"></div>}
											</Fragment>
										)
									})}
								</div>
							</div>
						</div>
					</div>

					{vehicleObj.status === "maintenance" && <MaintenanceReport vehicleObj={vehicleObj} />}
					{vehicleObj.status === "overdue" && <OverdueReport vehicleObj={vehicleObj} />}
					{vehicleObj.status === "rented" && <RentedReport vehicleObj={vehicleObj} />}
					{/*{vehicleObj.status === "available" && <MaintenanceReport vehicleObj={vehicleObj} />}*/}

					<div className="fleeVehicle__CTAS_BLOCK pt-[15px] self-end border-t flex justify-end">
						<div className="fleeVehicle_ctas__CONTAINER flex items-center gap-[10px] flex-1 max-w-sm">
							<Link className="text-xs font-semibold rounded-md bg-[#E8EFF3] text-gray-800 flex-1 text-center p-[10px]" href={`/fleet/${vehicleObj.id}`}>View Details</Link>
							<Link className="text-xs font-semibold rounded-md bg-[--main-purple] hover:bg-[--secondary-purple] transition-colors text-white flex-1 text-center p-[10px]" href="/">Update status</Link>
						</div>
					</div>
				</div>

				

				{/* --- Fleet Vehicle Quick Controls Btn  --- */}
				<QuickControls cardType="tableDisplay" vehicleID={vehicleObj.id} changeVehicleQuickOptionsState={() => changeVehicleQuickOptionsState(vehicleObj.id)} active={activeQC} />
				{/**************************************/}
			</div>
		</li>
	)
}