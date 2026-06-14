export type BookingStatus = 'active' | 'upcoming' | 'completed' | 'cancelled' | 'overdue'
export type PaymentStatus = 'paid' | 'pending' | 'overdue'
export type PaymentMethod = 'cash' | 'bank_transfer' | 'card'

export interface Booking {
  id: string
  bookingRef: string
  clientId: string
  clientName: string
  clientInitials: string
  vehicleId: string
  vehicleName: string
  vehiclePlate: string
  branch: string
  startDate: string
  endDate: string
  duration: number
  dailyRate: number
  subtotal: number
  deposit: number
  total: number
  status: BookingStatus
  paymentStatus: PaymentStatus
  paymentMethod: PaymentMethod
  createdBy: string
  createdAt: string
  notes?: string
  mileageAtPickup?: number
  mileageAtReturn?: number
  fuelAtPickup?: string
  fuelAtReturn?: string
  inspectionStatus?: string
}

export const bookings: Booking[] = [
  {
    id: 'bk-001',
    bookingRef: '#BK-001',
    clientId: 'c-001',
    clientName: 'Mohammed Alami',
    clientInitials: 'MA',
    vehicleId: 'v-002',
    vehicleName: 'Renault Clio',
    vehiclePlate: '67890-B-2',
    branch: 'Casablanca Airport',
    startDate: '10 Mai 2026',
    endDate: '15 Mai 2026',
    duration: 5,
    dailyRate: 350,
    subtotal: 1750,
    deposit: 500,
    total: 2250,
    status: 'active',
    paymentStatus: 'paid',
    paymentMethod: 'cash',
    createdBy: 'Karim Idrissi',
    createdAt: '08 Mai 2026, 10:30',
    mileageAtPickup: 44980,
    fuelAtPickup: 'Full',
  },
  {
    id: 'bk-002',
    bookingRef: '#BK-002',
    clientId: 'c-002',
    clientName: 'Fatima Benali',
    clientInitials: 'FB',
    vehicleId: 'v-004',
    vehicleName: 'Dacia Duster',
    vehiclePlate: '44556-D-4',
    branch: 'Casablanca Hub',
    startDate: '08 Mai 2026',
    endDate: '13 Mai 2026',
    duration: 5,
    dailyRate: 400,
    subtotal: 2000,
    deposit: 500,
    total: 2500,
    status: 'overdue',
    paymentStatus: 'overdue',
    paymentMethod: 'cash',
    createdBy: 'Karim Idrissi',
    createdAt: '06 Mai 2026, 14:00',
    mileageAtPickup: 51800,
    fuelAtPickup: 'Full',
  },
  {
    id: 'bk-003',
    bookingRef: '#BK-003',
    clientId: 'c-004',
    clientName: 'Yassine El Fassi',
    clientInitials: 'YF',
    vehicleId: 'v-008',
    vehicleName: 'Hyundai Accent',
    vehiclePlate: '45678-H-8',
    branch: 'Casablanca Airport',
    startDate: '12 Mai 2026',
    endDate: '20 Mai 2026',
    duration: 8,
    dailyRate: 300,
    subtotal: 2400,
    deposit: 500,
    total: 2900,
    status: 'active',
    paymentStatus: 'paid',
    paymentMethod: 'bank_transfer',
    createdBy: 'Karim Idrissi',
    createdAt: '10 Mai 2026, 09:15',
    mileageAtPickup: 33200,
    fuelAtPickup: 'Full',
  },
  {
    id: 'bk-004',
    bookingRef: '#BK-004',
    clientId: 'c-005',
    clientName: 'Sofia Alaoui',
    clientInitials: 'SA',
    vehicleId: 'v-007',
    vehicleName: 'Dacia Sandero',
    vehiclePlate: '34567-G-7',
    branch: 'Marrakech Branch',
    startDate: '14 Mai 2026',
    endDate: '22 Mai 2026',
    duration: 8,
    dailyRate: 280,
    subtotal: 2240,
    deposit: 400,
    total: 2640,
    status: 'active',
    paymentStatus: 'paid',
    paymentMethod: 'card',
    createdBy: 'Karim Idrissi',
    createdAt: '12 Mai 2026, 16:45',
    mileageAtPickup: 24100,
    fuelAtPickup: 'Full',
  },
  {
    id: 'bk-005',
    bookingRef: '#BK-005',
    clientId: 'c-003',
    clientName: 'Ahmed Idrissi',
    clientInitials: 'AI',
    vehicleId: 'v-001',
    vehicleName: 'Dacia Logan',
    vehiclePlate: '12345-A-1',
    branch: 'Casablanca Hub',
    startDate: '05 Mai 2026',
    endDate: '09 Mai 2026',
    duration: 4,
    dailyRate: 300,
    subtotal: 1200,
    deposit: 300,
    total: 1500,
    status: 'completed',
    paymentStatus: 'paid',
    paymentMethod: 'cash',
    createdBy: 'Karim Idrissi',
    createdAt: '03 Mai 2026, 11:00',
    mileageAtPickup: 37900,
    mileageAtReturn: 38420,
    fuelAtPickup: 'Full',
    fuelAtReturn: 'Full',
    inspectionStatus: 'No damage',
  },
  {
    id: 'bk-006',
    bookingRef: '#BK-006',
    clientId: 'c-006',
    clientName: 'Jalal Mansouri',
    clientInitials: 'JM',
    vehicleId: 'v-005',
    vehicleName: 'Renault Kangoo',
    vehiclePlate: '78901-E-5',
    branch: 'Rabat Ville',
    startDate: '01 Mai 2026',
    endDate: '05 Mai 2026',
    duration: 4,
    dailyRate: 400,
    subtotal: 1600,
    deposit: 400,
    total: 2000,
    status: 'completed',
    paymentStatus: 'paid',
    paymentMethod: 'bank_transfer',
    createdBy: 'Karim Idrissi',
    createdAt: '29 Avr 2026, 09:30',
    mileageAtPickup: 60800,
    mileageAtReturn: 61200,
    fuelAtPickup: 'Full',
    fuelAtReturn: '3/4',
    inspectionStatus: 'Minor scratch reported',
  },
  {
    id: 'bk-007',
    bookingRef: '#BK-007',
    clientId: 'c-007',
    clientName: 'Nadia Chraibi',
    clientInitials: 'NC',
    vehicleId: 'v-006',
    vehicleName: 'Peugeot 208',
    vehiclePlate: '23456-F-6',
    branch: 'Casablanca Hub',
    startDate: '18 Mai 2026',
    endDate: '21 Mai 2026',
    duration: 3,
    dailyRate: 350,
    subtotal: 1050,
    deposit: 300,
    total: 1350,
    status: 'upcoming',
    paymentStatus: 'pending',
    paymentMethod: 'cash',
    createdBy: 'Karim Idrissi',
    createdAt: '15 Mai 2026, 14:20',
  },
  {
    id: 'bk-008',
    bookingRef: '#BK-008',
    clientId: 'c-008',
    clientName: 'Omar Tazi',
    clientInitials: 'OT',
    vehicleId: 'v-003',
    vehicleName: 'Hyundai i10',
    vehiclePlate: '11223-C-3',
    branch: 'Casablanca Hub',
    startDate: '20 Mai 2026',
    endDate: '25 Mai 2026',
    duration: 5,
    dailyRate: 250,
    subtotal: 1250,
    deposit: 300,
    total: 1550,
    status: 'upcoming',
    paymentStatus: 'pending',
    paymentMethod: 'cash',
    createdBy: 'Karim Idrissi',
    createdAt: '16 Mai 2026, 10:00',
  },
]

export const bookingStats = {
  totalThisMonth: 38,
  activeRentals: 28,
  returningToday: 3,
  overdue: 2,
}

export const bookingTimeline = [
  {
    bookingId: 'bk-001',
    events: [
      { type: 'created', label: 'Booking Created', date: '08 Mai 2026', time: '10:30', by: 'Karim Idrissi' },
      { type: 'pickup', label: 'Vehicle Picked Up', date: '10 Mai 2026', time: '09:00', location: 'Casablanca Airport', note: 'Inspected, No damage' },
      { type: 'pending', label: 'Expected Return', date: '15 Mai 2026', time: '09:00', note: 'Pending' },
    ],
  },
]
