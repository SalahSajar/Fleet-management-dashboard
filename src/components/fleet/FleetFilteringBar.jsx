import React, { useState, useEffect} from 'react';
import {LayoutGrid, TableProperties} from "lucide-react";

import Link from "next/link"

import {vehicles, STATUS_COLORS} from "@/data";


const FleetFilteringBar = ({
		activeFleetFilteringOption,
		setActiveFleetFilteringOption,
		fleetOnTableDisplayView,
		setFleetOnTableDisplayView,
		formattingUrlQuery
	}) => {
	const [activeFleetFilteringOption__Highlighter_Width, setActiveFleetFilteringOption__Highlighter_Width] = useState(0);
	const [activeFleetFilteringOption__Highlighter_Offset, setActiveFleetFilteringOption__Highlighter_Offset] = useState(0);

	const STATUS_NAMES = Object.keys(STATUS_COLORS);

	function detectActiveFleetFilteringOptionSpecs__FUNC(elm){
		const activeOptionEl_SPECS = elm.getBoundingClientRect();

		if(elm && elm.parentElement){
			const filteringOptionsListEl__SPECS = elm.parentElement.getBoundingClientRect();

			setActiveFleetFilteringOption__Highlighter_Width(Math.ceil(activeOptionEl_SPECS.width));
			setActiveFleetFilteringOption__Highlighter_Offset(Math.ceil(activeOptionEl_SPECS.left - filteringOptionsListEl__SPECS.left));
		}
	}
useEffect(() => {
		const activeFleetFilteringOption__EL = document.querySelector(`.fleetFiltering__OPTION[data-option=${activeFleetFilteringOption}]`);

		detectActiveFleetFilteringOptionSpecs__FUNC(activeFleetFilteringOption__EL);
	}, [activeFleetFilteringOption]);

	return (
		<div className="fleet_filter__BAR">
			<div className="fleet_filterBar__WRAPPER flex items-center justify-between pb-[5px]">
				<div className="fleet_filterByStatus__BLOCK w-fit">
					<ul className="fleetFilteringOptions__LIST flex items-center mb-[15px] gap-x-[25px]">
						<li data-option="all" className="fleetFiltering__OPTION">
							<Link href={formattingUrlQuery(null, "all")} onClick={() => setActiveFleetFilteringOption("all")} className="selectFleetFilteringOption__BTN block px-[5px] py-px">
								<div className="fleetFilteringOption__CONTENT_WRAPPER">
									<span className={`fleetFilteringOption__NAME capitalize text-sm ${activeFleetFilteringOption === "all" ? "font-medium text-gray-900" : "font-normal text-gray-500"}`}>All ({vehicles.length})</span>
								</div>
							</Link>
						</li>
						{STATUS_NAMES.map(status => {
							const vehiclesBasedOnStatus = vehicles.filter(vehicle => vehicle.status === status);

							return (
								<li key={status} data-option={status} className="fleetFiltering__OPTION">
									<Link href={formattingUrlQuery(null, status)} onClick={() => setActiveFleetFilteringOption(status)} className="selectFleetFilteringOption__BTN block px-[5px]">
										<div className="fleetFilteringOption__CONTENT_WRAPPER">
											<span className={`fleetFilteringOption__NAME capitalize text-sm ${activeFleetFilteringOption === status ? "font-medium text-gray-900" : "font-normal text-gray-500"}`}>{status} ({vehiclesBasedOnStatus.length})</span>
										</div>
									</Link>
								</li>
							)
						})}
					</ul>
					<div className="activeFleetFilteringOption__HIGHLIGHT_BLOCK h-[5px] relative">
						<span style={{width: `${activeFleetFilteringOption__Highlighter_Width}px`, transform: `translateX(${activeFleetFilteringOption__Highlighter_Offset}px)`}} className={`activeFleetFilteringOption__HIGHLIGHT rounded-t-lg absolute transition-[transform, width] ease-in-out duration-500 top-0 bottom-0 bg-[#F59E0B]`}></span>
					</div>
				</div>

				<div className="fleet_displayViews__BLOCK bg-[#F0F4F7] rounded-md p-[7px]">
					<button onClick={() => setFleetOnTableDisplayView(prev => !prev)} className="fleet_changeDisplayView__BTN block relative">
						<div className="fleet_displayView_options__CONTAINER flex items-center relative z-[2]">
							<div className="fleet_displayView__OPTION flex-1 rounded-md p-[7px]">
								<div className="fleet_displayViews_Btn__ICON_WRAPPER">
									<LayoutGrid size={20} />
								</div>
							</div>
							<div className="fleet_displayView__OPTION flex-1 rounded-md p-[7px]">
								<div className="fleet_displayViews_Btn__ICON_WRAPPER">
									<TableProperties size={20} />
								</div>
							</div>
						</div>

						<div style={{transform: `translateX(${+fleetOnTableDisplayView * 100}%)`}} className="activeFleetDisplay__HIGHLIGHTER absolute transition-transform duration-250 top-0 left-0 h-full w-1/2 bg-white rounded-md"></div>
					</button>
				</div>
			</div>
		</div>
	)
}

export default FleetFilteringBar;