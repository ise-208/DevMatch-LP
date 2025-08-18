import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Users, Target } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-primary text-primary-foreground py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-space-grotesk text-5xl lg:text-6xl font-bold leading-tight">
              受託開発企業の
              <span className="text-accent">営業担当</span>
              として動きます
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              エンジニアは足りているが新規案件が安定的に取れない、技術者が営業対応を兼務し開発効率が低下している。
              DevMatchは営業活動の型化・仕組み化によって、受託開発企業が"営業に悩まない"状態を実現します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                無料相談を予約
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                サービス詳細
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 space-y-3">
                <Code className="h-8 w-8 text-accent" />
                <h3 className="font-space-grotesk font-semibold text-lg">開発に集中</h3>
                <p className="text-sm text-primary-foreground/70">エンジニアが本業に専念できる環境</p>
              </div>
              <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 space-y-3 mt-8">
                <Users className="h-8 w-8 text-accent" />
                <h3 className="font-space-grotesk font-semibold text-lg">営業代行</h3>
                <p className="text-sm text-primary-foreground/70">貴社の一員として営業活動</p>
              </div>
              <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 space-y-3 -mt-4">
                <Target className="h-8 w-8 text-accent" />
                <h3 className="font-space-grotesk font-semibold text-lg">型化・仕組み化</h3>
                <p className="text-sm text-primary-foreground/70">営業活動の標準化で安定受注</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
