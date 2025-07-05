import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    slug: "navigating-the-bull-market",
    title: "How to Navigate the Next Crypto Bull Market",
    excerpt: "Strategies and tips for making the most of market upswings, from portfolio management to risk assessment.",
    author: "Jane Doe",
    authorAvatar: "https://placehold.co/100x100.png",
    date: "October 26, 2023",
    image: "https://placehold.co/600x400.png",
    aiHint: "financial chart arrow"
  },
  {
    slug: "understanding-defi",
    title: "A Beginner's Guide to Decentralized Finance (DeFi)",
    excerpt: "Explore the core concepts of DeFi, including lending, borrowing, and yield farming, and how to get started.",
    author: "John Smith",
    authorAvatar: "https://placehold.co/100x100.png",
    date: "October 22, 2023",
    image: "https://placehold.co/600x400.png",
    aiHint: "abstract network"
  },
  {
    slug: "nft-use-cases",
    title: "Beyond the Hype: Real-World Use Cases for NFTs",
    excerpt: "Discover how Non-Fungible Tokens are being used in gaming, art, real estate, and more.",
    author: "Alex Johnson",
    authorAvatar: "https://placehold.co/100x100.png",
    date: "October 18, 2023",
    image: "https://placehold.co/600x400.png",
    aiHint: "digital art"
  },
    {
    slug: "crypto-security-essentials",
    title: "Crypto Security Essentials: Protecting Your Digital Assets",
    excerpt: "Learn the best practices for securing your cryptocurrencies, from hardware wallets to strong passwords.",
    author: "Emily White",
    authorAvatar: "https://placehold.co/100x100.png",
    date: "October 15, 2023",
    image: "https://placehold.co/600x400.png",
    aiHint: "security shield"
  },
  {
    slug: "layer-2-scaling-solutions",
    title: "Layer 2 Scaling Solutions Explained",
    excerpt: "An in-depth look at how technologies like Rollups and Sidechains are solving Ethereum's scalability problem.",
    author: "Michael Brown",
    authorAvatar: "https://placehold.co/100x100.png",
    date: "October 11, 2023",
    image: "https://placehold.co/600x400.png",
    aiHint: "blockchain layers"
  },
  {
    slug: "the-psychology-of-trading",
    title: "The Psychology of Crypto Trading: Mastering Your Emotions",
    excerpt: "Understand the psychological pitfalls of trading and how to develop a disciplined mindset for long-term success.",
    author: "Sophia Green",
    authorAvatar: "https://placehold.co/100x100.png",
    date: "October 7, 2023",
    image: "https://placehold.co/600x400.png",
    aiHint: "brain maze"
  }
];


export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight">CryptoPulse Blog</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Your source for the latest insights, analysis, and news in the world of cryptocurrency.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="flex flex-col overflow-hidden group">
            <div className="flex-shrink-0">
              <Image 
                className="h-48 w-full object-cover" 
                src={post.image} 
                alt={post.title} 
                width={600} 
                height={400} 
                data-ai-hint={post.aiHint}
              />
            </div>
            <CardHeader className="flex-grow">
              <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={post.authorAvatar} alt={post.author} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" asChild>
                <Link href={`/blog/${post.slug}`}>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
