export * from './vehicles'
export * from './clients'
export * from './bookings'
export * from './revenue'

// App-wide constants
export const APP_CONFIG = {
  name: 'Fleet Maître',
  tagline: 'MOROCCO LOGISTICS',
  currency: 'MAD',
  defaultLanguage: 'fr',
  supportedLanguages: ['fr', 'ar'],
  currentUser: {
    name: 'Karim Idrissi',
    role: 'Fleet Manager',
    initials: 'KI',
    branch: 'Casablanca Hub',
  },
}

export const NAVIGATION = [
  { id: 'dashboard', label: { fr: 'Dashboard', ar: 'لوحة القيادة' }, icon: 'LayoutDashboard', href: '/' },
  { id: 'fleet', label: { fr: 'Flotte', ar: 'الأسطول' }, icon: 'Car', href: '/fleet' },
  { id: 'bookings', label: { fr: 'Réservations', ar: 'الحجوزات' }, icon: 'Calendar', href: '/bookings' },
  { id: 'clients', label: { fr: 'Clients', ar: 'العملاء' }, icon: 'Users', href: '/clients' },
  { id: 'revenue', label: { fr: 'Revenus', ar: 'الإيرادات' }, icon: 'TrendingUp', href: '/revenue' },
  { id: 'settings', label: { fr: 'Paramètres', ar: 'الإعدادات' }, icon: 'Settings', href: '/settings' },
]

export const STATUS_COLORS = {
  available: { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500' },
  rented: { bg: 'bg-amber-100', text: 'text-amber-700', dot: 'bg-amber-500' },
  maintenance: { bg: 'bg-red-100', text: 'text-red-700', dot: 'bg-red-500' },
  overdue: { bg: 'bg-red-100', text: 'text-red-700', dot: 'bg-red-500' },
  // active: { bg: 'bg-amber-100', text: 'text-amber-700', dot: 'bg-amber-500' },
  // upcoming: { bg: 'bg-blue-100', text: 'text-blue-700', dot: 'bg-blue-500' },
  // completed: { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500' },
  // cancelled: { bg: 'bg-gray-100', text: 'text-gray-700', dot: 'bg-gray-500' },
}

export const LOYALTY_COLORS = {
  gold: { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-300' },
  silver: { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-300' },
  bronze: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300' },
  new: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
}

export const TRANSLATIONS = {
  fr: {
    dashboard: 'Dashboard',
    fleet: 'Flotte',
    bookings: 'Réservations',
    clients: 'Clients',
    revenue: 'Revenus',
    settings: 'Paramètres',
    available: 'Disponible',
    rented: 'Loué',
    maintenance: 'Maintenance',
    overdue: 'En retard',
    totalFleet: 'Flotte totale',
    availableNow: 'Disponible',
    currentlyRented: 'En location',
    inMaintenance: 'En maintenance',
    addVehicle: 'Ajouter un véhicule',
    addClient: 'Ajouter un client',
    newBooking: 'Nouvelle réservation',
    search: 'Rechercher...',
    viewAll: 'Voir tout',
    edit: 'Modifier',
    delete: 'Supprimer',
    cancel: 'Annuler',
    save: 'Enregistrer',
    gold: 'Or',
    silver: 'Argent',
    bronze: 'Bronze',
    currency: 'MAD',
  },
  ar: {
    dashboard: 'لوحة القيادة',
    fleet: 'الأسطول',
    bookings: 'الحجوزات',
    clients: 'العملاء',
    revenue: 'الإيرادات',
    settings: 'الإعدادات',
    available: 'متاح',
    rented: 'مؤجر',
    maintenance: 'صيانة',
    overdue: 'متأخر',
    totalFleet: 'إجمالي الأسطول',
    availableNow: 'متاح الآن',
    currentlyRented: 'مؤجر حالياً',
    inMaintenance: 'في الصيانة',
    addVehicle: 'إضافة مركبة',
    addClient: 'إضافة عميل',
    newBooking: 'حجز جديد',
    search: 'بحث...',
    viewAll: 'عرض الكل',
    edit: 'تعديل',
    delete: 'حذف',
    cancel: 'إلغاء',
    save: 'حفظ',
    gold: 'ذهبي',
    silver: 'فضي',
    bronze: 'برونزي',
    currency: 'درهم',
  },
}
