// import {useState, useEffect} from "react";

import {MapPin, EllipsisVertical} from "lucide-react";

const QuickControls = ({active, cardType, changeVehicleQuickOptionsState}) => {
	// const [vehicleQuickControlsIsOpen, setVehicleQuickControlsStatus] = useState(false);

	return (
		<div className={`fleeVehicle__QUICK_CONTROLS__BLOCK absolute  ${cardType === "cardDisplay" ? "left-[10px]" : "right-[10px]"} top-[10px] font-semibold rounded-md`}>
			<div className="fleeVehicle_quickControls_block__CONTENT_WRAPPER">
				<button onClick={changeVehicleQuickOptionsState} className="fleeVehicle_quickControls__BTN bg-gray-400/30 rounded-md backdrop-blur-sm p-[8px]">
					<div className="fleeVehicle_quickControls_btn__ICON_WRAPPER">
						<EllipsisVertical size={20} color="white" />
					</div>
				</button>

				<ul data-active={active} className={`fleeVehicle__QUICK_CONTROLS__LIST bg-white absolute top-100 ${cardType === "cardDisplay" ? "left-0 origin-top-left" : "right-0 origin-top-right"} rounded-md shadow-md transition-transform ${active ? "" : "scale-y-0 scale-x-0"} overflow-hidden`}>
					<li className="fleeVehicle__QUICK_CONTROLS__OPTION">
						<button className="fleeVehicle__QUICK_CONTROLS__OPTION__BTN py-[10px] px-[15px] border-b hover:bg-cyan-100 rounded-t-md">
							<div className="fleeVehicle_QuickControls_Option_Btn__CONTENT_WRAPPER flex items-center gap-3 ">
								<MapPin size={16} />
								<span className="fleeVehicle_QuickControls_Option__EL text-sm whitespace-nowrap font-normal">Edit Vehicle</span>
							</div>
						</button>
					</li>

					<li className="fleeVehicle__QUICK_CONTROLS__OPTION">
						<button className="fleeVehicle__QUICK_CONTROLS__OPTION__BTN py-[10px] px-[15px] border-b hover:bg-cyan-100">
							<div className="fleeVehicle_QuickControls_Option_Btn__CONTENT_WRAPPER flex items-center gap-3">
								<MapPin size={16} />
								<span className="fleeVehicle_QuickControls_Option__EL text-sm whitespace-nowrap font-normal">Edit Vehicle</span>
							</div>
						</button>
					</li>

					<li className="fleeVehicle__QUICK_CONTROLS__OPTION">
						<button className="fleeVehicle__QUICK_CONTROLS__OPTION__BTN py-[10px] px-[15px] hover:bg-cyan-100 rounded-b-md">
							<div className="fleeVehicle_QuickControls_Option_Btn__CONTENT_WRAPPER flex items-center gap-3">
								<MapPin size={16} />
								<span className="fleeVehicle_QuickControls_Option__EL text-sm whitespace-nowrap font-normal">Edit Vehicle</span>
							</div>
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default QuickControls;