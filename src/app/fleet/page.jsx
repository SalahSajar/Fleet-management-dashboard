"use client";

import {useState, Suspense} from 'react';

import {CirclePlus} from "lucide-react";

import Layout from "@/components/layout/Layout";
import FleetMainContent from "@/components/fleet/FleetMainContent"


export default function FleetPage(){
	const [language, setLanguage] = useState('fr');
	// const t = TRANSLATIONS[language];

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

			<Suspense>
				<FleetMainContent />
			</Suspense>
		</Layout>
	)
}