import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BookOpen } from "lucide-react"

const faqItems = [
  {
    value: "item-1",
    question: "What is a blockchain?",
    answer: "A blockchain is a distributed, immutable ledger that is used to record transactions, track assets, and build trust. It's the core technology behind most cryptocurrencies.",
  },
  {
    value: "item-2",
    question: "What is a cryptocurrency?",
    answer: "A cryptocurrency is a digital or virtual token that uses cryptography for security. Unlike traditional currencies issued by governments, cryptocurrencies are typically decentralized.",
  },
  {
    value: "item-3",
    question: "What is the difference between a coin and a token?",
    answer: "A coin (like Bitcoin or Ethereum) operates on its own blockchain. A token is built on top of an existing blockchain, such as the many ERC-20 tokens built on Ethereum.",
  },
  {
    value: "item-4",
    question: "What is a wallet?",
    answer: "A crypto wallet is a physical device or software program that stores your public and private keys and interacts with various blockchains to enable users to send and receive digital currency.",
  },
  {
    value: "item-5",
    question: "What is 'DeFi'?",
    answer: "DeFi, or Decentralized Finance, is an umbrella term for financial applications built on blockchain technology that aim to disrupt financial intermediaries. It includes services like lending, borrowing, and trading.",
  },
];

export default function WikiPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight">Crypto Wiki</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Your knowledge base for all things crypto. Learn the fundamentals and stay informed.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-card p-8 rounded-lg shadow-sm mb-12">
          <h2 className="text-3xl font-headline font-bold mb-4 flex items-center">
            <BookOpen className="mr-3 h-8 w-8 text-primary"/>
            Welcome to the Wiki
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The world of cryptocurrency can be complex and intimidating. This wiki is designed to break down key concepts into easy-to-understand explanations. Whether you're a complete beginner or looking to refresh your knowledge, you'll find valuable information here. Start by exploring our frequently asked questions below.
          </p>
        </div>

        <h3 className="text-2xl font-headline font-bold mb-6 text-center">Frequently Asked Questions</h3>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem value={item.value} key={item.value}>
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
