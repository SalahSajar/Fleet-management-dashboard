import {vehicleStatuses} from "@/data";

const VehicleReport = ({children, status}) => {
	return (
		<div style={{backgroundColor: vehicleStatuses[status]["bg"] }} className={`vehicleReport__CARD rounded-md`}>
			<div className="vehicleReport_card__CONTENT_WRAPPER p-[15px]">
				{children}
			</div>
		</div>
	)
}

export default VehicleReport;