# Fleet Maître — Mock Data

Complete TypeScript mock data for all 9 pages of the Fleet Maître dashboard.

## Files

| File | Description | Records |
|------|-------------|---------|
| `vehicles.ts` | Vehicle fleet data with status, branch, maintenance info | 12 vehicles + stats |
| `clients.ts` | Client profiles with loyalty tiers and rental history | 8 clients + stats |
| `bookings.ts` | Rental bookings with payment and inspection data | 8 bookings + stats |
| `revenue.ts` | Financial data — daily, monthly, by vehicle, by branch | Full analytics |
| `index.ts` | Exports everything + app config, navigation, translations | FR/AR translations |

## Usage

```typescript
import {
  vehicles,
  vehicleStats,
  clients,
  clientStats,
  bookings,
  bookingStats,
  dailyRevenue,
  revenueStats,
  TRANSLATIONS,
  APP_CONFIG,
} from '@/data'
```

## Data Structure

### Vehicles
- 12 sample vehicles (Dacia Logan, Renault Clio, Hyundai i10, Dacia Duster, etc.)
- Real Moroccan license plates
- 4 status types: available, rented, maintenance, overdue
- Stats: total 42, available 12, rented 28, maintenance 2

### Clients
- 8 sample clients with Arabic/French Moroccan names
- Loyalty tiers: gold, silver, bronze, new
- Full profile: CIN, address, phone, rental history
- Stats: total 156, active 28, new this month 7

### Bookings
- 8 sample bookings covering all statuses
- Booking references: #BK-001 through #BK-008
- Payment methods: cash, bank_transfer, card
- Amounts in MAD (Moroccan Dirham)

### Revenue
- Daily revenue for Mai 2026 with last month comparison
- Revenue by vehicle with utilization rates
- Revenue by branch (4 branches)
- Payment method breakdown
- Monthly trend for last 6 months
- Outstanding payments with overdue alerts

## FR/AR Translations

All UI strings are available in French and Arabic via `TRANSLATIONS`:

```typescript
const t = TRANSLATIONS[language] // 'fr' or 'ar'
console.log(t.dashboard) // 'Dashboard' or 'لوحة القيادة'
```

## Notes

- All monetary values are in MAD (Moroccan Dirham)
- Dates are in French format (DD Mois YYYY)
- Replace with Supabase calls once the UI is complete
