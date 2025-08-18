import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "田中 太郎",
    company: "株式会社テックソリューション",
    position: "代表取締役",
    content:
      "DevMatchのおかげで、エンジニアが営業対応に時間を取られることがなくなりました。開発に集中できるようになり、プロジェクトの品質も向上しています。",
    rating: 5,
  },
  {
    name: "佐藤 花子",
    company: "システム開発株式会社",
    position: "営業部長",
    content:
      "営業活動の型化・仕組み化により、安定的に新規案件を獲得できるようになりました。営業ノウハウの属人化も解消され、大変満足しています。",
    rating: 5,
  },
  {
    name: "山田 次郎",
    company: "Web開発企業",
    position: "取締役",
    content:
      "貴社の一員として動いてくれるので、お客様からの信頼も厚く、受注率が大幅に向上しました。技術者が本業に専念できる環境が整いました。",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-space-grotesk text-4xl font-bold text-foreground">お客様の声</h2>
          <p className="text-xl text-muted-foreground">
            DevMatchをご利用いただいた受託開発企業様から、多くの喜びの声をいただいています
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-card-foreground leading-relaxed">"{testimonial.content}"</blockquote>
                <div className="border-t border-border pt-4">
                  <div className="font-space-grotesk font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position} | {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
