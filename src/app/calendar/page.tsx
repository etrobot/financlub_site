import { CalendarClient } from './calendar-client'

export default function CalendarPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-7xl font-headline font-extrabold tracking-tight text-primary dark:drop-shadow-[0_0_10px_hsl(var(--primary))]">Crypto Calendar</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Stay up-to-date with important events, launches, and updates in the crypto space.
        </p>
      </div>
      <CalendarClient />
    </div>
  )
}
