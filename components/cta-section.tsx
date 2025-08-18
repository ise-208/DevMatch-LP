import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-primary-foreground/20 bg-card/10 backdrop-blur-sm">
          <CardContent className="p-12 text-center space-y-8">
            <h2 className="font-space-grotesk text-4xl font-bold">
              エンジニアが本業（開発）に集中できる環境を作りませんか？
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              「受託開発企業が営業活動から解放され、開発に集中できる状態」を実現します。
              まずは無料相談で、貴社の営業課題をお聞かせください。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Phone className="mr-2 h-5 w-5" />
                無料相談を予約
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                資料請求
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="font-space-grotesk text-2xl font-bold text-accent">24時間</div>
                <div className="text-sm text-primary-foreground/70">以内に回答</div>
              </div>
              <div className="text-center">
                <div className="font-space-grotesk text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-primary-foreground/70">無料相談</div>
              </div>
              <div className="text-center">
                <div className="font-space-grotesk text-2xl font-bold text-accent">一貫対応</div>
                <div className="text-sm text-primary-foreground/70">営業プロセス全体</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
