'use client';

import React, { useState, useEffect} from 'react';

import Link from "next/link";
import {useSearchParams, usePathname} from "next/navigation";

import {CirclePlus, LayoutGrid, TableProperties} from "lucide-react";

import Layout from "@/components/layout/Layout";
import {VerticalVehicleCard, HorizontalVehicleCard} from "@/components/fleet/VehicleCard";
import VehiclesNavigationBar from "@/components/fleet/VehiclesNavigationBar"

import {vehicles, STATUS_COLORS} from "@/data";


const FilteringOptionsArr = ["all", "available", "rented", "maintenance", "overdue"];


const VEHICLES_PER_PAGE = 8;


export default function FleetPage(){
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const statusParam = searchParams.get("status");
	const pageParam = searchParams.get("page");

	const [vehicleWithQuickOptionsBlockOpen, setVehicleWithQuickOptionsBlockOpen] = useState(null);

	const [activeFleetFilteringOption, setActiveFleetFilteringOption] = useState("all");
	const [activeFleetFilteringOption__Highlighter_Width, setActiveFleetFilteringOption__Highlighter_Width] = useState(0);
	const [activeFleetFilteringOption__Highlighter_Offset, setActiveFleetFilteringOption__Highlighter_Offset] = useState(0);

	const [fleetOnTableDisplayView, setFleetOnTableDisplayView] = useState(false);

	const [language, setLanguage] = useState('fr');
	// const t = TRANSLATIONS[language];


	const STATUS_NAMES = Object.keys(STATUS_COLORS);


	const vehiclesOfThePage = activeFleetFilteringOption === "all" ? vehicles : vehicles.filter(v => v.status === activeFleetFilteringOption);

	const totalPagesCount = Math.ceil(vehiclesOfThePage.length/VEHICLES_PER_PAGE);
	const currentPage = pageParam === null || isNaN(+pageParam) || +pageParam < 1 || +pageParam > totalPagesCount ? 1 : pageParam.includes(".") ? Math.floor(+pageParam) : +pageParam;

	function detectActiveFleetFilteringOptionSpecs__FUNC(elm){
		const activeOptionEl_SPECS = elm.getBoundingClientRect();

		if(elm && elm.parentElement){
			const filteringOptionsListEl__SPECS = elm.parentElement.getBoundingClientRect();

			console.log(filteringOptionsListEl__SPECS)
			setActiveFleetFilteringOption__Highlighter_Width(Math.ceil(activeOptionEl_SPECS.width));
			setActiveFleetFilteringOption__Highlighter_Offset(Math.ceil(activeOptionEl_SPECS.left - filteringOptionsListEl__SPECS.left));
		}
	}

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
		const activeFleetFilteringOption__EL = document.querySelector(`.fleetFiltering__OPTION[data-option=${activeFleetFilteringOption}]`);

		detectActiveFleetFilteringOptionSpecs__FUNC(activeFleetFilteringOption__EL);
	}, [activeFleetFilteringOption]);

	useEffect(() => {
		const curStateParam = !!statusParam && statusParam.toLowerCase();
		if(curStateParam && FilteringOptionsArr.includes(curStateParam)){
			setActiveFleetFilteringOption(curStateParam);
		}
	}, [])

	return (
		<Layout language={language} onLanguageChange={setLanguage} activeNavItem="fleet">
			<header className="fleet__HEADER mb-[32px]">
				<div className="fleet_header__CONTENT_WRAPPER flex items-center justify-between">
					<div className="fleet_header__TYPOS_BLOCK">
						<div className="fleet_headerTypos__CONTAINER">
							<h1 className="fleet_header__TITLE text-2xl font-semibold text-gray-900">Fleet</h1>
							<p className="fleet_header__DESC text-base text-gray-500 mt-1">Manage your vehicles and logistics from one central hub.</p>
						</div>
					</div>
					<button className="fleet_header__CTA rounded-md bg-[#172546] hover:bg-[#0f172a] transition-colors">
						<div className="fleet_headerCTA__CONTENT_WRAPPER flex items-center gap-2 py-[12px] px-[18px]">
							<CirclePlus color="#fff" size={18} />
							<span className="text-sm text-white font-semibold">Add Vehicle</span>
						</div>
					</button>
				</div>
			</header>

			<div onClick={checkClickTagret__HANDLER} className="fleet_showroom__SECTION">
				<div className="fleet_showroom__CONTENT_WRAPPER">
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
		</Layout>
	)
}