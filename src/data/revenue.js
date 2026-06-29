
export const dailyRevenue = [
  { date: '01 Mai', day: 'Ven', revenue: 1400, rentals: 4, lastMonth: 1200 },
  { date: '02 Mai', day: 'Sam', revenue: 1800, rentals: 5, lastMonth: 1600 },
  { date: '03 Mai', day: 'Dim', revenue: 900, rentals: 3, lastMonth: 800 },
  { date: '04 Mai', day: 'Lun', revenue: 1200, rentals: 4, lastMonth: 1100 },
  { date: '05 Mai', day: 'Mar', revenue: 1500, rentals: 5, lastMonth: 1300 },
  { date: '06 Mai', day: 'Mer', revenue: 1100, rentals: 3, lastMonth: 950 },
  { date: '07 Mai', day: 'Jeu', revenue: 1350, rentals: 4, lastMonth: 1200 },
  { date: '08 Mai', day: 'Ven', revenue: 1700, rentals: 5, lastMonth: 1500 },
  { date: '09 Mai', day: 'Sam', revenue: 2100, rentals: 6, lastMonth: 1800 },
  { date: '10 Mai', day: 'Dim', revenue: 1000, rentals: 3, lastMonth: 900 },
  { date: '11 Mai', day: 'Lun', revenue: 1400, rentals: 4, lastMonth: 1250 },
  { date: '12 Mai', day: 'Mar', revenue: 1600, rentals: 5, lastMonth: 1400 },
  { date: '13 Mai', day: 'Mer', revenue: 1300, rentals: 4, lastMonth: 1150 },
  { date: '14 Mai', day: 'Jeu', revenue: 1800, rentals: 5, lastMonth: 1600 },
  { date: '15 Mai', day: 'Ven', revenue: 2200, rentals: 6, lastMonth: 1900 },
  { date: '16 Mai', day: 'Sam', revenue: 1900, rentals: 5, lastMonth: 1700 },
  { date: '17 Mai', day: 'Dim', revenue: 800, rentals: 2, lastMonth: 750 },
  { date: '18 Mai', day: 'Lun', revenue: 1500, rentals: 4, lastMonth: 1300 },
  { date: '19 Mai', day: 'Mar', revenue: 1700, rentals: 5, lastMonth: 1500 },
]

export const vehicleRevenue = [
  { vehicleId: 'v-002', vehicleName: 'Renault Clio', plate: '67890-B-2', totalRentals: 8, totalRevenue: 12400, avgPerRental: 1550, utilizationRate: 82 },
  { vehicleId: 'v-004', vehicleName: 'Dacia Duster', plate: '44556-D-4', totalRentals: 6, totalRevenue: 11400, avgPerRental: 1900, utilizationRate: 75 },
  { vehicleId: 'v-008', vehicleName: 'Hyundai Accent', plate: '45678-H-8', totalRentals: 7, totalRevenue: 9800, avgPerRental: 1400, utilizationRate: 70 },
  { vehicleId: 'v-001', vehicleName: 'Dacia Logan', plate: '12345-A-1', totalRentals: 5, totalRevenue: 6000, avgPerRental: 1200, utilizationRate: 55 },
  { vehicleId: 'v-006', vehicleName: 'Peugeot 208', plate: '23456-F-6', totalRentals: 4, totalRevenue: 5600, avgPerRental: 1400, utilizationRate: 48 },
  { vehicleId: 'v-005', vehicleName: 'Renault Kangoo', plate: '78901-E-5', totalRentals: 3, totalRevenue: 4800, avgPerRental: 1600, utilizationRate: 40 },
]

export const branchRevenue = [
  { branch: 'Casablanca Hub', revenue: 18500, percentage: 44, color: '#f97316' },
  { branch: 'Casablanca Airport', revenue: 14200, percentage: 34, color: '#3b82f6' },
  { branch: 'Rabat Ville', revenue: 6800, percentage: 16, color: '#22c55e' },
  { branch: 'Marrakech Branch', revenue: 2850, percentage: 6, color: '#a855f7' },
]

export const paymentMethodRevenue = [
  { method: 'Cash', amount: 27527, percentage: 65, color: '#f97316' },
  { method: 'Virement Bancaire', amount: 10587, percentage: 25, color: '#3b82f6' },
  { method: 'Carte Bancaire', amount: 4235, percentage: 10, color: '#22c55e' },
]

export const monthlyRevenue = [
  { month: 'Déc 2025', revenue: 31200, rentals: 28 },
  { month: 'Jan 2026', revenue: 34500, rentals: 31 },
  { month: 'Fév 2026', revenue: 32800, rentals: 29 },
  { month: 'Mars 2026', revenue: 38100, rentals: 34 },
  { month: 'Avr 2026', revenue: 37800, rentals: 33 },
  { month: 'Mai 2026', revenue: 42350, rentals: 38 },
]

export const revenueStats = {
  totalThisMonth: 42350,
  totalRentals: 38,
  avgPerRental: 1115,
  outstandingPayments: 3200,
  outstandingCount: 2,
  growthVsLastMonth: 12,
  rentalsGrowth: 8,
}

export const outstandingPayments = [
  {
    clientId: 'c-002',
    clientName: 'Fatima Benali',
    bookingRef: '#BK-002',
    amount: 2000,
    dueDate: '13 Mai 2026',
    overdueBy: 2,
    status: 'overdue',
  },
  {
    clientId: 'c-008',
    clientName: 'Omar Tazi',
    bookingRef: '#BK-008',
    amount: 1200,
    dueDate: '15 Mai 2026',
    overdueBy: 0,
    status: 'due_today',
  },
]

export const topClientsByRevenue = [
  { clientId: 'c-001', clientName: 'Mohammed Alami', initials: 'MA', totalSpent: 8750, rentals: 5, tier: 'gold' },
  { clientId: 'c-004', clientName: 'Yassine El Fassi', initials: 'YF', totalSpent: 7200, rentals: 4, tier: 'silver' },
  { clientId: 'c-002', clientName: 'Fatima Benali', initials: 'FB', totalSpent: 6000, rentals: 3, tier: 'silver' },
  { clientId: 'c-006', clientName: 'Jalal Mansouri', initials: 'JM', totalSpent: 4800, rentals: 3, tier: 'silver' },
  { clientId: 'c-005', clientName: 'Sofia Alaoui', initials: 'SA', totalSpent: 4000, rentals: 2, tier: 'bronze' },
]
