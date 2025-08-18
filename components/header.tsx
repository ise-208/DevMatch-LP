import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <img src="/images/devmatch-logo.png" alt="DevMatch" className="h-8 w-auto cursor-pointer" />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/services" className="text-foreground hover:text-accent transition-colors">
                サービス
              </Link>
              <Link href="/case-studies" className="text-foreground hover:text-accent transition-colors">
                実績・事例
              </Link>
              <Link href="/pricing" className="text-foreground hover:text-accent transition-colors">
                料金プラン
              </Link>
              <Link href="/about" className="text-foreground hover:text-accent transition-colors">
                会社概要
              </Link>
              <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
                お問い合わせ
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex bg-transparent">
              資料請求
            </Button>
            <Button className="bg-accent hover:bg-accent/90">無料相談</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
