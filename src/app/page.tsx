import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bitcoin, CircleDollarSign, Newspaper } from 'lucide-react';

const cryptoData = [
  {
    rank: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 67890.12,
    change24h: 2.5,
    marketCap: '1.3T',
    icon: <Bitcoin className="h-6 w-6 text-yellow-500" />,
  },
  {
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3540.5,
    change24h: -1.2,
    marketCap: '425.6B',
    icon: <CircleDollarSign className="h-6 w-6 text-gray-500" />,
  },
  {
    rank: 3,
    name: 'Tether',
    symbol: 'USDT',
    price: 1.0,
    change24h: 0.01,
    marketCap: '112.5B',
    icon: <CircleDollarSign className="h-6 w-6 text-green-500" />,
  },
  {
    rank: 4,
    name: 'Solana',
    symbol: 'SOL',
    price: 150.75,
    change24h: 5.8,
    marketCap: '70.1B',
    icon: <CircleDollarSign className="h-6 w-6 text-purple-500" />,
  },
  {
    rank: 5,
    name: 'Ripple',
    symbol: 'XRP',
    price: 0.52,
    change24h: -0.5,
    marketCap: '28.9B',
    icon: <CircleDollarSign className="h-6 w-6 text-blue-500" />,
  },
];

const newsData = [
  {
    id: 1,
    title: 'Bitcoin Hits New All-Time High Amidst Market Frenzy',
    source: 'Crypto News Daily',
    time: '2 hours ago',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'cryptocurrency abstract',
  },
  {
    id: 2,
    title: 'Ethereum "Merge" Upgrade: What to Expect Next',
    source: 'DeFi Times',
    time: '5 hours ago',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'blockchain network',
  },
  {
    id: 3,
    title: 'Governments Worldwide Move Towards CBDC Adoption',
    source: 'Financial Tech Today',
    time: '1 day ago',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'digital currency',
  },
];


export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="text-center py-20">
        <h1 className="font-headline text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Welcome to CryptoPulse
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Your real-time crypto companion for news, rankings, and events. Stay ahead of the curve in the world of digital assets.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">Get Started <ArrowRight className="ml-2 h-5 w-5"/></Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-headline font-bold mb-6 flex items-center"><Newspaper className="mr-3 h-8 w-8 text-primary" />Latest News</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((item) => (
            <Card key={item.id} className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={item.aiHint}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold font-headline mb-2">{item.title}</h3>
                  <div className="text-sm text-muted-foreground flex items-center justify-between">
                    <span>{item.source}</span>
                    <span>{item.time}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="mt-16">
        <h2 className="text-3xl font-headline font-bold mb-6">Crypto Rankings</h2>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">#</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>24h %</TableHead>
                <TableHead className="text-right">Market Cap</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cryptoData.map((crypto) => (
                <TableRow key={crypto.symbol}>
                  <TableCell className="font-medium">{crypto.rank}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {crypto.icon}
                      <div>
                        <div className="font-bold">{crypto.name}</div>
                        <div className="text-muted-foreground">{crypto.symbol}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>${crypto.price.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={crypto.change24h > 0 ? 'default' : 'destructive'} className={crypto.change24h > 0 ? 'bg-green-500/20 text-green-700 dark:bg-green-500/20 dark:text-green-400' : 'bg-red-500/20 text-red-700 dark:bg-red-500/20 dark:text-red-400'}>
                      {crypto.change24h > 0 ? '+' : ''}{crypto.change24h.toFixed(2)}%
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">${crypto.marketCap}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>

    </div>
  );
}
