"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const events = [
  {
    date: new Date(2024, 6, 28),
    title: "Ethereum Community Conference (EthCC)",
    description: "The largest annual European Ethereum event focused on technology and community.",
    type: "Conference",
  },
  {
    date: new Date(2024, 7, 12),
    title: "Solana 'Breakpoint' Mainnet Upgrade",
    description: "A major network upgrade aimed at improving transaction speeds and stability.",
    type: "Upgrade",
  },
  {
    date: new Date(2024, 7, 12),
    title: "New DeFi Protocol Launch on Avalanche",
    description: "A new lending and borrowing protocol 'LendFi' is launching on the Avalanche C-Chain.",
    type: "Launch",
  },
  {
    date: new Date(2024, 7, 21),
    title: "Bitcoin Investor Day",
    description: "A virtual summit for institutional investors to discuss the future of Bitcoin.",
    type: "Summit",
  },
];

const getBadgeClasses = (type: string) => {
  // In a real app, you might have a more sophisticated system for this
  // But for the cyberpunk theme, we'll cycle through our chart colors
  switch (type) {
    case "Conference":
      return "border-transparent bg-chart-1/20 text-chart-1";
    case "Upgrade":
      return "border-transparent bg-chart-2/20 text-chart-2";
    case "Launch":
      return "border-transparent bg-chart-3/20 text-chart-3";
    case "Summit":
      return "border-transparent bg-chart-4/20 text-chart-4";
    default:
      return "secondary";
  }
}

export function CalendarClient() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const selectedDayEvents = date
    ? events.filter(event => format(event.date, "yyyy-MM-dd") === format(date, "yyyy-MM-dd"))
    : [];

  const eventDays = events.map(event => event.date);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 flex justify-center">
        <Card>
          <CardContent className="p-2">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
              modifiers={{ event: eventDays }}
              modifiersStyles={{
                event: {
                  color: 'hsl(var(--primary-foreground))',
                  backgroundColor: 'hsl(var(--primary))',
                  borderRadius: '9999px',
                  boxShadow: '0 0 8px hsl(var(--primary))'
                },
              }}
            />
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-1">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">
              Events for {date ? format(date, "MMMM d, yyyy") : "..."}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDayEvents.length > 0 ? (
              <ul className="space-y-4">
                {selectedDayEvents.map((event, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CalendarIcon className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-lg">{event.title}</h4>
                        <Badge variant="outline" className={cn(getBadgeClasses(event.type))}>
                          {event.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center text-muted-foreground py-8">
                <p>No events scheduled for this day.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
