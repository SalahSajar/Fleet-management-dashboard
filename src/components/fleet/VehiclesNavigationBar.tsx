import Link from "next/link";
import {useRouter, useSearchParams, usePathname} from "next/navigation";

import {ChevronLeft, ChevronRight} from "lucide-react";


const VehiclesNavigationBar = ({vehiclesOfThePage, totalPagesCount, currentPage, formattingUrlQuery, VEHICLES_PER_PAGE}) => {
	const midPagesArr = [...(new Array(totalPagesCount))].map((itm, idx) => {
		if(idx+1 === 1 || idx+1 === totalPagesCount) return;

		return idx+1;
	}).filter(itm => !!itm);

	const inFirstPage = currentPage === 1;
	const inLastPage = currentPage === totalPagesCount;

	return (
		<div className="fleetVehicles__NAVIGATION_SECTION pt-[32px]">
			<div className="fleetVehicles_navigationBlock__CONTENT_WRAPPER flex items-center justify-between">
				<h6 className="fleetVehicles_navigation__INSIGHT text-sm text-gray-700">Showing <b className="text-black">{((currentPage-1)*VEHICLES_PER_PAGE)+1}-{currentPage*VEHICLES_PER_PAGE > vehiclesOfThePage.length ? vehiclesOfThePage.length : currentPage*VEHICLES_PER_PAGE}</b> of <b className="text-black">{vehiclesOfThePage.length}</b> vehicles</h6>
				
				<div className="fleetVehicles_navigation__LINKS_BLOCK">
					<div className="fleetVehicles_navigationLinksBlock__CONTENT_WRAPPER flex items-center gap-x-3">
						
						<Link href={formattingUrlQuery(currentPage-1, null)} className={`fleetVehicles_navigation__LINK fleetVehicles_navigation__BACKWARD_LINK rounded-md grid place-items-center w-[45px] aspect-square p-[10px] ${inFirstPage ? "bg-[--faintest-purple] pointer-events-none" : "bg-[--light-blue]" } `}>
							<div className="fleetVehicles_navigation__ICON_WRAPPER w-fit">
								<ChevronLeft color={inFirstPage ? "#D8ABAB" : "#172546"} size={20} />
							</div>
						</Link>

						<ul className="fleetVehicles_navigation__LINKS_LIST flex items-center gap-x-1">
							<li className={`fleetVehicles_navigation__LINK rounded-md aspect-square grid w-[45px] ${inFirstPage ? "bg-[--main-purple] hover:bg-[--secondary-purple] text-white" : "bg-[--background] hover:bg-[--faintest-purple] text-[--main-purple]"} transition-colors`}>
								<Link href={formattingUrlQuery(1, null)} className="fleetVehicles_navigation__PAGE_LINK grid place-items-center">
									<span className="fleetVehicles_navigation__PAGE_INDEX font-semibold">1</span>
								</Link>
							</li>
								
							{midPagesArr.length <= 3 ? midPagesArr.map(pg => (
								<li className={`fleetVehicles_navigation__LINK rounded-md aspect-square ${currentPage === pg ? "bg-[--main-purple] hover:bg-[--secondary-purple] text-white" : "bg-[--background] hover:bg-[--faintest-purple] text-[--main-purple]"} transition-colors grid w-[45px]`}>
									<Link href={formattingUrlQuery(pg, null)} className="fleetVehicles_navigation__PAGE_LINK grid place-items-center">
										<span className="fleetVehicles_navigation__PAGE_INDEX font-semibold">{pg}</span>
									</Link>
								</li>
							)) : [...midPagesArr].splice(0, 2).includes(currentPage) || inFirstPage ? <Fragment>
									{[...midPagesArr].splice(0, 3).map(pg => (
										<li className={`fleetVehicles_navigation__LINK rounded-md aspect-square ${currentPage === pg ? "bg-[--main-purple] hover:bg-[--secondary-purple] text-white" : "bg-[--background] hover:bg-[--faintest-purple] text-[--main-purple]"} transition-colors grid w-[45px]`}>
											<Link href={formattingUrlQuery(pg, null)} className="fleetVehicles_navigation__PAGE_LINK grid place-items-center">
												<span className="fleetVehicles_navigation__PAGE_INDEX font-semibold">{pg}</span>
											</Link>
										</li>
									))}
									<li className="fleetVehicles_navigation__LINK pointer-events-none grid w-fit text-[--main-purple]">
										<div className="fleetVehicles_navigation__SPACER grid place-items-center">
											<span className="fleetVehicles_navigation__PAGE_INDEX font-light">...</span>
										</div>
									</li>
								</Fragment>
							: [...midPagesArr].splice(-2, 2).includes(currentPage) || inLastPage ? <Fragment>
									<li className="fleetVehicles_navigation__LINK pointer-events-none grid w-fit text-[--main-purple]">
										<div className="fleetVehicles_navigation__SPACER grid place-items-center">
											<span className="fleetVehicles_navigation__PAGE_INDEX font-light">...</span>
										</div>
									</li>
									{[...midPagesArr].splice(-3, 3).map(pg => (
										<li className={`fleetVehicles_navigation__LINK rounded-md aspect-square ${currentPage === pg ? "bg-[--main-purple] hover:bg-[--secondary-purple] text-white" : "bg-[--background] hover:bg-[--faintest-purple] text-[--main-purple]"} transition-colors grid w-[45px]`}>
											<Link href={formattingUrlQuery(pg, null)} className="fleetVehicles_navigation__PAGE_LINK grid place-items-center">
												<span className="fleetVehicles_navigation__PAGE_INDEX font-semibold">{pg}</span>
											</Link>
										</li>
									))}
								</Fragment>
							: <Fragment>
									<li className="fleetVehicles_navigation__LINK pointer-events-none grid w-fit text-[--main-purple]">
										<div className="fleetVehicles_navigation__SPACER grid place-items-center">
											<span className="fleetVehicles_navigation__PAGE_INDEX font-light">...</span>
										</div>
									</li>
									{[...midPagesArr].splice(midPagesArr.indexOf(currentPage)-1, 3).map(pg => (
										<li className={`fleetVehicles_navigation__LINK rounded-md aspect-square ${currentPage === pg ? "bg-[--main-purple] hover:bg-[--secondary-purple] text-white" : "bg-[--background] hover:bg-[--faintest-purple] text-[--main-purple]"} transition-colors grid w-[45px]`}>
											<Link href={formattingUrlQuery(pg, null)} className="fleetVehicles_navigation__PAGE_LINK grid place-items-center">
												<span className="fleetVehicles_navigation__PAGE_INDEX font-semibold">{pg}</span>
											</Link>
										</li>
									))}
									<li className="fleetVehicles_navigation__LINK pointer-events-none grid w-fit text-[--main-purple]">
										<div className="fleetVehicles_navigation__SPACER grid place-items-center">
											<span className="fleetVehicles_navigation__PAGE_INDEX font-light">...</span>
										</div>
									</li>
								</Fragment> 
							}

							<li className={`fleetVehicles_navigation__LINK rounded-md aspect-square grid w-[45px] ${inLastPage ? "bg-[--main-purple] hover:bg-[--secondary-purple] text-white" : "bg-[--background] hover:bg-[--faintest-purple] text-[--main-purple]"} transition-colors`}>
								<Link href={formattingUrlQuery(totalPagesCount, null)} className="fleetVehicles_navigation__PAGE_LINK grid place-items-center">
									<span className="fleetVehicles_navigation__PAGE_INDEX font-semibold">{totalPagesCount}</span>
								</Link>
							</li>
						</ul>

						<Link href={formattingUrlQuery(currentPage+1, null)} className={`fleetVehicles_navigation__LINK rounded-md fleetVehicles_navigation__BACKWARD_LINK grid place-items-center w-[45px] aspect-square p-[10px] ${inLastPage ? "bg-[--faintest-purple] pointer-events-none" : "bg-[--light-blue]" }`}>
							<div className="fleetVehicles_navigation__ICON_WRAPPER w-fit">
								<ChevronRight color={inLastPage ? "#D8ABAB" : "#172546"} size={20} />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VehiclesNavigationBar;