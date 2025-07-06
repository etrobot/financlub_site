import Image from 'next/image';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bitcoin, CircleDollarSign, Newspaper, Calendar, BarChart3, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';

const cryptoData = [
  {
    rank: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 67890.12,
    change24h: 2.5,
    icon: <Bitcoin className="h-6 w-6" />,
  },
  {
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3540.5,
    change24h: -1.2,
    icon: <CircleDollarSign className="h-6 w-6 text-muted-foreground" />,
  },
  {
    rank: 3,
    name: 'Tether',
    symbol: 'USDT',
    price: 1.0,
    change24h: 0.01,
    icon: <CircleDollarSign className="h-6 w-6 text-muted-foreground" />,
  },
  {
    rank: 4,
    name: 'Solana',
    symbol: 'SOL',
    price: 150.75,
    change24h: 5.8,
    icon: <CircleDollarSign className="h-6 w-6 text-muted-foreground" />,
  },
  {
    rank: 5,
    name: 'Ripple',
    symbol: 'XRP',
    price: 0.52,
    change24h: -0.5,
    icon: <CircleDollarSign className="h-6 w-6 text-muted-foreground" />,
  },
];

const newsData = [
  {
    id: 1,
    title: 'Bitcoin Hits New All-Time High Amidst Market Frenzy',
    source: 'Crypto News Daily',
    time: '2 hours ago',
    image: 'https://picsum.photos/seed/featured-news/800/450',
    aiHint: 'cryptocurrency abstract',
  },
  {
    id: 2,
    title: 'Ethereum "Merge" Upgrade: What to Expect Next',
    source: 'DeFi Times',
    time: '5 hours ago',
    image: 'https://picsum.photos/seed/top-story-1/150/100',
    aiHint: 'blockchain network',
  },
  {
    id: 3,
    title: 'Governments Worldwide Move Towards CBDC Adoption',
    source: 'Financial Tech Today',
    time: '1 day ago',
    image: 'https://picsum.photos/seed/top-story-2/150/100',
    aiHint: 'digital currency',
  },
];

const eventsData = [
  {
    date: new Date(2024, 9, 28),
    title: "Web3 Summit",
    description: "A global gathering for the decentralized web ecosystem.",
  },
  {
    date: new Date(2024, 10, 12),
    title: "Solana Breakpoint 2024",
    description: "Solana's annual conference for developers and creators.",
  },
  {
    date: new Date(2025, 0, 15),
    title: "NFT Paris",
    description: "The premier event for Non-Fungible Tokens in Europe.",
  },
  {
    date: new Date(2025, 1, 15),
    title: "Cardano Summit",
    description: "Community-driven event exploring the future of Cardano.",
  },
];


export default function Home() {
  const featuredNews = newsData[0];
  const topStories = newsData.slice(1);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <aside className="lg:col-span-3 lg:order-1 order-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-3xl font-headline text-primary drop-shadow-[0_0_5px_hsl(var(--primary))]">
                <Calendar className="mr-2 h-6 w-6" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                {eventsData.map((event) => (
                  <li key={event.title}>
                    <p className="font-semibold text-base">{event.title}</p>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">{format(event.date, "MMMM d, yyyy")}</p>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full mt-6" asChild>
                 <Link href="/calendar">View Full Calendar <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        </aside>

        <main className="lg:col-span-6 lg:order-2 order-1">
           <h1 className="text-5xl font-headline font-bold mb-6 flex items-center text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]">
             <Newspaper className="mr-3 h-10 w-10" />
             Headlines
           </h1>

          <Card className="mb-8 group overflow-hidden">
            <div className="relative">
              <Image
                src={featuredNews.image}
                alt={featuredNews.title}
                width={800}
                height={450}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={featuredNews.aiHint}
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                 <h2 className="text-4xl font-headline font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">{featuredNews.title}</h2>
                 <p className="text-sm text-slate-300 mt-2 font-terminal">{featuredNews.source} - {featuredNews.time}</p>
              </div>
            </div>
          </Card>

          <h2 className="text-4xl font-headline font-bold mb-4 text-primary drop-shadow-[0_0_5px_hsl(var(--primary))]">Top Stories</h2>
          <div className="space-y-4">
            {topStories.map((item) => (
              <Card key={item.id} className="overflow-hidden transition-shadow hover:shadow-lg hover:border-primary/50">
                <div className="flex items-center">
                   <div className="flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={150}
                        height={100}
                        className="w-[150px] h-[100px] object-cover"
                        data-ai-hint={item.aiHint}
                      />
                    </div>
                  <div className="p-4 flex-grow">
                    <h3 className="text-xl font-bold font-headline mb-1">{item.title}</h3>
                    <div className="text-xs text-muted-foreground">
                      <span>{item.source} &middot; {item.time}</span>
                    </div>
                  </div>
                   <div className="p-4">
                     <Button variant="ghost" size="icon"><ExternalLink className="h-5 w-5" /></Button>
                   </div>
                </div>
              </Card>
            ))}
          </div>
        </main>

        <aside className="lg:col-span-3 lg:order-3 order-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-3xl font-headline text-primary drop-shadow-[0_0_5px_hsl(var(--primary))]">
                <BarChart3 className="mr-2 h-6 w-6" />
                Crypto Rankings
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="px-4">#</TableHead>
                    <TableHead className="px-2">Name</TableHead>
                    <TableHead className="text-right px-4">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cryptoData.map((crypto) => (
                    <TableRow key={crypto.symbol}>
                      <TableCell className="font-medium px-4">{crypto.rank}</TableCell>
                      <TableCell className="px-2">
                        <div className="flex items-center gap-2">
                          {crypto.icon}
                          <div>
                            <div className="font-bold text-sm">{crypto.name}</div>
                            <div className="text-xs text-muted-foreground">{crypto.symbol}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right px-4">
                        <div className="font-medium">${crypto.price.toLocaleString()}</div>
                         <div className={`text-xs ${crypto.change24h > 0 ? 'text-foreground' : 'text-accent'}`}>
                           {crypto.change24h > 0 ? '+' : ''}{crypto.change24h.toFixed(2)}%
                         </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
