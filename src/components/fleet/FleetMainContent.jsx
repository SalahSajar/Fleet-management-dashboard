import React, { useState, useEffect} from 'react';

import {useSearchParams, usePathname} from "next/navigation";


import FleetFilteringBar from "@/components/fleet/FleetFilteringBar"
import {VerticalVehicleCard, HorizontalVehicleCard} from "@/components/fleet/VehicleCard";
import VehiclesNavigationBar from "@/components/fleet/VehiclesNavigationBar"


import {vehicles} from "@/data";


const FilteringOptionsArr = ["all", "available", "rented", "maintenance", "overdue"];
const VEHICLES_PER_PAGE = 8;


const FleetMainContent = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const statusParam = searchParams.get("status");
	const pageParam = searchParams.get("page");


	const [vehicleWithQuickOptionsBlockOpen, setVehicleWithQuickOptionsBlockOpen] = useState(null);

	const [activeFleetFilteringOption, setActiveFleetFilteringOption] = useState("all");
	const [fleetOnTableDisplayView, setFleetOnTableDisplayView] = useState(false);


	const vehiclesOfThePage = activeFleetFilteringOption === "all" ? vehicles : vehicles.filter(v => v.status === activeFleetFilteringOption);

	const totalPagesCount = Math.ceil(vehiclesOfThePage.length/VEHICLES_PER_PAGE);
	const currentPage = pageParam === null || isNaN(+pageParam) || +pageParam < 1 || +pageParam > totalPagesCount ? 1 : pageParam.includes(".") ? Math.floor(+pageParam) : +pageParam;

	function checkClickTagret__HANDLER(evt) {
		const clickTarget = evt.target;
		const vehicleCardWithOpenQCL = document.querySelector(`.fleetVehicle__CARD[data-openqcd=true]`);

		if(!vehicleCardWithOpenQCL) return;

		const activeVehicleQCB = vehicleCardWithOpenQCL.querySelector(`.fleeVehicle__QUICK_CONTROLS__LIST`);
		const vehicleCardID = vehicleCardWithOpenQCL.dataset.id;

		if(vehicleCardID && vehicleWithQuickOptionsBlockOpen === vehicleCardID && !activeVehicleQCB?.contains(clickTarget)){
			setVehicleWithQuickOptionsBlockOpen(null);
		}
	}

	function formattingUrlQuery(page, status){
		const params = new URLSearchParams(searchParams.toString());

		if(page) {
			params.set("page", page);
			if(statusParam) params.set("status", statusParam);
		};
		if(status) {
			params.set("status", status);
			params.set("page", "1");
		}

		return `${pathname}?${params.toString()}`;
	}


	useEffect(() => {
		if(!statusParam) return;

		const curStateParam = !!statusParam && statusParam.toLowerCase();
		if(curStateParam && FilteringOptionsArr.includes(curStateParam)){
			setActiveFleetFilteringOption(curStateParam);
		}
	}, [statusParam])


	return (
		// <Suspense fallback={<>Loading ...</>}>
			<div onClick={checkClickTagret__HANDLER} className="fleet_showroom__SECTION">
				<div className="fleet_showroom__CONTENT_WRAPPER">
					<FleetFilteringBar 
						activeFleetFilteringOption={activeFleetFilteringOption}
						setActiveFleetFilteringOption={setActiveFleetFilteringOption}
						fleetOnTableDisplayView={fleetOnTableDisplayView}
						setFleetOnTableDisplayView={setFleetOnTableDisplayView}
						formattingUrlQuery={formattingUrlQuery}
					/>

					<div className="fleetVehicles__DISPLAY_SECTION border-y border-gray-200">
						<div className="fleet_vehicles__CONTENT_WRAPPER py-[32px]">
							<ul className={`fleet_vehicles__LIST ${fleetOnTableDisplayView ? "flex flex-col" : "grid grid-cols-4"} gap-4`} >
								{[...vehiclesOfThePage].splice((currentPage-1)*VEHICLES_PER_PAGE, VEHICLES_PER_PAGE).map(vehicle => fleetOnTableDisplayView ? <HorizontalVehicleCard key={vehicle.id} vehicleObj={vehicle} changeVehicleQuickOptionsState={id => setVehicleWithQuickOptionsBlockOpen(id)} vehicleWithOpenQCB={vehicleWithQuickOptionsBlockOpen} /> : <VerticalVehicleCard key={vehicle.id} changeVehicleQuickOptionsState={id => setVehicleWithQuickOptionsBlockOpen(id)} vehicleWithOpenQCB={vehicleWithQuickOptionsBlockOpen} vehicleObj={vehicle} />)}
							</ul>
						</div>
					</div>

					{totalPagesCount > 1 ? <VehiclesNavigationBar 
						vehiclesOfThePage={vehiclesOfThePage} 
						totalPagesCount={totalPagesCount} 
						currentPage={currentPage} 
						formattingUrlQuery={formattingUrlQuery} 
						VEHICLES_PER_PAGE={VEHICLES_PER_PAGE}
					/> : null}
				</div>
			</div>
		// </Suspense>
	)
}

export default FleetMainContent;