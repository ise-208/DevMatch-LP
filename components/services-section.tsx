import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, BarChart3, Users, FileText, Handshake } from "lucide-react"

const services = [
  {
    icon: BarChart3,
    title: "新規案件の営業戦略設計",
    description: "受託開発企業に特化した営業戦略を設計し、安定的な案件獲得を実現します。",
    features: ["市場分析", "競合調査", "ターゲット選定"],
  },
  {
    icon: Users,
    title: "営業ターゲットリストの作成",
    description: "貴社のサービスに最適な見込み客リストを精査・作成いたします。",
    features: ["企業調査", "決裁者特定", "アプローチ優先度設定"],
  },
  {
    icon: Mail,
    title: "メール営業/テレアポによるリード獲得",
    description: "効果的なアプローチで見込み客を開拓し、質の高いリードを獲得します。",
    features: ["パーソナライズメール", "効果的なトークスクリプト", "フォローアップ"],
  },
  {
    icon: Phone,
    title: "商談設定と初期ヒアリング",
    description: "商談のセッティングから初期ヒアリングまで、営業プロセスを一貫サポート。",
    features: ["アポイント調整", "事前準備", "ニーズ把握"],
  },
  {
    icon: FileText,
    title: "必要に応じた技術資料の整備",
    description: "技術的な提案資料や説明資料を、お客様のニーズに合わせて整備します。",
    features: ["提案書作成", "技術説明資料", "事例紹介"],
  },
  {
    icon: Handshake,
    title: "エンジニアとの連携体制構築",
    description: "案件ごとにエンジニアとの連携体制を構築し、受注率向上に貢献します。",
    features: ["技術面談調整", "要件定義支援", "プロジェクト引き継ぎ"],
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-space-grotesk text-4xl font-bold text-foreground">提供内容</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            営業リストの選定から、トーク設計、提案まで一貫対応。 社名を伏せた営業 or
            「〇〇社の営業担当」として活動、どちらも可能です。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-space-grotesk text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
