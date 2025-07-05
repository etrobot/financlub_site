import { Waves, Twitter, Github, Dribbble } from "lucide-react"
import { Button } from "./ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Waves className="h-6 w-6 text-primary" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CryptoPulse. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <Button variant="ghost" size="icon">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Dribbble className="h-4 w-4" />
            <span className="sr-only">Dribbble</span>
          </Button>
        </div>
      </div>
    </footer>
  )
}
