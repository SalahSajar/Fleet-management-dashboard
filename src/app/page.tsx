'use client'

import { useState } from 'react'

import {
  Car,
  CheckCircle,
  Link2,
  Wrench,
} from 'lucide-react'

import Layout from '@/components/layout/Layout'
import MetricCard from '@/components/dashboard/MetricCard'
import VehicleCard from '@/components/dashboard/VehicleCard'
import ActivityItem from '@/components/dashboard/ActivityItem'
import BookingItem from '@/components/dashboard/BookingItem'
import RevenueChart from '@/components/dashboard/RevenueChart'
import TopClients from '@/components/dashboard/TopClients'

import {
  vehicles,
  clients,
  vehicleStats,
  TRANSLATIONS,
} from '@/data'

type Language = 'fr' | 'ar'

export default function DashboardPage() {
  const [language, setLanguage] = useState<Language>('fr')
  const t = TRANSLATIONS[language]

  const displayVehicles = vehicles.slice(0, 4)

  const topClientsData = [
    {
      initials: clients[0].initials,
      name: clients[0].fullName,
      rentals: clients[0].totalRentals,
      detail: '2024 active',
      tier: clients[0].loyaltyTier,
    },
    {
      initials: clients[1].initials,
      name: clients[1].fullName,
      rentals: clients[1].totalRentals,
      detail: '2024 active',
      tier: clients[1].loyaltyTier,
    },
    {
      initials: clients[2].initials,
      name: clients[2].fullName,
      rentals: clients[2].totalRentals,
      detail: 'New Joiner',
      tier: clients[2].loyaltyTier,
    },
  ];

  const revenueData = [
    { label: 'Monday', value: 1200, isToday: false, isProjected: false },
    { label: 'Tuesday', value: 1500, isToday: false, isProjected: false },
    { label: 'Today', value: 1800, isToday: true, isProjected: false },
    { label: 'Projected', value: 1600, isToday: false, isProjected: true },
  ];

  return (
    <Layout language={language} onLanguageChange={setLanguage} activeNavItem="dashboard">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {language === 'fr' ? 'Fleet Analytics' : 'تحليلات الأسطول'}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {language === 'fr' ? 'Real-time overview of your Moroccan operations.' : 'نظرة عامة في الوقت الفعلي على عملياتك المغربية.'}
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <MetricCard
          value={vehicleStats.total}
          label={t.totalFleet.toUpperCase()}
          icon={Car}
          borderColor="border-slate-300"
          iconBgColor="bg-slate-100"
          iconColor="text-slate-600"
        />
        <MetricCard
          value={vehicleStats.available}
          label={t.availableNow.toUpperCase()}
          icon={CheckCircle}
          borderColor="border-green-400"
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <MetricCard
          value={vehicleStats.rented}
          label={t.currentlyRented.toUpperCase()}
          icon={Link2}
          borderColor="border-slate-300"
          iconBgColor="bg-slate-100"
          iconColor="text-slate-600"
        />
        <MetricCard
          value={vehicleStats.maintenance}
          label={t.inMaintenance.toUpperCase()}
          icon={Wrench}
          borderColor="border-red-300"
          iconBgColor="bg-red-100"
          iconColor="text-red-600"
        />
      </div>

      {/* Vehicle Logistics */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">
            {language === 'fr' ? 'Vehicle Logistics' : 'لوجستيات المركبات'}
          </h2>
          <button className="text-sm text-slate-500 hover:text-slate-700 font-medium transition-colors">
            {t.viewAll} →
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {displayVehicles.map((vehicle) => <VehicleCard key={vehicle.id} vehicle={vehicle} language={language} />)}
        </div>
      </div>

      {/* Activity + Bookings Row */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Today's Activity */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            {language === 'fr' ? "Today's Activity" : 'نشاط اليوم'}
          </h2>
          <div className="divide-y divide-gray-100">
            <ActivityItem
              type="outbound"
              vehicleName="Renault Clio"
              time="09:00 AM"
              branch="Casablanca Airport Branch"
              detail="Customer: Jalal Mansouri"
            />
            <ActivityItem
              type="returned"
              vehicleName="Dacia Logan"
              time="02:30 PM"
              branch="Rabat Ville Branch"
              detail="Status: Inspected • No damage"
              detailColor="text-green-600"
            />
          </div>
        </div>

        {/* Upcoming Bookings */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-bold text-gray-900">
              {language === 'fr' ? 'Upcoming Bookings' : 'الحجوزات القادمة'}
            </h2>
            <span className="text-sm text-gray-400">
              ({language === 'fr' ? 'Next 7 Days' : 'الأيام 7 القادمة'})
            </span>
          </div>
          <div className="divide-y divide-gray-100">
            <BookingItem
              month="MAY"
              day={18}
              vehicleName="Hyundai Accent"
              clientName="Yassine El Fassi"
              duration="3 Days"
            />
            <BookingItem
              month="MAY"
              day={20}
              vehicleName="Dacia Duster"
              clientName="Sofia Alaoui"
              duration="1 Week"
            />
          </div>
        </div>
      </div>

      {/* Revenue + Top Clients Row */}
      <div className="grid grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-6">
            {language === 'fr' ? 'Revenue Performance' : 'أداء الإيرادات'}
          </h2>
          <RevenueChart data={revenueData} />
        </div>

        {/* Top Clients */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            {language === 'fr' ? 'Top Clients' : 'أفضل العملاء'}
          </h2>
          <TopClients clients={topClientsData} language={language} />
        </div>
      </div>
    </Layout>
  )
}
