import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, BarChart3, Users, FileText, Handshake, CheckCircle, Clock, Target } from "lucide-react"

const services = [
  {
    icon: BarChart3,
    title: "新規案件の営業戦略設計",
    description: "受託開発企業に特化した営業戦略を設計し、安定的な案件獲得を実現します。",
    features: ["市場分析", "競合調査", "ターゲット選定"],
    details:
      "IT業界の市場動向を分析し、貴社の技術力と強みを活かせる最適な営業戦略を策定します。競合他社の動向調査から差別化ポイントの明確化まで、データに基づいた戦略設計を行います。",
    deliverables: ["営業戦略書", "市場分析レポート", "競合分析資料", "ターゲット企業リスト"],
    timeline: "2-3週間",
  },
  {
    icon: Users,
    title: "営業ターゲットリストの作成",
    description: "貴社のサービスに最適な見込み客リストを精査・作成いたします。",
    features: ["企業調査", "決裁者特定", "アプローチ優先度設定"],
    details:
      "貴社の技術領域と相性の良い企業を徹底的にリサーチし、決裁者情報まで含めた詳細なターゲットリストを作成します。アプローチの優先度も設定し、効率的な営業活動をサポートします。",
    deliverables: [
      "ターゲット企業リスト（100-300社）",
      "決裁者情報",
      "企業概要・ニーズ分析",
      "アプローチ優先度ランキング",
    ],
    timeline: "1-2週間",
  },
  {
    icon: Mail,
    title: "メール営業/テレアポによるリード獲得",
    description: "効果的なアプローチで見込み客を開拓し、質の高いリードを獲得します。",
    features: ["パーソナライズメール", "効果的なトークスクリプト", "フォローアップ"],
    details:
      "企業ごとにカスタマイズしたメール文面とトークスクリプトを作成し、継続的なアプローチを実施します。レスポンス率向上のため、複数回のフォローアップも含めて対応いたします。",
    deliverables: ["初回アプローチメール", "フォローアップメール", "テレアポスクリプト", "アプローチ結果レポート"],
    timeline: "継続的（月次契約）",
  },
  {
    icon: Phone,
    title: "商談設定と初期ヒアリング",
    description: "商談のセッティングから初期ヒアリングまで、営業プロセスを一貫サポート。",
    features: ["アポイント調整", "事前準備", "ニーズ把握"],
    details:
      "見込み客との商談アポイントメントを調整し、事前の企業調査と準備を行います。初回商談では基本的なニーズヒアリングを実施し、技術的な詳細は貴社エンジニアにスムーズに引き継ぎます。",
    deliverables: ["商談アポイント", "事前調査資料", "ヒアリングシート", "商談議事録"],
    timeline: "アポイント毎",
  },
  {
    icon: FileText,
    title: "必要に応じた技術資料の整備",
    description: "技術的な提案資料や説明資料を、お客様のニーズに合わせて整備します。",
    features: ["提案書作成", "技術説明資料", "事例紹介"],
    details:
      "貴社の技術力を分かりやすく伝える提案資料を作成します。過去の開発事例や技術的な強みを整理し、見込み客のニーズに合わせてカスタマイズした資料を準備いたします。",
    deliverables: ["会社紹介資料", "技術説明資料", "事例紹介資料", "提案書テンプレート"],
    timeline: "1-2週間",
  },
  {
    icon: Handshake,
    title: "エンジニアとの連携体制構築",
    description: "案件ごとにエンジニアとの連携体制を構築し、受注率向上に貢献します。",
    features: ["技術面談調整", "要件定義支援", "プロジェクト引き継ぎ"],
    details:
      "営業段階から技術的な検討が必要な案件について、貴社エンジニアとの連携体制を構築します。技術面談の調整や要件定義の支援を通じて、受注確度を高めます。",
    deliverables: ["連携フロー設計", "技術面談資料", "要件定義書", "引き継ぎ資料"],
    timeline: "案件毎",
  },
]

const processSteps = [
  {
    step: "01",
    title: "ヒアリング・戦略設計",
    description: "貴社の技術力、実績、目標をヒアリングし、最適な営業戦略を設計します。",
    duration: "1-2週間",
  },
  {
    step: "02",
    title: "ターゲット選定・リスト作成",
    description: "市場調査を基に、貴社に最適な見込み客リストを作成します。",
    duration: "1週間",
  },
  {
    step: "03",
    title: "営業活動開始",
    description: "メール営業・テレアポを通じて、継続的にリード獲得活動を行います。",
    duration: "継続的",
  },
  {
    step: "04",
    title: "商談設定・初期対応",
    description: "興味を示した企業との商談をセッティングし、初期ヒアリングを実施します。",
    duration: "随時",
  },
  {
    step: "05",
    title: "エンジニア連携・受注支援",
    description: "技術的な検討段階で貴社エンジニアと連携し、受注まで伴走します。",
    duration: "案件毎",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-space-grotesk">サービス詳細</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                営業リストの選定から、トーク設計、提案まで一貫対応。
                <br />
                社名を伏せた営業 or 「〇〇社の営業担当」として活動、どちらも可能です。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  完全成果報酬制
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Target className="h-4 w-4 mr-2" />
                  受託開発特化
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Clock className="h-4 w-4 mr-2" />
                  継続サポート
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-space-grotesk">提供サービス詳細</h2>
              <p className="text-xl text-muted-foreground">各サービスの詳細内容と成果物をご紹介します</p>
            </div>

            <div className="space-y-12">
              {services.map((service, index) => (
                <Card key={index} className="p-8">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="flex items-start space-x-4 mb-6">
                          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <service.icon className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-primary mb-2 font-space-grotesk">{service.title}</h3>
                            <p className="text-muted-foreground mb-4">{service.description}</p>
                            <p className="text-foreground leading-relaxed">{service.details}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-primary mb-3">主な成果物</h4>
                          <ul className="space-y-2">
                            {service.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-center text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-2">所要期間</h4>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 text-accent mr-2" />
                            {service.timeline}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Flow */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-space-grotesk">
                サービス提供フロー
              </h2>
              <p className="text-xl text-muted-foreground">
                初回ヒアリングから継続的な営業支援まで、5つのステップで進行します
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h3 className="text-xl font-bold text-primary font-space-grotesk">{step.title}</h3>
                          <Badge variant="outline" className="w-fit mt-2 sm:mt-0">
                            <Clock className="h-3 w-3 mr-1" />
                            {step.duration}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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
              まずは無料相談から始めませんか？
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              貴社の現状をヒアリングし、最適な営業戦略をご提案いたします。
              <br />
              初回相談は無料ですので、お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 px-8">
                無料相談を申し込む
              </Button>
              <Button size="lg" variant="outline" className="px-8 bg-transparent">
                資料をダウンロード
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
