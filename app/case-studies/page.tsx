import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp, Users, Calendar, ArrowRight, Building2, Code, Zap } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    company: "株式会社テックソリューション",
    industry: "システム開発",
    size: "従業員15名",
    challenge: "優秀なエンジニアを抱えているが、営業活動に時間を取られ、開発に集中できない状況が続いていた。",
    solution: "営業戦略の設計から実行まで一貫してサポート。エンジニアは開発業務に専念できる体制を構築。",
    results: [
      "月間新規案件獲得数：2件 → 8件（4倍増）",
      "エンジニアの開発時間：60% → 85%（25%向上）",
      "平均受注単価：200万円 → 350万円（75%向上）",
    ],
    period: "6ヶ月",
    testimonial: {
      content:
        "DevMatchのおかげで、エンジニアが営業対応に時間を取られることがなくなりました。開発に集中できるようになり、プロジェクトの品質も向上しています。",
      author: "田中 太郎",
      position: "代表取締役",
    },
    tags: ["新規開拓", "営業効率化", "開発集中"],
  },
  {
    id: 2,
    company: "システム開発株式会社",
    industry: "Web開発",
    size: "従業員25名",
    challenge: "営業活動が属人化しており、安定的な案件獲得ができていない。営業ノウハウの蓄積も課題だった。",
    solution: "営業プロセスの標準化と仕組み化を実施。継続的なリード獲得システムを構築。",
    results: [
      "月間商談数：5件 → 15件（3倍増）",
      "受注率：20% → 45%（2.25倍向上）",
      "営業サイクル：3ヶ月 → 1.5ヶ月（50%短縮）",
    ],
    period: "4ヶ月",
    testimonial: {
      content:
        "営業活動の型化・仕組み化により、安定的に新規案件を獲得できるようになりました。営業ノウハウの属人化も解消され、大変満足しています。",
      author: "佐藤 花子",
      position: "営業部長",
    },
    tags: ["プロセス標準化", "受注率向上", "営業サイクル短縮"],
  },
  {
    id: 3,
    company: "Web開発企業",
    industry: "Web制作・開発",
    size: "従業員8名",
    challenge: "小規模チームのため営業リソースが不足。技術力はあるが、それを適切にアピールできていなかった。",
    solution: "技術力を活かした提案資料の作成と、継続的な営業活動を代行。技術面談のサポートも実施。",
    results: [
      "月間売上：500万円 → 1,200万円（2.4倍増）",
      "継続案件率：30% → 70%（40%向上）",
      "技術面談成功率：50% → 85%（35%向上）",
    ],
    period: "8ヶ月",
    testimonial: {
      content:
        "貴社の一員として動いてくれるので、お客様からの信頼も厚く、受注率が大幅に向上しました。技術者が本業に専念できる環境が整いました。",
      author: "山田 次郎",
      position: "取締役",
    },
    tags: ["技術力アピール", "売上向上", "継続案件獲得"],
  },
]

const successMetrics = [
  {
    icon: TrendingUp,
    metric: "平均売上向上率",
    value: "180%",
    description: "6ヶ月間での平均的な売上向上率",
  },
  {
    icon: Users,
    metric: "新規案件獲得数",
    value: "3.2倍",
    description: "月間新規案件獲得数の平均向上倍率",
  },
  {
    icon: Zap,
    metric: "受注率向上",
    value: "65%",
    description: "営業プロセス改善による受注率向上",
  },
  {
    icon: Building2,
    metric: "継続利用率",
    value: "95%",
    description: "サービス継続利用企業の割合",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-space-grotesk">実績・事例紹介</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                DevMatchをご利用いただいた受託開発企業様の成功事例をご紹介します。
                <br />
                営業代行により、どのような成果を実現できたかをご覧ください。
              </p>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-space-grotesk">実績サマリー</h2>
              <p className="text-xl text-muted-foreground">これまでの支援実績から見る、平均的な成果指標</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {successMetrics.map((metric, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <metric.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2 font-space-grotesk">{metric.value}</div>
                    <div className="font-semibold text-foreground mb-2">{metric.metric}</div>
                    <div className="text-sm text-muted-foreground">{metric.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-space-grotesk">詳細事例</h2>
              <p className="text-xl text-muted-foreground">具体的な課題解決プロセスと成果をご紹介します</p>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <Card key={study.id} className="p-8">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Company Info */}
                      <div className="lg:col-span-1">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-2xl font-bold text-primary mb-2 font-space-grotesk">{study.company}</h3>
                            <div className="space-y-2 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Building2 className="h-4 w-4 mr-2" />
                                {study.industry}
                              </div>
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-2" />
                                {study.size}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2" />
                                支援期間：{study.period}
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {study.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Case Details */}
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h4 className="font-semibold text-primary mb-3 flex items-center">
                            <Code className="h-4 w-4 mr-2" />
                            課題
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-3 flex items-center">
                            <ArrowRight className="h-4 w-4 mr-2" />
                            解決策
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-3 flex items-center">
                            <TrendingUp className="h-4 w-4 mr-2" />
                            成果
                          </h4>
                          <ul className="space-y-2">
                            {study.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-center text-muted-foreground">
                                <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Testimonial */}
                        <Card className="bg-accent/5 border-accent/20">
                          <CardContent className="p-6">
                            <div className="flex space-x-1 mb-3">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                              ))}
                            </div>
                            <blockquote className="text-foreground leading-relaxed mb-4">
                              "{study.testimonial.content}"
                            </blockquote>
                            <div className="text-sm">
                              <div className="font-semibold text-primary">{study.testimonial.author}</div>
                              <div className="text-muted-foreground">{study.testimonial.position}</div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-space-grotesk">
              あなたの会社も成功事例の仲間入りを
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              営業課題を解決し、エンジニアが開発に集中できる環境を作りませんか？
              <br />
              まずは無料相談で、貴社の現状と課題をお聞かせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 px-8">
                無料相談を申し込む
              </Button>
              <Button size="lg" variant="outline" className="px-8 bg-transparent">
                詳細資料をダウンロード
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
