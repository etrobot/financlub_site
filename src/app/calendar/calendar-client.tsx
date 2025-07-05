"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

const getBadgeVariant = (type: string) => {
  switch (type) {
    case "Conference":
      return "bg-blue-500/20 text-blue-700 dark:text-blue-400";
    case "Upgrade":
      return "bg-purple-500/20 text-purple-700 dark:text-purple-400";
    case "Launch":
      return "bg-green-500/20 text-green-700 dark:text-green-400";
    case "Summit":
      return "bg-orange-500/20 text-orange-700 dark:text-orange-400";
    default:
      return "default";
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
                },
              }}
            />
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-1">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="font-headline">
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
                        <h4 className="font-semibold">{event.title}</h4>
                        <Badge variant="outline" className={getBadgeVariant(event.type)}>
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
